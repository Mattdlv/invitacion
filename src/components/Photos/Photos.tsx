import { instagram } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import Icon from '../ui/Icon';
import SectionHead from '../ui/SectionHead';
import './Photos.css';

export default function Photos() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="section section--night photos" id="fotos" ref={ref} aria-labelledby="fotos-title">
      <div className="container photos__grid">
        <div>
          <SectionHead
            index="04"
            eyebrow="Fotos"
            id="fotos-title"
            title={[instagram.title[0], <em key="f">{instagram.title[1]}</em>]}
          />
          <p className="lede photos__text" data-reveal style={revealDelay(0.2)}>
            {instagram.text}
          </p>
          <ol className="photos__steps">
            {instagram.steps.map((step, i) => (
              <li key={step} data-reveal style={revealDelay(0.28 + i * 0.07)}>
                <span className="photos__step-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Toda la tarjeta es el enlace: un objetivo grande y fácil de tocar */}
        <div data-reveal style={revealDelay(0.15)}>
          <a className="profile" href={instagram.url} target="_blank" rel="noreferrer">
            <span className="profile__icon">
              <Icon name="instagram" />
            </span>
            <span className="profile__handle">
              <span className="profile__at">@</span>
              {instagram.handle}
            </span>
            <span className="profile__cta">
              {instagram.label}
              <Icon name="arrowUpRight" className="profile__arrow" />
            </span>
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
