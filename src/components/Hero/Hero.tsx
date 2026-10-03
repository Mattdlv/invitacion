import { couple } from '../../data/content';
import { useHeroExit } from '../../hooks/useHeroExit';
import { useParallax } from '../../hooks/useParallax';
import Icon from '../ui/Icon';
import RippleDistortion from '../RippleDistortion/RippleDistortion';
import './Hero.css';

export default function Hero() {
  const bg = useParallax<HTMLDivElement>(0.18);
  const inner = useHeroExit<HTMLDivElement>();

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      {/* La foto también va como fondo CSS: si no hay WebGL, queda ella sola. */}
      <div className="hero__bg" ref={bg} aria-hidden="true">
        <div className="hero__photo">
        <RippleDistortion
          src="/images/hero-couple.webp"
          className="hero__ripple"
          grayscale={false}
          strength={0.12}
          swirl={0.8}
          rings={3}
          brushSize={190}
          spacing={18}
          spread={4}
          fade={2.4}
          glint={0.12}
          tint="#d9b48c"
          tintAmount={0.09}
          trigger="both"
          quality="low"
        />
        </div>
      </div>
      <div className="hero__veil" aria-hidden="true" />

      <div className="hero__inner" ref={inner}>
        <div className="hero__content">
          <p className="hero__eyebrow">Nos casamos</p>

          <h1 className="hero__names" id="hero-title">
            <span className="mask-line">
              <span className="hero__line">{couple.first}</span>
            </span>
            <span className="mask-line hero__amp-line">
              <span className="hero__line hero__amp">
                <span aria-hidden="true">&amp;</span>
                <span className="sr-only">y</span>
              </span>
            </span>
            <span className="mask-line">
              <span className="hero__line">{couple.second}</span>
            </span>
          </h1>

          <p className="hero__tagline">{couple.tagline}</p>
        </div>

        <div className="hero__foot">
          <p className="hero__meta">
            <span>{couple.weekday}</span>
            <time dateTime="2026-12-04">{couple.shortDate}</time>
          </p>
          <a className="hero__cta" href="#cuenta-regresiva">
            <span>Descubrir la invitación</span>
            <span className="hero__cta-icon">
              <Icon name="arrowDown" />
            </span>
          </a>
          <p className="hero__meta hero__meta--end">
            <span>Ceremonia 19:30 h</span>
            <span>{couple.location}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
