import { defineConfig } from 'astro/config';

// TODO: replace with the production domain once it is confirmed.
// `.example` is a reserved TLD, so this can never collide with a real site.
const site = 'https://lttransfers.example';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // English is the default and lives at `/`; Lithuanian lives at `/lt/`.
  // Both are static routes: there is no runtime language switching.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'lt'],
    routing: { prefixDefaultLocale: false },
  },
});
