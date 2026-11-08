/*
  Popular routes: the single source for the route board.

  Each route stores stable ids only (location ids from data/locations.ts) and an indicative starting price.
  Display names are localised from the location data, never from route logic, so "Riga" / "Ryga" and
  "Warsaw" / "Varšuva" are the same route. Prices are "from" prices: the exact price is always agreed
  individually. No travel durations are stored because none have been confirmed.
*/

export interface Route {
  id: string;
  /** Location ids, see data/locations.ts */
  from: string;
  to: string;
  /** Indicative starting price. */
  price: { amount: number; currency: 'EUR' };
}

const eur = (amount: number): Route['price'] => ({ amount, currency: 'EUR' });

export const routes: Route[] = [
  { id: 'kaunas-vilnius', from: 'kaunas', to: 'vilnius', price: eur(100) },
  { id: 'vilnius-klaipeda', from: 'vilnius', to: 'klaipeda', price: eur(250) },
  { id: 'kaunas-riga', from: 'kaunas', to: 'riga', price: eur(250) },
  { id: 'vilnius-riga', from: 'vilnius', to: 'riga', price: eur(300) },
  { id: 'kaunas-nida', from: 'kaunas', to: 'nida', price: eur(200) },
  { id: 'kaunas-warsaw', from: 'kaunas', to: 'warsaw', price: eur(200) },
  { id: 'vilnius-warsaw', from: 'vilnius', to: 'warsaw', price: eur(270) },
];
