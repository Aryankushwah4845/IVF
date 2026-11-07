# Sushila General Hospital & Dr. C.L. Singh IVF Centre — Website

A static, single-page website. There is no build step or server code, so it can be hosted anywhere.

## Files
```
index.html            ← the whole page
404.html              ← shown for broken links (uses /IVF/ paths; change to / on a custom domain)
assets/css/style.css  ← all styling (colours are at the top under :root)
assets/js/main.js     ← mobile menu, scroll effects, photo lightbox
assets/img/           ← optimised photos (.webp + .jpg fallback)
assets/favicon.svg
robots.txt
```
The `` `Photos `` folder holds the original WhatsApp photos. It is not needed for hosting.

## Design system
- Navy `--navy: #1b2550` → brand colour and the only colour used for buttons, links and focus
- Pink `--ivf: #b53a6b` → identifies fertility content (section tag, panel top rule)
- Sea green `--obs: #16756a` → identifies maternity content
- Type: Source Serif 4 (headings, 600) + Source Sans 3 (400/500/600), minor-third scale from 16px, nothing below 12px
- All colour pairs meet WCAG 2.1 AA contrast; every tap target is at least 44px

## Hosting (pick one)
- **Netlify:** go to app.netlify.com/drop and drag this folder in.
- **Vercel / Cloudflare Pages / GitHub Pages:** push the folder to a repo and deploy it with no build command. The output directory is the root.
- **Regular cPanel hosting:** upload everything except `` `Photos `` into `public_html`.

## After the domain is live
1. In `index.html`, replace `https://aryankushwah4845.github.io/IVF/` (canonical, og:url, og:image, JSON-LD) with the new domain, and change `/IVF/` to `/` in `404.html`.
2. Add a `sitemap.xml` with the domain and submit it in Google Search Console.
3. Claim or update the Google Business Profile so the map pin and the "Get directions" link point to the exact location.

## Compliance (India)
- PC-PNDT notice is in the footer (no sex determination / selection).
- ART (Regulation) Act 2021: registered ART clinics must display their registration. Add the National ART & Surrogacy Registry number in the commented slot in the footer of `index.html`.
- No success-rate or outcome claims are made on the site.

## Things to confirm with the client
- The doctor's name, and that the portrait is Dr. Swati Singh. The name was taken from the hospital stationery.
- Years: the site says **15+ years**. The brochure has a "30 years Excellence" badge.
- Whether 93078 92220 or 91610 74513 is on WhatsApp. If so, a WhatsApp button can be added.
- The ART clinic registration number.
- OPD timings.
- Whether "Eye care" and "Government-recognised MTP centre" from the brochure should stay on the site.
