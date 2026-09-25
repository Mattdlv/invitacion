import { useRef, useState } from 'react';
import { couple } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import Script from '../Script/Script';
import './Closing.css';

/** Duración del fundido entre el final del clip y su reinicio, en segundos. */
const FADE = 1.1;

export default function Closing() {
  const ref = useReveal<HTMLElement>();
  const layers = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const swapping = useRef(false);

  const syncPlaying = () => setPlaying(layers.some((l) => l.current && !l.current.paused));

  /**
   * En vez de `loop`, el relevo lo hacemos a mano: cuando al clip en pantalla le queda
   * un FADE para terminar, arranca el otro desde cero y se cruzan las opacidades.
   */
  const relay = (i: number) => () => {
    const current = layers[i].current;
    if (!current || i !== active || swapping.current || !current.duration) return;
    if (current.duration - current.currentTime > FADE) return;

    swapping.current = true;
    const next = layers[1 - i].current;
    if (next) {
      next.currentTime = 0;
      void next.play();
    }
    setActive(1 - i);

    window.setTimeout(() => {
      current.pause();
      current.currentTime = 0;
      swapping.current = false;
    }, FADE * 1000);
  };

  const toggle = () => {
    const current = layers[active].current;
    if (!current) return;
    if (current.paused) {
      void current.play();
    } else {
      layers.forEach((l) => l.current?.pause());
    }
  };

  return (
    <footer className="closing" ref={ref}>
      <div className="closing__bg" aria-hidden="true" />
      {/* La toma es horizontal pero viene girada 90 dentro de un 9:16: el CSS la endereza.
          Dos capas del mismo clip se turnan para que el reinicio sea un fundido y no un corte.
          Siempre mudas: son decorativas. */}
      {layers.map((layerRef, i) => (
        <video
          key={i}
          ref={layerRef}
          className={`closing__video${i === active ? ' is-active' : ''}`}
          src="/videos/closing.mp4#t=0.1"
          autoPlay={i === 0}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          onTimeUpdate={relay(i)}
          onPlay={syncPlaying}
          onPause={syncPlaying}
        />
      ))}
      <div className="closing__scrim" aria-hidden="true" />

      {/* WCAG 2.2.2: el fondo se mueve solo y dura mas de 5 s, asi que debe poder frenarse. */}
      <button type="button" className="closing__toggle" onClick={toggle}>
        <span className="sr-only">
          {playing ? 'Pausar el video de fondo' : 'Reproducir el video de fondo'}
        </span>
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          {playing ? (
            <>
              <rect x="8" y="6" width="3" height="12" rx="0.5" />
              <rect x="13" y="6" width="3" height="12" rx="0.5" />
            </>
          ) : (
            <path d="M9 5.8v12.4L19 12z" />
          )}
        </svg>
      </button>

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
