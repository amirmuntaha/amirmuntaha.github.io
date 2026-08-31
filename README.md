# amirmuntaha.github.io

Personal portfolio and collection of free, browser-based web tools and practical guides by Amir Muntaha. Live at [amirmuntaha.github.io](https://amirmuntaha.github.io/).

The site is fully static (plain HTML + CSS + a small vanilla-JS enhancement), hosted on GitHub Pages, and designed with a minimalist dark theme.

## Features

- **Minimalist dark theme** — a single shared stylesheet (`assets/site.css`) drives a consistent, always-dark design across every page.
- **Bilingual (ID / EN)** — Indonesian is the default. A language toggle switches all content client-side and persists the choice in `localStorage`.
- **Responsive** — mobile navigation dropdown, collapsing card grids, and horizontally scrollable tables with visible keyboard focus.
- **SEO-friendly** — per-page titles/descriptions, Open Graph and Twitter tags, canonical URLs, `sitemap.xml`, `robots.txt`, and structured data.
- **Blue "A" favicon** — shared `favicon.svg` referenced by every page.

## Project structure

```
.
├── index.html                                  # Homepage (tools + guides + FAQ)
├── about/index.html                            # About page
├── contact/index.html                          # Contact page
├── privacy/index.html                          # Privacy policy
├── guides/
│   ├── loan-amortization/index.html            # Guide: loan amortization
│   └── building-transparent-web-tools/index.html  # Guide: building transparent web tools
├── assets/
│   ├── site.css                                # Shared dark-theme stylesheet
│   └── site.js                                 # Language toggle + mobile menu
├── favicon.svg                                 # Blue "A" site icon
├── robots.txt
├── sitemap.xml
└── ads.txt                                     # Google AdSense authorization
```

## Featured tools & guides

- **Kalkulator Pinjaman & Amortisasi** — [loan calculator](https://amirmuntaha.github.io/loan_calculator/)
- **Instagram Poster Generator** — [generator](https://amirmuntaha.github.io/instagram_extractor/)
- **Reddit Scraper** — [project](https://reddit-scrapper-phi.vercel.app/)
- **Guide:** [Understanding loan amortization](https://amirmuntaha.github.io/guides/loan-amortization/)
- **Guide:** [Building transparent web tools](https://amirmuntaha.github.io/guides/building-transparent-web-tools/)

## Local development

No build step or dependencies are required. Clone the repo and serve the folder with any static file server, for example:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

## Deployment

The site deploys automatically via GitHub Pages from the default branch. Any merge to `master` triggers a new Pages build.

## License

© Amir Muntaha. All rights reserved.
