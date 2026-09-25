import { gifts } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import Script from '../Script/Script';
import './Gifts.css';

export default function Gifts() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="gifts" id="registry" ref={ref}>
      <div className="gifts__bg" aria-hidden="true" />
      <div className="gifts__content">
        <Script as="h2" className="gifts__title" text={gifts.title} data-reveal />
        {gifts.paragraphs.map((lines, i) => (
          <p key={i} className="gifts__text" data-reveal style={revealDelay(0.1 + i * 0.1)}>
            {lines.map((line) => (
              <span key={line} className="gifts__line">
                {line}{' '}
              </span>
            ))}
          </p>
        ))}
      </div>
    </section>
  );
}
