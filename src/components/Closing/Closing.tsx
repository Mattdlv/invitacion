import { couple } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import Script from '../Script/Script';
import './Closing.css';

export default function Closing() {
  const ref = useReveal<HTMLElement>();

  return (
    <footer className="closing" ref={ref}>
      <div className="closing__bg" aria-hidden="true" />
      <div className="closing__scrim" aria-hidden="true" />
      <h2 className="closing__heading">
        <span className="closing__title display" data-reveal>
          No vemos la hora de
        </span>
        <Script as="span" className="closing__script" text="¡Celebrar con ustedes!" data-reveal style={revealDelay(0.2)} />
      </h2>
      <p className="closing__meta closing__meta--left">{couple.shortDate}</p>
      <p className="closing__meta closing__meta--right">{couple.location}</p>
    </footer>
  );
}
