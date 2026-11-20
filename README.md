# Portfolio – AZZABI MOUHAMED YASSINE

Static bilingual (FR/EN) portfolio, no build step, no database, no paid API.

## Structure
- `index.html` – the site (SEO metadata, JSON-LD)
- `css/style.css`, `js/main.js` – styles, language switcher, menu, animations
- `cv/` – French and English CV PDFs (linked by the Download CV button, which follows the selected language)
- `assets/favicon.svg`, `netlify.toml`, `robots.txt`, `sitemap.xml`

## Deploy on Netlify
**Drag and drop (fastest):** log in at app.netlify.com, open *Sites*, and drag this whole folder into the "Deploy manually" area.
**Via Git:** push the folder to GitHub, then *Add new site > Import an existing project*. Leave the build command empty; publish directory is `.` (already set in `netlify.toml`).

## Choose your address
*Site configuration > Change site name* and try `yassineazzebi`. If it is taken, use another name such as `yassine-azzabi` or `azzabi-yassine-portfolio`. Then update the URL in `index.html` (canonical, og:url, JSON-LD), `robots.txt` and `sitemap.xml`, and in the CV header line, and redeploy.

## Editing
Texts: English lives in `index.html`, French in the `FR` object in `js/main.js`. CVs: edit and regenerate the PDFs with your preferred tool, keeping the same file names.
