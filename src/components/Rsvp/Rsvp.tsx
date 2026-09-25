import { rsvp } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import Script from '../Script/Script';
import './Rsvp.css';

/** El plazo se evalua al cargar la pagina: no hace falta tocar nada cuando vence. */
const closed = Date.now() > new Date(rsvp.deadlineDate).getTime();

export default function Rsvp({ onOpen }: { onOpen: () => void }) {
  const ref = useReveal<HTMLElement>();

  return (
    <section className={`rsvp${closed ? ' rsvp--closed' : ''}`} id="rsvp" ref={ref}>
      <div className="rsvp__left" data-reveal>
        <h2 className="rsvp__heading">
          <Script as="span" className="rsvp__script" text="Confirmá" />
          <span className="rsvp__title display">Asistencia</span>
        </h2>
        <p className="rsvp__deadline">{closed ? rsvp.closedDeadline : rsvp.deadline}</p>
      </div>

      <div className="rsvp__right" data-reveal style={revealDelay(0.15)}>
        <img className="rsvp__divider" src="/svg/rsvp-divider.svg" alt="" />
        {(closed ? rsvp.closedLines : rsvp.lines).map(([a, b]) => (
          <p key={a} className="rsvp__text">
            {a}
            <br />
            {b}
          </p>
        ))}
        {closed ? (
          <p className="rsvp__button rsvp__button--closed">
            <span className="rsvp__lock" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="4.5" y="10.5" width="15" height="10" rx="1.5" />
                <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
              </svg>
            </span>
            {rsvp.closedLabel}
          </p>
        ) : (
          <button type="button" className="pill rsvp__button" onClick={onOpen}>
            Confirmar aquí
          </button>
        )}
      </div>
    </section>
  );
}
