/*
  Launch guard. Contact details and the Formspree form endpoint the live site depends on, in one place.

  `npm run build:release` fails while any of these is missing (see BaseLayout.astro, which calls
  `assertLaunchReady()`); an ordinary `npm run build` and the dev server never do. Business and legal items
  that are not code (operator details, retention, cancellation policy and so on) live in
  docs/legal-launch-checklist.md.
*/
import { hasEmail, hasPhone, hasWhatsApp } from './site';

export function launchBlockers(): string[] {
  const blockers: string[] = [];
  if (!hasPhone) blockers.push('phone number not supplied (data/site.ts)');
  if (!hasWhatsApp) blockers.push('WhatsApp link not supplied (data/site.ts)');
  if (!hasEmail) blockers.push('email address not supplied (data/site.ts)');
  if (!(import.meta.env.PUBLIC_FORMSPREE_ENDPOINT ?? '').trim()) {
    blockers.push('PUBLIC_FORMSPREE_ENDPOINT not set (.env.example, docs/formspree-integration.md)');
  }
  return blockers;
}

export function assertLaunchReady(): void {
  if (import.meta.env.MODE !== 'release') return;
  const blockers = launchBlockers();
  if (blockers.length) {
    throw new Error(`Release build blocked:\n  - ${blockers.join('\n  - ')}`);
  }
}
