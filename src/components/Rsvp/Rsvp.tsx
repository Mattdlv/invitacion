import { rsvp } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import Script from '../Script/Script';
import './Rsvp.css';

export default function Rsvp({ onOpen }: { onOpen: () => void }) {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="rsvp" id="rsvp" ref={ref}>
      <div className="rsvp__left" data-reveal>
        <h2 className="rsvp__heading">
          <Script as="span" className="rsvp__script" text="Confirmá" />
          <span className="rsvp__title display">Asistencia</span>
        </h2>
        <p className="rsvp__deadline">{rsvp.deadline}</p>
      </div>

      <div className="rsvp__right" data-reveal style={revealDelay(0.15)}>
        <img className="rsvp__divider" src="/svg/rsvp-divider.svg" alt="" />
        {rsvp.lines.map(([a, b]) => (
          <p key={a} className="rsvp__text">
            {a}
            <br />
            {b}
          </p>
        ))}
        <button type="button" className="pill rsvp__button" onClick={onOpen}>
          Confirmar aquí
        </button>
      </div>
    </section>
  );
}
