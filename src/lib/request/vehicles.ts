import { fleet, recommendRequest } from '../../data/fleet';

/** The email is read by the business, so it always names the vehicle in English. */
export const RECOMMEND_LABEL = 'Recommend a vehicle';

const names = new Map(fleet.map((v) => [v.request, `${v.brand} ${v.model}`]));

/** A known fleet slug stays; anything else ("", unknown, tampered) means "Recommend a vehicle". */
export function normalizeVehicle(raw: unknown): string {
  const value = typeof raw === 'string' ? raw.trim() : '';
  return names.has(value) ? value : recommendRequest;
}

export function vehicleName(slug: string): string {
  return names.get(slug) ?? RECOMMEND_LABEL;
}
