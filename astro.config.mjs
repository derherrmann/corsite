// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  image: {
    breakpoints: [640, 750, 828, 1080, 1280, 1668, 2048, 2560, 3000],
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  redirects: {
    '/': '/de/',
  },
});
