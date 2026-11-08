import { boardName, getLocation, locationValue } from '../data/locations';
import type { Route } from '../data/routes';
import type { Lang } from '../data/ui';
import { localePath } from './i18n';

/** 200 → "€200" (en) / "200 €" (lt). */
export function formatPrice(price: Route['price'], lang: Lang): string {
  return new Intl.NumberFormat(lang, {
    style: 'currency',
    currency: price.currency,
    maximumFractionDigits: 0,
  }).format(price.amount);
}

export function requestHref(lang: Lang, from?: string, to?: string, date?: string): string {
  const params = new URLSearchParams();
  if (from) params.set('from', from);
  if (to) params.set('to', to);
  if (date) params.set('date', date);
  const query = params.toString();
  return `${localePath(lang, '/request/')}${query ? `?${query}` : ''}`;
}

/**
  Link into the request flow with a vehicle preference. `vehicle` is a value from
  data/fleet.ts (`request`, or `recommendRequest` for "Recommend a vehicle").
  The request step treats it as a preference to confirm, never a reservation.
*/
export function requestVehicleHref(lang: Lang, vehicle: string): string {
  const params = new URLSearchParams({ vehicle });
  return `${localePath(lang, '/request/')}?${params.toString()}`;
}

/** Everything a route row needs, resolved from the data once. */
export function resolveRoute(route: Route, lang: Lang) {
  const from = getLocation(route.from);
  const to = getLocation(route.to);
  return {
    id: route.id,
    from: { name: boardName(from, lang), code: from.code },
    to: { name: boardName(to, lang), code: to.code },
    price: formatPrice(route.price, lang),
    href: requestHref(lang, locationValue(from, lang), locationValue(to, lang)),
  };
}
