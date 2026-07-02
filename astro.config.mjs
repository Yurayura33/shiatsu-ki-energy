import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: set `site` to the final domain once it exists (also update public/robots.txt).
export default defineConfig({
  site: 'https://hoshiko-tech.github.io',
  base: '/',
  integrations: [sitemap()],
});
