import { playlist } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import Icon from '../ui/Icon';
import MaskText from '../ui/MaskText';
import './Playlist.css';

export default function Playlist() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="section section--ivory playlist" id="playlist" ref={ref} aria-labelledby="playlist-title">
      <div className="container playlist__inner">
        <div className="playlist__intro">
          <p className="eyebrow" data-reveal="fade">
            <span className="eyebrow__index">05</span>
            <span className="eyebrow__rule" aria-hidden="true" />
            La playlist
          </p>
          <MaskText
            id="playlist-title"
            className="playlist__title"
            lines={[playlist.title[0], <em key="p">{playlist.title[1]}</em>]}
            delay={0.1}
          />
          <p className="body playlist__text" data-reveal style={revealDelay(0.15)}>
            {playlist.text}
          </p>
          <div data-reveal style={revealDelay(0.25)}>
            <a className="btn btn--solid" href={playlist.url} target="_blank" rel="noreferrer">
              <Icon name="music" className="btn__icon" />
              {playlist.label}
              <span className="sr-only"> en Spotify (se abre en una pestaña nueva)</span>
            </a>
          </div>
        </div>

        {/* Reproductor de Spotify: muestra la lista en vivo, con los temas que se van sumando.
            El fondo del marco cubre el hueco mientras carga, para que no salte el diseño. */}
        <div className="playlist__player" data-reveal style={revealDelay(0.2)}>
          <iframe
            title="Playlist de la boda en Spotify"
            src={playlist.embedUrl}
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>
      </div>
    </section>
  );
}
