<?php
/**
 * GitHub webhook receiver for automatic deployment.
 *
 * On a verified push to `main`, this pulls the latest commit into the
 * server-side git clone and republishes the pre-built `electric/dist/`
 * output into the live document root (mirrors what .cpanel.yml's
 * "Deploy HEAD Commit" does, but triggered automatically instead of
 * manually from cPanel).
 *
 * Configuration (secret + paths) is intentionally kept OUTSIDE the web
 * root and OUTSIDE git, in a JSON file at:
 *   <home directory>/.deploy-config.json
 * where <home directory> is the parent of this server's DOCUMENT_ROOT.
 * Expected shape:
 *   {
 *     "secret": "…",       // GitHub webhook secret (hex string)
 *     "repoPath": "…",     // server-side git clone path
 *     "docRoot": "…"       // live document root to publish into
 *   }
 */

function respond($code, $message) {
    http_response_code($code);
    header('Content-Type: text/plain');
    echo $message . "\n";
    exit;
}

function logLine($logFile, $message) {
    @file_put_contents($logFile, '[' . date('c') . '] ' . $message . "\n", FILE_APPEND);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // Simple reachability check; reveals nothing sensitive.
    respond(200, 'Deploy hook is active. Use a GitHub webhook (POST) to trigger it.');
}

$homeDir    = dirname(rtrim($_SERVER['DOCUMENT_ROOT'], '/'));
$configFile = $homeDir . '/.deploy-config.json';
$logFile    = $homeDir . '/deploy.log';

$config = json_decode((string) @file_get_contents($configFile), true);
if (!$config || empty($config['secret']) || empty($config['repoPath']) || empty($config['docRoot'])) {
    logLine($logFile, 'ERROR: missing or invalid config at ' . $configFile);
    respond(500, 'Server misconfigured');
}

$payload   = file_get_contents('php://input');
$signature = $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '';
$expected  = 'sha256=' . hash_hmac('sha256', $payload, $config['secret']);

if (!$signature || !hash_equals($expected, $signature)) {
    logLine($logFile, 'REJECTED: invalid or missing signature');
    respond(401, 'Invalid signature');
}

$event = $_SERVER['HTTP_X_GITHUB_EVENT'] ?? '';
if ($event === 'ping') {
    logLine($logFile, 'Ping received, responding OK');
    respond(200, 'pong');
}
if ($event !== 'push') {
    respond(204, 'Ignored event: ' . $event);
}

$data = json_decode($payload, true);
$ref  = $data['ref'] ?? 'unknown';
if ($ref !== 'refs/heads/main') {
    respond(204, 'Ignored ref: ' . $ref);
}

$disabled = array_map('trim', explode(',', (string) ini_get('disable_functions')));
if (!function_exists('shell_exec') || in_array('shell_exec', $disabled, true)) {
    logLine($logFile, 'ERROR: shell_exec is disabled on this server; cannot auto-deploy');
    respond(500, 'shell_exec disabled; cannot auto-deploy');
}

$cmd = sprintf(
    'cd %s && git fetch origin 2>&1 && git reset --hard origin/main 2>&1 && cp -R electric/dist/. %s 2>&1; echo EXIT:$?',
    escapeshellarg($config['repoPath']),
    escapeshellarg(rtrim($config['docRoot'], '/') . '/')
);

$output = shell_exec($cmd);
logLine($logFile, "DEPLOY TRIGGERED for commit " . ($data['after'] ?? 'unknown') . "\n" . $output);

respond(200, 'Deployed');
