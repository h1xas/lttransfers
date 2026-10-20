/*
  The five vehicles, in display order. Names are proper nouns and are not translated;
  descriptors and character lines live in data/ui.ts (`cars.vehicles`, keyed by `id`).

  `brand` / `model` are split only so the name can break between them. The full
  name is always "{brand} {model}". `request` is the value the request flow
  receives as `?vehicle=` (a preference, never a reservation).
*/
export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  request: string;
}

export const fleet: Vehicle[] = [
  { id: 'rav4', brand: 'Toyota', model: 'RAV4', request: 'toyota-rav4' },
  { id: 'c-class', brand: 'Mercedes-Benz', model: 'C-Class', request: 'mercedes-benz-c-class' },
  { id: 'e-class', brand: 'Mercedes-Benz', model: 'E-Class', request: 'mercedes-benz-e-class' },
  { id: 'a8', brand: 'Audi', model: 'A8', request: 'audi-a8' },
  { id: 'v-class', brand: 'Mercedes-Benz', model: 'V-Class', request: 'mercedes-benz-v-class' },
];

/** The request flow's "no specific vehicle" value ("Recommend a vehicle"). */
export const recommendRequest = 'recommend';
