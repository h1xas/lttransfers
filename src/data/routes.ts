/*
  Popular routes: the single source for the route board.

  ⚠ DEVELOPMENT DATA. Final "from €" prices have not been supplied. Every route
  carries `status: 'dev'`, which renders a visible DEV marker. Durations are
  rough road estimates, also unverified. `amount: null` renders as "€___".

  To go live: set each `amount`, verify `durationMin`, and change `status` to
  'final'. `npm run build:release` fails while any route is still 'dev'.
*/

export interface Route {
  id: string;
  /** Location ids, see data/locations.ts */
  from: string;
  to: string;
  /** Typical road time in minutes. */
  durationMin: number;
  price: { amount: number | null; currency: 'EUR' };
  status: 'dev' | 'final';
}

export const routes: Route[] = [
  // The one working placeholder price supplied so far.
  { id: 'kaunas-rix', from: 'kaunas', to: 'rix', durationMin: 200, price: { amount: 200, currency: 'EUR' }, status: 'dev' },
  { id: 'vilnius-rix', from: 'vilnius', to: 'rix', durationMin: 240, price: { amount: null, currency: 'EUR' }, status: 'dev' },
  { id: 'siauliai-rix', from: 'siauliai', to: 'rix', durationMin: 130, price: { amount: null, currency: 'EUR' }, status: 'dev' },
  { id: 'panevezys-rix', from: 'panevezys', to: 'rix', durationMin: 150, price: { amount: null, currency: 'EUR' }, status: 'dev' },
  { id: 'vno-kaunas', from: 'vno', to: 'kaunas', durationMin: 75, price: { amount: null, currency: 'EUR' }, status: 'dev' },
  { id: 'kun-vilnius', from: 'kun', to: 'vilnius', durationMin: 75, price: { amount: null, currency: 'EUR' }, status: 'dev' },
  { id: 'vilnius-waw', from: 'vilnius', to: 'waw', durationMin: 420, price: { amount: null, currency: 'EUR' }, status: 'dev' },
  { id: 'plq-nida', from: 'plq', to: 'nida', durationMin: 135, price: { amount: null, currency: 'EUR' }, status: 'dev' },
];

export const hasDevRoutes = routes.some((r) => r.status === 'dev');

/** Release builds must not contain placeholder prices. */
export function assertRoutesReleasable(): void {
  if (import.meta.env.MODE === 'release' && hasDevRoutes) {
    const ids = routes.filter((r) => r.status === 'dev').map((r) => r.id).join(', ');
    throw new Error(`Release build blocked: routes still carry development placeholders (${ids}).`);
  }
}
