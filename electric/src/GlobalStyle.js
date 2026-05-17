import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* ── Logo-derived palette ─────────────────────────────
       Electric blue  #1e72c8  ("ELECTRIC" text)
       Deep navy      #1a2f6e  ("LABS" box)
       Steel silver   #8c9eb5  ("PRECISION" text)
       Red accent     #d42b2b  (left stripe)
    ──────────────────────────────────────────────────── */
    --bg-1: #ffffff;
    --bg-2: #f4f6fa;
    --bg-3: #eaecf2;
    --bg-4: #dde2ed;
    --ink: #1c2a45;
    --muted: #4a5568;
    --title: #0f1a35;
    --card: rgba(255, 255, 255, 0.88);
    --card-border: rgba(30, 114, 200, 0.18);
    --section-divider: rgba(30, 114, 200, 0.22);
    --accent: #d42b2b;
    --accent-2: #1e72c8;
    --accent-3: #1a6abf;
    --success: #2a9e78;
  }

  body {
    font-family: 'Manrope', 'Segoe UI', sans-serif;
    background:
      radial-gradient(1200px 800px at 0% 0%, rgba(30, 114, 200, 0.08), transparent 55%),
      radial-gradient(1000px 600px at 100% 0%, rgba(212, 43, 43, 0.06), transparent 58%),
      radial-gradient(900px 560px at 20% 100%, rgba(30, 114, 200, 0.05), transparent 64%),
      linear-gradient(155deg, var(--bg-1) 0%, var(--bg-2) 36%, var(--bg-3) 68%, var(--bg-4) 100%);
    color: var(--ink);
    min-height: 100vh;
    line-height: 1.72;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    position: relative;
  }

  html {
    scroll-behavior: smooth;
  }

  body::before,
  body::after {
    content: "";
    position: fixed;
    width: 380px;
    height: 380px;
    border-radius: 999px;
    pointer-events: none;
    z-index: -1;
    filter: blur(36px);
    animation: drift 16s ease-in-out infinite;
  }

  #root::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: -1;
    background:
      radial-gradient(680px 460px at 78% 42%, rgba(30, 114, 200, 0.06), transparent 70%),
      radial-gradient(560px 400px at 24% 78%, rgba(212, 43, 43, 0.04), transparent 72%),
      radial-gradient(620px 420px at 46% 12%, rgba(30, 114, 200, 0.04), transparent 74%);
    animation: colorSweep 22s ease-in-out infinite;
  }

  body::before {
    top: -120px;
    left: -90px;
    background: rgba(30, 114, 200, 0.07);
  }

  body::after {
    right: -110px;
    bottom: -120px;
    background: rgba(212, 43, 43, 0.05);
    animation-delay: 2.4s;
  }

  #root {
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Sora', 'Manrope', sans-serif;
    color: var(--title);
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: clamp(2rem, 6vw, 4.25rem);
    line-height: 1.05;
  }

  h2 {
    font-size: clamp(1.35rem, 3vw, 2.2rem);
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--accent);
    text-decoration: none;
  }

  img,
  video,
  canvas,
  svg {
    max-width: 100%;
    height: auto;
  }

  p {
    color: var(--muted);
    line-height: 1.8;
  }

  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  ul li {
    position: relative;
    padding-left: 1.4rem;
  }

  ul li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.56em;
    width: 0.62rem;
    height: 0.62rem;
    border-radius: 999px;
    background: linear-gradient(145deg, #5ab0f0, #1e72c8 62%, #1a5faa 100%);
    border: 1px solid rgba(30, 114, 200, 0.4);
    box-shadow: 0 1px 4px rgba(30, 114, 200, 0.25);
  }

  main {
    width: min(1180px, calc(100% - 2.25rem));
    margin: 2.5rem auto 4rem;
  }

  main > * + * {
    margin-top: 1.35rem;
    padding-top: 1.1rem;
    position: relative;
  }

  main > * + *::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(200, 210, 230, 0.0) 0%,
      rgba(200, 210, 230, 0.6) 14%,
      var(--section-divider) 50%,
      rgba(200, 210, 230, 0.6) 86%,
      rgba(200, 210, 230, 0.0) 100%
    );
  }

  .glass-card {
    background: var(--card);
    border: 1px solid var(--card-border);
    border-radius: 18px;
    box-shadow: 0 8px 32px rgba(30, 60, 120, 0.10);
    backdrop-filter: blur(8px);
  }

  .parallax-media {
    position: relative;
    overflow: hidden;
  }

  .parallax-media img {
    filter: brightness(1.05) saturate(1.04) contrast(1.04);
    transition: transform 700ms cubic-bezier(0.2, 0.8, 0.2, 1), filter 500ms ease;
    will-change: transform;
  }

  .parallax-media:hover img {
    transform: scale(1.08) translateY(-6px);
    filter: brightness(1.1) saturate(1.14) contrast(1.08);
  }

  .reveal {
    animation: revealUp 700ms ease both;
  }

  .reveal-delay-1 {
    animation-delay: 150ms;
  }

  .reveal-delay-2 {
    animation-delay: 300ms;
  }

  @keyframes revealUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes drift {
    0%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(12px, -14px, 0);
    }
  }

  @keyframes colorSweep {
    0%,
    100% {
      transform: translate3d(0, 0, 0) scale(1);
      filter: saturate(1);
    }
    50% {
      transform: translate3d(0, -10px, 0) scale(1.02);
      filter: saturate(1.08);
    }
  }

  ::selection {
    background: rgba(243, 183, 53, 0.38);
    color: #f5fbff;
  }

  @media (max-width: 720px) {
    main {
      width: min(1180px, calc(100% - 1.25rem));
      margin-top: 1.5rem;
    }

    body::before,
    body::after {
      width: 260px;
      height: 260px;
    }
  }
`;

export default GlobalStyle;
