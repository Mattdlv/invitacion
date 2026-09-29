import { couple } from '../../data/content';
import { useParallax } from '../../hooks/useParallax';
import Navigation from '../Navigation/Navigation';
import RippleDistortion from '../RippleDistortion/RippleDistortion';
import Script from '../Script/Script';
import './Hero.css';

export default function Hero() {
  const bg = useParallax<HTMLDivElement>(0.25);

  return (
    <header className="hero">
      {/* La foto sigue puesta como fondo CSS: si no hay WebGL, queda ella. */}
      <div className="hero__bg" ref={bg} aria-hidden="true">
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
          tint="#d6c69c"
          tintAmount={0.09}
          trigger="both"
          quality="low"
        />
      </div>
      <Navigation />
      <div className="hero__content">
        <p className="hero__eyebrow display">La boda de</p>
        <h1 className="hero__names">
          <Script className="hero__name hero__name--first" text={couple.first} />
          <span className="sr-only"> y </span>
          <Script className="hero__name hero__name--second" text={couple.second} />
        </h1>
        <p className="hero__date">{couple.displayDate}</p>
      </div>
    </header>
  );
}
