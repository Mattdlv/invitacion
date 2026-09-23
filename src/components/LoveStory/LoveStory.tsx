import { loveStory } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import Script from '../Script/Script';
import './LoveStory.css';

export default function LoveStory() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="love" id="story" ref={ref}>
      <h2 className="love__heading" data-reveal>
        <span className="love__our">Nuestra</span>
        <Script as="span" className="love__script" text="Historia de Amor" />
      </h2>

      <div className="love__body">
        <figure className="love__keepsake" data-reveal style={revealDelay(0.1)}>
          <div className="love__note">
            <Script as="p" className="love__note-name" text={loveStory.noteName} />
            <p className="love__note-date">{loveStory.noteDate}</p>
          </div>
          <img className="love__clip" src="/svg/paperclip.svg" alt="" />
          <img
            className="love__frame"
            src="/images/love-story-frame.webp"
            alt="La pareja caminando de la mano por un campo, en un marco dorado ornamentado"
            loading="lazy"
          />
        </figure>

        <div className="love__text">
          {loveStory.paragraphs.map((p, i) => (
            <p key={i} data-reveal style={revealDelay(0.08 * i)}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
