import { Fragment, useEffect, useState } from 'react';
import { countdownTarget, couple } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import OrnateFrame from '../OrnateFrame/OrnateFrame';
import Script from '../Script/Script';
import './Countdown.css';

const target = new Date(countdownTarget).getTime();

function remaining() {
  const diff = Math.max(0, target - Date.now());
  const s = Math.floor(diff / 1000);
  return [
    { label: 'Días', value: String(Math.floor(s / 86400)).padStart(2, '0') },
    { label: 'Horas', value: String(Math.floor((s % 86400) / 3600)).padStart(2, '0') },
    { label: 'Minutos', value: String(Math.floor((s % 3600) / 60)).padStart(2, '0') },
    { label: 'Segundos', value: String(s % 60).padStart(2, '0') },
  ];
}

/**
 * Un dígito que rueda al cambiar: el saliente sube y sale, el entrante llega desde abajo.
 * El saliente se desmonta solo al terminar su animación.
 */
function Digit({ char }: { char: string }) {
  const [shown, setShown] = useState(char);
  const [leaving, setLeaving] = useState<string | null>(null);

  useEffect(() => {
    setShown((prev) => {
      if (prev === char) return prev;
      setLeaving(prev);
      return char;
    });
  }, [char]);

  return (
    <span className="countdown__digit">
      {leaving !== null && (
        <span
          key={`out-${leaving}`}
          className="countdown__roll countdown__roll--out"
          onAnimationEnd={() => setLeaving(null)}
          aria-hidden="true"
        >
          {leaving}
        </span>
      )}
      <span key={`in-${shown}`} className="countdown__roll countdown__roll--in">
        {shown}
      </span>
    </span>
  );
}

export default function Countdown() {
  const [units, setUnits] = useState(remaining);
  const ref = useReveal<HTMLElement>();

  useEffect(() => {
    const id = window.setInterval(() => setUnits(remaining()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="countdown" ref={ref}>
      <OrnateFrame>
        <div className="countdown__inner">
          <Script
            as="h2"
            className="countdown__title"
            text="Nuestro para siempre comienza en..."
            data-reveal
          />

          <div className="countdown__divider" aria-hidden="true" data-reveal style={revealDelay(0.1)}>
            <span className="countdown__rule" />
            <svg viewBox="0 0 34 20" fill="none" stroke="currentColor" strokeWidth="0.9">
              <path d="M4 16c8 1 15-3 26-13" />
              <path d="M13 12.6c-.6-3 .8-5.4 3.6-6.3.6 2.9-.8 5.3-3.6 6.3z" />
              <path d="M13 12.6c-2.8.6-5.2-.7-6-3.3 2.8-.9 5.3.5 6 3.3z" />
              <path d="M21.6 7.2c-.5-2.8.8-5 3.4-5.8.5 2.7-.8 4.9-3.4 5.8z" />
              <path d="M21.6 7.2c-2.6.5-4.8-.7-5.5-3.1 2.6-.8 4.9.5 5.5 3.1z" />
            </svg>
            <span className="countdown__rule" />
          </div>

          {/* Los números cambian cada segundo: se ocultan al lector de pantalla y
              debajo va una frase estática equivalente. */}
          <div className="countdown__units" aria-hidden="true" data-reveal style={revealDelay(0.18)}>
            {units.map((u, i) => (
              <Fragment key={u.label}>
                {i > 0 && (
                  <span className="countdown__star">
                    <span className="countdown__star-line" />
                    <svg viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0c.5 4.2 3.3 7 7.5 7.5C11.3 8 8.5 10.8 8 15c-.5-4.2-3.3-7-7.5-7.5C4.7 7 7.5 4.2 8 0z" />
                    </svg>
                    <span className="countdown__star-line" />
                  </span>
                )}
                <div className="countdown__unit">
                  <span className="countdown__value">
                    {u.value.split('').map((c, k) => (
                      <Digit key={k} char={c} />
                    ))}
                  </span>
                  <span className="countdown__label">{u.label}</span>
                </div>
              </Fragment>
            ))}
          </div>

          <p className="sr-only">
            Faltan {units[0].value} días para la boda, el {couple.displayDate} a las 19:30.
          </p>
        </div>
      </OrnateFrame>
    </section>
  );
}
