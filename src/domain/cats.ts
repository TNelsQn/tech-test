import { Cat } from '../customer-data.schema';

export function formatCatNames(cats: Pick<Cat, 'name'>[]): string {
  const catNames = cats.map((cat) => cat.name);

  if (catNames.length <= 2) {
    return catNames.join(' and ');
  }

  return `${catNames.slice(0, -1).join(', ')} and ${catNames.at(-1)}`;
}
