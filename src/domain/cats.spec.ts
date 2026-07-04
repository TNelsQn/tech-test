import { describe, expect, it } from '@jest/globals';
import { formatCatNames } from './cats';

describe('formatCatNames', () => {
  it('returns an empty string when there are no cats', () => {
    expect(formatCatNames([])).toBe('');
  });

  it('formats one cat name', () => {
    expect(formatCatNames([{ name: 'Betsy' }])).toBe('Betsy');
  });

  it('formats two cat names', () => {
    expect(formatCatNames([{ name: 'Betsy' }, { name: 'Felix' }])).toBe(
      'Betsy and Felix',
    );
  });

  it('formats three cat names', () => {
    expect(
      formatCatNames([{ name: 'Betsy' }, { name: 'Felix' }, { name: 'Milo' }]),
    ).toBe('Betsy, Felix and Milo');
  });

  it('formats more than three cat names', () => {
    expect(
      formatCatNames([
        { name: 'Betsy' },
        { name: 'Felix' },
        { name: 'Milo' },
        { name: 'Luna' },
      ]),
    ).toBe('Betsy, Felix, Milo and Luna');
  });
});
