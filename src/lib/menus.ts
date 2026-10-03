import { menus } from '../data/content';

const money = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 });

/** $ 65.000 */
export const formatPrice = (value: number) => money.format(value);

const priceOf = (key: 'adult' | 'child') => menus.options.find((o) => o.key === key)?.price ?? 0;

export const adultPrice = priceOf('adult');
export const childPrice = priceOf('child');

/** Detalle de menús y total a pagar para una cantidad de adultos y niños. */
export function menuTotal(adults: number, children: number) {
  const lines = [
    { key: 'adult', label: 'Menú adulto', count: adults, unit: adultPrice, subtotal: adults * adultPrice },
    { key: 'child', label: 'Menú niños', count: children, unit: childPrice, subtotal: children * childPrice },
  ].filter((line) => line.count > 0);
  return { lines, total: lines.reduce((sum, line) => sum + line.subtotal, 0) };
}
