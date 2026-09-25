import { menus } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import Script from '../Script/Script';
import './Menus.css';

export default function Menus() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="menus" id="menu" ref={ref}>
      <Script as="h2" className="menus__title" text={menus.title} data-reveal />
      <p className="menus__intro" data-reveal style={revealDelay(0.1)}>
        {menus.intro}
      </p>
      <ul className="menus__grid">
        {menus.options.map((option, i) => (
          <li key={option.name} className="menus__card" data-reveal style={revealDelay(0.15 + i * 0.1)}>
            <h3 className="menus__name display">{option.name}</h3>
            <p className="menus__price">{option.price}</p>
            {option.groups.map((group, g) => (
              <div key={group.title ?? g} className="menus__group">
                {group.title && <h4 className="menus__group-title">{group.title}</h4>}
                <ul className="menus__items">
                  {group.items.map((item) => (
                    <li key={item} className="menus__item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
}
