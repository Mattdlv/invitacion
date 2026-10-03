import type { CSSProperties } from 'react';
import { couple, schedule, venue } from '../../data/content';
import { useParallax } from '../../hooks/useParallax';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import Icon from '../ui/Icon';
import SectionHead from '../ui/SectionHead';
import './Celebration.css';

export default function Celebration() {
  const ref = useReveal<HTMLElement>();
  const day = useParallax<HTMLSpanElement>(0.08);

  const facts = [
    { label: 'Fecha', value: `${couple.weekday} ${couple.displayDate}` },
    { label: 'Ceremonia', value: '19:30 h' },
    { label: 'Celebración', value: 'A continuación, hasta las 03:00 h' },
    { label: 'Lugar', value: venue.name },
    ...(venue.address ? [{ label: 'Dirección', value: venue.address }] : []),
    { label: 'Ciudad', value: venue.city },
  ];

  return (
    <section className="section section--ivory celebration" id="celebracion" ref={ref} aria-labelledby="celebracion-title">
      <div className="container">
        <SectionHead
          index="01"
          eyebrow="Ceremonia y celebración"
          id="celebracion-title"
          title={['Te esperamos', <em key="e">bajo el cielo riojano</em>]}
        />

        <div className="celebration__grid">
          {/* Composición de la fecha: el dato principal, leído como portada de revista */}
          <div className="celebration__date" aria-hidden="true" data-reveal>
            <span className="celebration__day" ref={day}>
              04
            </span>
            <span className="celebration__month">
              <em>Diciembre</em>
              <span>2026</span>
            </span>
          </div>

          <div className="celebration__info">
            <dl className="facts">
              {facts.map((f, i) => (
                <div key={f.label} className="facts__row" data-reveal style={revealDelay(0.05 * i)}>
                  <dt className="label">{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>

            <p className="body celebration__note" data-reveal>
              {venue.note}
            </p>

            <div className="celebration__actions" data-reveal>
              <a className="btn btn--solid" href={venue.mapUrl} target="_blank" rel="noreferrer">
                <Icon name="pin" className="btn__icon" />
                {venue.mapLabel}
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </div>
          </div>
        </div>

        <div className="program">
          <h3 className="program__title" data-reveal>
            <span className="label">El programa</span>
            <em>de la noche</em>
          </h3>

          <div className="program__track">
          <span className="program__line" data-reveal="rule" aria-hidden="true" />
          <ol className="program__list" style={{ '--steps': schedule.length } as CSSProperties}>
            {schedule.map((item, i) => (
              <li
                key={item.event}
                className={`program__item${item.time ? '' : ' program__item--untimed'}`}
                data-reveal
                style={{ '--delay': `${0.2 + i * 0.08}s` } as CSSProperties}
              >
                <span className="program__dot" aria-hidden="true" />
                {item.time && <span className="program__time">{item.time} h</span>}
                <span className="program__event">{item.event}</span>
                {item.detail && <span className="program__detail">{item.detail}</span>}
              </li>
            ))}
          </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
