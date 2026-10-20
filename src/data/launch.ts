/*
  Launch guard. Everything that must be real before the site ships, in one place.

  `npm run build:release` fails while any of these is outstanding (see BaseLayout.astro, which calls
  `assertLaunchReady()`); an ordinary `npm run build` and the dev server never do. Nothing here is hidden
  from the page: placeholders stay visible in development so the missing dependency is obvious.
*/
import { routes } from './routes';
import { hasPhone, hasWhatsApp } from './site';

/**
  Language-relative paths that are linked from the homepage but have no real page yet. Remove an entry
  when its page exists. Privacy and Terms are never rendered as links while listed here, so the footer
  cannot point at a legal page that is not written (see SiteFooter.astro).
*/
export const unbuiltPaths: string[] = [
  '/privacy/',
  '/terms/',
  '/pricing-and-payment/',
];

export const isBuilt = (path: string) => !unbuiltPaths.includes(path);

export function launchBlockers(): string[] {
  const blockers: string[] = [];
  const devRoutes = routes.filter((r) => r.status === 'dev');
  if (devRoutes.length) blockers.push(`route prices/durations are development placeholders (${devRoutes.map((r) => r.id).join(', ')})`);
  if (!hasPhone) blockers.push('phone number not supplied (data/site.ts)');
  if (!hasWhatsApp) blockers.push('WhatsApp link not supplied (data/site.ts)');
  if (unbuiltPaths.length) blockers.push(`pages linked but not built: ${unbuiltPaths.join(', ')}`);
  return blockers;
}

export function assertLaunchReady(): void {
  if (import.meta.env.MODE !== 'release') return;
  const blockers = launchBlockers();
  if (blockers.length) {
    throw new Error(`Release build blocked:\n  - ${blockers.join('\n  - ')}`);
  }
}
