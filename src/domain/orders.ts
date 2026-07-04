import { Cat, PouchSize } from '../customer-data.schema';

export const POUCH_SIZE_PRICES: Record<PouchSize, number> = {
  A: 55.5,
  B: 59.5,
  C: 62.75,
  D: 66,
  E: 69,
  F: 71.25,
};

export const FREE_GIFT_THRESHOLD = 120;

export function calculateOrderTotal(cats: Pick<Cat, 'pouchSize'>[]): number {
  return cats.reduce(
    (totalPrice, cat) => totalPrice + POUCH_SIZE_PRICES[cat.pouchSize],
    0,
  );
}

export function qualifiesForFreeGift(totalPrice: number): boolean {
  return totalPrice > FREE_GIFT_THRESHOLD;
}
