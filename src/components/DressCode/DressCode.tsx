import type { CSSProperties } from 'react';
import { dressCode } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import SectionHead from '../ui/SectionHead';
import './DressCode.css';

export default function DressCode() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="section section--paper dress" id="dress-code" ref={ref} aria-labelledby="dress-title">
      <div className="container dress__grid">
        <div className="dress__main">
          <SectionHead
            index="02"
            eyebrow="Dress code"
            id="dress-title"
            title={[dressCode.style[0], <em key="s">{dressCode.style[1]}</em>]}
          />
          <div className="dress__text">
            {dressCode.paragraphs.map((p, i) => (
              <p key={i} className="body" data-reveal style={revealDelay(0.2 + i * 0.08)}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <aside className="dress__palette" aria-labelledby="dress-reserved">
          <h3 className="label" id="dress-reserved" data-reveal>
            {dressCode.forbiddenTitle}
          </h3>
          <ul className="swatches">
            {dressCode.forbidden.map((c, i) => (
              <li key={c.name} className="swatch" data-reveal style={revealDelay(0.1 + i * 0.07)}>
                <span className="swatch__chip" style={{ '--chip': c.color } as CSSProperties} aria-hidden="true" />
                <span className="swatch__name">{c.name}</span>
              </li>
            ))}
          </ul>
          <p className="dress__note" data-reveal>
            {dressCode.forbiddenNote}
          </p>
        </aside>
      </div>
    </section>
  );
}
