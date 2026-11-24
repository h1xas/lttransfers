import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production domain. Used for canonical, hreflang, og:url and the sitemap. One value, set once.
const site = 'https://lttransfers.lt';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // English is the default and lives at `/`; Lithuanian lives at `/lt/`, Russian at `/ru/`.
  // All are static routes: there is no runtime language switching.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'lt', 'ru'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // Indexable pages only: the 404 screens are noindex.
      filter: (page) => !/\/404\/?$/.test(page),
      // Adds reciprocal en / lt / ru alternates to each sitemap entry (the HTML <link rel="alternate"> tags stay primary).
      i18n: { defaultLocale: 'en', locales: { en: 'en', lt: 'lt', ru: 'ru' } },
    }),
  ],
});
