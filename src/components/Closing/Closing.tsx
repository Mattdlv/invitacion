import { closing, couple } from '../../data/content';
import { useParallax } from '../../hooks/useParallax';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import Icon from '../ui/Icon';
import MaskText from '../ui/MaskText';
import './Closing.css';

export default function Closing() {
  const ref = useReveal<HTMLElement>();
  const bg = useParallax<HTMLDivElement>(0.2);

  return (
    <footer className="closing" ref={ref}>
      <div className="closing__photo">
        <div className="closing__bg" ref={bg} role="img" aria-label="Las manos de los novios con el anillo de compromiso, al atardecer" />
        <div className="closing__scrim" aria-hidden="true" />

        <div className="closing__content">
          <MaskText as="p" className="closing__lines" lines={[closing.lines[0], <em key="c">{closing.lines[1]}</em>]} />
          <p className="closing__signature" data-reveal style={revealDelay(0.4)}>
            <span>{closing.signature}</span>
            <span className="closing__names">
              {couple.first} <em>&amp;</em> {couple.second}
            </span>
          </p>
        </div>
      </div>

      <div className="closing__bar">
        <p>{couple.shortDate}</p>
        <a className="closing__top" href="#inicio">
          Volver al inicio
          <Icon name="arrowUp" />
        </a>
        <p>{couple.location}</p>
      </div>
    </footer>
  );
}
