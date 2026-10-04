import { menus } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import { formatPrice } from '../../lib/menus';
import SectionHead from '../ui/SectionHead';
import './Menus.css';

export default function Menus() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="section section--ivory menus" id="menu" ref={ref} aria-labelledby="menu-title">
      <div className="container">
        <div className="menus__head">
          <SectionHead index="03" eyebrow="Menú" id="menu-title" title={['A la mesa', <em key="m">con nosotros</em>]} />
          <p className="body menus__intro" data-reveal style={revealDelay(0.2)}>
            {menus.intro}
          </p>
        </div>

        <div className="menus__cards">
          {menus.options.map((option, i) => (
            <article key={option.name} className="menu-card" data-reveal style={revealDelay(0.1 + i * 0.1)}>
              <header className="menu-card__head">
                <h3 className="menu-card__name">
                  Menú <em>{option.name.toLowerCase()}</em>
                </h3>
                <p className="menu-card__price">{formatPrice(option.price)}</p>
              </header>
              {option.groups.map((group, g) => (
                <div key={group.title ?? g} className="menu-card__group">
                  {group.title && <h4 className="label menu-card__group-title">{group.title}</h4>}
                  <ul className="menu-card__items">
                    {group.items.map((item, k) => (
                      <li key={item} data-reveal style={revealDelay(0.2 + Math.min(k, 10) * 0.04)}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
