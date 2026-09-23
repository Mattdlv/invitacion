import { timeline } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import Script from '../Script/Script';
import './Timeline.css';

export default function Timeline() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="timeline" id="timeline" ref={ref}>
      <h2 className="timeline__heading" data-reveal>
        <Script as="span" className="timeline__script" text="La Boda" />
        <span className="timeline__title display">Itinerario</span>
      </h2>
      <ol className="timeline__list">
        {timeline.map((row, i) => (
          <li key={row.event} className="timeline__row" data-reveal style={revealDelay(0.08 * i)}>
            {row.time ? <time>{row.time}</time> : <span />}
            <span>{row.event}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
