import { describe, expect, it } from '@jest/globals';
import {
  FREE_GIFT_THRESHOLD,
  POUCH_SIZE_PRICES,
  calculateOrderTotal,
  qualifiesForFreeGift,
} from './orders';

describe('calculateOrderTotal', () => {
  it('returns zero when there are no cats', () => {
    expect(calculateOrderTotal([])).toBe(0);
  });

  it('uses the expected price for each pouch size', () => {
    expect(calculateOrderTotal([{ pouchSize: 'A' }])).toBe(POUCH_SIZE_PRICES.A);
    expect(calculateOrderTotal([{ pouchSize: 'B' }])).toBe(POUCH_SIZE_PRICES.B);
    expect(calculateOrderTotal([{ pouchSize: 'C' }])).toBe(POUCH_SIZE_PRICES.C);
    expect(calculateOrderTotal([{ pouchSize: 'D' }])).toBe(POUCH_SIZE_PRICES.D);
    expect(calculateOrderTotal([{ pouchSize: 'E' }])).toBe(POUCH_SIZE_PRICES.E);
    expect(calculateOrderTotal([{ pouchSize: 'F' }])).toBe(POUCH_SIZE_PRICES.F);
  });

  it('sums pouch prices for the supplied cats', () => {
    expect(calculateOrderTotal([{ pouchSize: 'A' }, { pouchSize: 'B' }])).toBe(
      115,
    );
  });
});

describe('qualifiesForFreeGift', () => {
  it('returns false below the threshold', () => {
    expect(qualifiesForFreeGift(FREE_GIFT_THRESHOLD - 0.01)).toBe(false);
  });

  it('returns false at the threshold', () => {
    expect(qualifiesForFreeGift(FREE_GIFT_THRESHOLD)).toBe(false);
  });

  it('returns true above the threshold', () => {
    expect(qualifiesForFreeGift(FREE_GIFT_THRESHOLD + 0.01)).toBe(true);
  });
});
