# Electric Precision Labs Website

A modern, visually stunning website for Electric Precision Labs, inspired by https://www.smartgpower.com/.

## Features
- Built with React + Vite for fast, modern development
- Styled with styled-components for a premium, cohesive look
- Responsive design with impactful imagery
- Main pages: Home, About, Services, Contact
- Easy navigation with a sticky, elegant navbar

## Getting Started

### Install dependencies
```
npm install
```

### Start the development server
```
npm run dev
```

### Build for production
```
npm run build
```

## Project Structure
- `src/pages/` — Main page components
- `src/components/` — Shared UI components (Navbar, etc.)
- `src/GlobalStyle.js` — Global styles for typography, color, and layout
- `public/assets/` — Images and static assets

## Customization
- Replace images in `public/assets/` with your own for production
- Update content in `src/pages/` as needed

## Contact Form Endpoint (Optional)
- Create a `.env` file from `.env.example`
- Set `VITE_CONTACT_ENDPOINT` to your API URL (example: `https://formspree.io/f/your-form-id`)
- Form submissions are sent as JSON with `Accept: application/json`
- If `VITE_CONTACT_ENDPOINT` is not set, the contact form falls back to opening the user's email client (`mailto`)

## SEO Files
- `public/robots.txt` allows crawling and declares the sitemap URL
- `public/sitemap.xml` includes core routes: home, about, services, and contact
- Update the domain in `index.html`, `robots.txt`, and `sitemap.xml` when deploying to your final production URL

## Production Deployment Checklist
- Live production host: **Mochahost (cPanel)** at `electricprecisionlabs.co.uk`
- Ensure your DNS points to the production host and force HTTPS redirects
- Keep SPA rewrites enabled so `/about`, `/services`, and `/contact` resolve to `index.html`
- This project already includes:
	- `public/_redirects` for HTTPS + SPA fallback (Netlify-compatible)
	- `public/_headers` for security headers (HSTS, nosniff, referrer policy, frame policy)
	- `vercel.json` for redirects, rewrites, and security headers if ever hosted on Vercel
- After deploy, verify:
	- all internal links route correctly
	- `https://electricprecisionlabs.co.uk/sitemap.xml` loads
	- `https://electricprecisionlabs.co.uk/robots.txt` loads
	- social preview card image resolves over HTTPS

## Deploying to Mochahost (cPanel)
This account has no Node.js environment configured in cPanel, so the server cannot run `npm install`/`npm run build` itself. Instead, `electric/dist/` is built locally and committed to git, and `.cpanel.yml` (at the repo root) simply copies it into place.

1. After making changes, rebuild locally from `electric/`:
   ```
   npm run build
   ```
2. Commit the updated `electric/dist/` output along with your source changes, then push to `main`.
3. Deployment then happens automatically via a GitHub webhook (see below). If the webhook is ever disabled/broken, fall back to manual deploy in cPanel → **Git™ Version Control** → manage the `electric-precision` repo → **Pull or Deploy** tab:
   - **Update from Remote** (pulls the latest commit into `/home/electricprecisio/repositories/electric-precision`)
   - **Deploy HEAD Commit** (runs `.cpanel.yml`, which copies `electric/dist/` into `/home/electricprecisio/public_html/`)

## Automatic Deployment (GitHub Webhook → Mochahost)
Pushes to `main` automatically deploy via `electric/public/deploy-hook.php` (ships to `/deploy-hook.php` in the live document root). A GitHub webhook POSTs to this endpoint on every push; the script verifies the request, then runs the same `git fetch && git reset --hard origin/main && cp -R electric/dist/.` steps that the manual cPanel deploy performs.

**One-time server setup** (already done for this account, documented here in case it needs to be recreated):
1. Create a file **outside** the web root at `/home/electricprecisio/.deploy-config.json` (never commit this — it holds the webhook secret):
   ```json
   {
     "secret": "<GitHub webhook secret>",
     "repoPath": "/home/electricprecisio/repositories/electric-precision",
     "docRoot": "/home/electricprecisio/public_html"
   }
   ```
   Restrict its permissions, e.g. `chmod 600 ~/.deploy-config.json`.
2. A GitHub webhook is configured on this repo (Settings → Webhooks) pointing to `https://electricprecisionlabs.co.uk/deploy-hook.php`, content type `application/json`, secret matching the config file above, for `push` events only.
3. Deployment activity is logged to `/home/electricprecisio/deploy.log` (also outside the web root) for troubleshooting.

**Requirements:** the server's PHP must allow `shell_exec`. If it's disabled (`disable_functions` in php.ini), the hook responds with `500 shell_exec disabled` and logs the failure — fall back to the manual cPanel steps above in that case.

---

© 2026 Electric Precision Labs. All rights reserved.
