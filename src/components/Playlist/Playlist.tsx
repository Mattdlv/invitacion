import { playlist } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import Script from '../Script/Script';
import './Playlist.css';

export default function Playlist() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="playlist" id="playlist" ref={ref}>
      <Script as="h2" className="playlist__title" text={playlist.title} data-reveal />
      {playlist.paragraphs.map((lines, i) => (
        <p key={i} className="playlist__text" data-reveal style={revealDelay(0.1 + i * 0.1)}>
          {lines.map((line) => (
            <span key={line} className="playlist__line">
              {line}{' '}
            </span>
          ))}
        </p>
      ))}
      <a
        className="pill playlist__button"
        href={playlist.url}
        target="_blank"
        rel="noreferrer"
        data-reveal
        style={revealDelay(0.3)}
      >
        <span className="playlist__note" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M9 18V5.5l11-2V16" />
            <ellipse cx="6.4" cy="18" rx="2.6" ry="2.2" />
            <ellipse cx="17.4" cy="16" rx="2.6" ry="2.2" />
          </svg>
        </span>
        {playlist.label}
        <span className="sr-only"> en Spotify (se abre en una pestaña nueva)</span>
      </a>
    </section>
  );
}
