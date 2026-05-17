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
- Use a host with automatic SSL certificates (Vercel, Netlify, Cloudflare Pages, or similar)
- Ensure your DNS points to the production host and force HTTPS redirects
- Keep SPA rewrites enabled so `/about`, `/services`, and `/contact` resolve to `index.html`
- This project already includes:
	- `public/_redirects` for HTTPS + SPA fallback (Netlify-compatible)
	- `public/_headers` for security headers (HSTS, nosniff, referrer policy, frame policy)
	- `vercel.json` for redirects, rewrites, and security headers on Vercel
- After deploy, verify:
	- all internal links route correctly
	- `https://electricprecisionlabs.co.uk/sitemap.xml` loads
	- `https://electricprecisionlabs.co.uk/robots.txt` loads
	- social preview card image resolves over HTTPS

---

© 2026 Electric Precision Labs. All rights reserved.
