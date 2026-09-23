import { couple } from '../../data/content';
import { useParallax } from '../../hooks/useParallax';
import Navigation from '../Navigation/Navigation';
import Script from '../Script/Script';
import './Hero.css';

export default function Hero() {
  const bg = useParallax<HTMLDivElement>(0.25);

  return (
    <header className="hero">
      <div className="hero__bg" ref={bg} aria-hidden="true" />
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
