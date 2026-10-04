import { card } from '../../data/content';
import { formatPrice, menuTotal } from '../../lib/menus';
import CopyAlias from '../ui/CopyAlias';

interface Props {
  adults: number;
  children: number;
  /** En el formulario el total cambia en vivo y se anuncia; en la confirmación es fijo. */
  live?: boolean;
}

/** Detalle de menús con el total a transferir y el alias para copiar. */
export default function MenuTotal({ adults, children, live = false }: Props) {
  const { lines, total } = menuTotal(adults, children);

  return (
    <div className="menu-total">
      <p className="label menu-total__title">Tu menú</p>
      <ul className="menu-total__lines">
        {lines.map((line) => (
          <li key={line.key}>
            <span className="menu-total__count">{line.count} ×</span>
            <span className="menu-total__name">
              {line.label}
              <span className="menu-total__unit">{formatPrice(line.unit)} c/u</span>
            </span>
            <span className="menu-total__amount">{formatPrice(line.subtotal)}</span>
          </li>
        ))}
      </ul>
      <p className="menu-total__sum" aria-live={live ? 'polite' : undefined}>
        <span className="label">Total</span>
        <span className="menu-total__total">{formatPrice(total)}</span>
      </p>

      <div className="menu-total__pay">
        <p className="menu-total__alias">
          <span className="label">Alias para transferir</span>
          <span className="menu-total__alias-value">{card.alias}</span>
          <span className="menu-total__holder">
            a nombre de {card.holder} · {card.wallet}
          </span>
        </p>
        <CopyAlias alias={card.alias} />
      </div>
    </div>
  );
}
