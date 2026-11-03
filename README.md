# Sushila General Hospital & Dr. C.L. Singh IVF Centre — Website

A static, single-page website. There is no build step or server code, so it can be hosted anywhere.

## Files
```
index.html            ← the whole page
assets/css/style.css  ← all styling (colours are at the top under :root)
assets/js/main.js     ← mobile menu, scroll effects, photo lightbox
assets/img/           ← optimised photos (.webp + .jpg fallback)
assets/favicon.svg
robots.txt
```
The `` `Photos `` folder holds the original WhatsApp photos. It is not needed for hosting.

## Colours
- Pink `--ivf: #c03f74` → IVF / fertility sections
- Sea green `--obs: #1e8a78` → obstetrics / maternity sections
- Navy `--navy: #1d2a5c` → brand colour (from the hospital logo)

## Hosting (pick one)
- **Netlify:** go to app.netlify.com/drop and drag this folder in.
- **Vercel / Cloudflare Pages / GitHub Pages:** push the folder to a repo and deploy it with no build command. The output directory is the root.
- **Regular cPanel hosting:** upload everything except `` `Photos `` into `public_html`.

## After the domain is live
1. In `index.html`, change the `og:image` meta tag to the full URL, for example `https://yourdomain.com/assets/img/icsi-embryologist.jpg`.
2. Add a `sitemap.xml` with the domain and submit it in Google Search Console.
3. Claim or update the Google Business Profile so the map pin and the "Get directions" link point to the exact location.

## Things to confirm with the client
- The doctor's name, and that the portrait is Dr. Swati Singh. The name was taken from the hospital stationery.
- Years: the site says **15+ years**. The brochure has a "30 years Excellence" badge.
- Whether 92086 66200 is on WhatsApp. If it is, a WhatsApp button can be added.
- OPD timings.
- Whether "Eye care" and "Government-recognised MTP centre" from the brochure should stay on the site.
