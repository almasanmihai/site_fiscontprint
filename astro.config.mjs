import { defineConfig } from 'astro/config';

// GitHub Pages: https://almasanmihai.github.io/site_fiscontprint/
// Pentru domeniul fiscontprint.ro: site: 'https://fiscontprint.ro', fără base.
export default defineConfig({
  site: 'https://almasanmihai.github.io',
  base: '/site_fiscontprint/',
  output: 'static',
  compressHTML: true,
});
