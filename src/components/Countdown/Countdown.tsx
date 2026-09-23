import { Fragment, useEffect, useState } from 'react';
import { countdownTarget } from '../../data/content';
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

export default function Countdown() {
  const [units, setUnits] = useState(remaining);
  const ref = useReveal<HTMLElement>();

  useEffect(() => {
    const id = window.setInterval(() => setUnits(remaining()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="countdown" ref={ref} aria-label="Cuenta regresiva para la boda">
      <OrnateFrame>
        <div className="countdown__inner">
          <Script as="h2" className="countdown__title" text="Nuestro para siempre comienza en..." data-reveal />
          <div className="countdown__units" data-reveal style={revealDelay(0.15)}>
            {units.map((u, i) => (
              <Fragment key={u.label}>
                {i > 0 && (
                  <span className="countdown__colon" aria-hidden="true">
                    :
                  </span>
                )}
                <div className="countdown__unit">
                  <span className="countdown__value">{u.value}</span>
                  <span className="countdown__label">{u.label}</span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </OrnateFrame>
    </section>
  );
}
