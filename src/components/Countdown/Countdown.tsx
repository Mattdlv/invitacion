import { useEffect, useState } from 'react';
import { ceremonyStart, couple } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import { googleCalendarUrl } from '../../lib/calendar';
import Icon from '../ui/Icon';
import MaskText from '../ui/MaskText';
import './Countdown.css';

const target = new Date(ceremonyStart).getTime();

function remaining() {
  const diff = Math.max(0, target - Date.now());
  const s = Math.floor(diff / 1000);
  return {
    done: diff === 0,
    units: [
      { label: 'Días', value: String(Math.floor(s / 86400)).padStart(2, '0') },
      { label: 'Horas', value: String(Math.floor((s % 86400) / 3600)).padStart(2, '0') },
      { label: 'Minutos', value: String(Math.floor((s % 3600) / 60)).padStart(2, '0') },
      { label: 'Segundos', value: String(s % 60).padStart(2, '0') },
    ],
  };
}

/** Un dígito que rueda al cambiar: el saliente sube y sale, el entrante llega desde abajo. */
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
  const [state, setState] = useState(remaining);
  const ref = useReveal<HTMLElement>();

  useEffect(() => {
    // Se alinea al cambio de segundo del reloj para que todos los dígitos giren juntos.
    let id = 0;
    const tick = () => {
      setState(remaining());
      id = window.setTimeout(tick, 1000 - (Date.now() % 1000));
    };
    id = window.setTimeout(tick, 1000 - (Date.now() % 1000));
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section className="section section--night countdown" id="cuenta-regresiva" ref={ref} aria-labelledby="countdown-title">
      <div className="container countdown__inner">
        <p className="eyebrow countdown__eyebrow" data-reveal="fade">
          <span className="eyebrow__rule" aria-hidden="true" />
          Cuenta regresiva
          <span className="eyebrow__rule" aria-hidden="true" />
        </p>

        <MaskText
          id="countdown-title"
          className="countdown__title"
          lines={state.done ? [<em key="h">¡Hoy es el día!</em>] : ['Cada día falta', <em key="p">un poco menos</em>]}
          delay={0.05}
        />

        {!state.done && (
          <div className="countdown__units" aria-hidden="true">
            {state.units.map((u, i) => (
              <div key={u.label} className="countdown__unit" data-reveal style={revealDelay(0.15 + i * 0.06)}>
                <span className="countdown__value">
                  {u.value.split('').map((c, k) => (
                    <Digit key={k} char={c} />
                  ))}
                </span>
                <span className="countdown__label">{u.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Los números cambian cada segundo: el lector de pantalla recibe esta frase estable. */}
        <p className="sr-only">
          {state.done
            ? 'La boda es hoy.'
            : `Faltan ${Number(state.units[0].value)} días y ${Number(state.units[1].value)} horas para la boda.`}
        </p>

        <div className="countdown__foot" data-reveal style={revealDelay(0.4)}>
          <p className="countdown__date">
            {couple.weekday} {couple.displayDate} <span aria-hidden="true">·</span> 19:30 h
          </p>
          <a className="btn btn--ghost-light" href={googleCalendarUrl()} target="_blank" rel="noreferrer">
            <Icon name="calendar" className="btn__icon" />
            Agendar la fecha
            <span className="sr-only"> en Google Calendar (se abre en una pestaña nueva)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
