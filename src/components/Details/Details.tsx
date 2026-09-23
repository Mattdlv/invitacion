import { details, dressCode } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import Script from '../Script/Script';
import VenueCard from './VenueCard';
import './Details.css';

export default function Details() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="details" id="details" ref={ref}>
      <div className="details__panel">
        <h2 className="details__heading" data-reveal>
          <span className="details__the display">Los</span>
          <Script as="span" className="details__script" text="Detalles" />
        </h2>

        {details.map((item, i) => (
          <div key={item.title} className="details__block" data-reveal style={revealDelay(0.05 * i)}>
            <h3 className="details__label">{item.title}</h3>
            <p className="details__body">{item.body}</p>
            {item.venue && <VenueCard {...item.venue} />}
          </div>
        ))}

        <Script as="h2" className="details__dress" text="Vestimenta" data-reveal />
        <p className="details__style display" data-reveal>
          {dressCode.style}
        </p>
        {dressCode.paragraphs.map((p, i) => (
          <p key={i} className="details__body details__body--wide" data-reveal>
            {p}
          </p>
        ))}
        <div className="forbidden" data-reveal>
          <h3 className="forbidden__title">{dressCode.forbiddenTitle}</h3>
          <ul className="forbidden__list">
            {dressCode.forbidden.map((c, i) => (
              <li key={c.name} className="forbidden__item" data-reveal="zoom" style={revealDelay(0.08 * i)}>
                <span className="forbidden__swatch" style={{ background: c.color }} aria-hidden="true" />
                <span className="forbidden__name">{c.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
