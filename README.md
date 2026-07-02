# Japanese Wellness Therapy | 指圧と氣エネルギー

Static website for Japanese Wellness Therapy — acupressure and Qi energy treatment by Joseph in the Sutton & Carshalton area. Built with [Astro](https://astro.build).

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to preview.

## Build

```bash
npm run build
```

Static files are output to `dist/`.

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via GitHub Actions.

The site is built to be served from the domain root. When the custom domain is added:

1. Set `site` to the domain in `astro.config.mjs`.
2. Update the `Sitemap` URL in `public/robots.txt`.
3. Add a `CNAME` file with the domain and configure it in the repository's Pages settings.
