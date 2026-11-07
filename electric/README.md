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
3. In cPanel → **Git™ Version Control** → manage the `electric-precision` repo → **Pull or Deploy** tab:
   - **Update from Remote** (pulls the latest commit into `/home/electricprecisio/repositories/electric-precision`)
   - **Deploy HEAD Commit** (runs `.cpanel.yml`, which copies `electric/dist/` into `/home/electricprecisio/public_html/`)
4. There is currently no webhook/cron connecting GitHub pushes to cPanel — both steps above must be triggered manually each time.

---

© 2026 Electric Precision Labs. All rights reserved.
