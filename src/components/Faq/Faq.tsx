import { useState } from 'react';
import { faq } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import SectionHead from '../ui/SectionHead';
import './Faq.css';

export default function Faq() {
  const ref = useReveal<HTMLElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section section--ivory faq" id="preguntas" ref={ref} aria-labelledby="preguntas-title">
      <div className="container faq__grid">
        <div className="faq__aside">
          <SectionHead index="07" eyebrow="Preguntas frecuentes" id="preguntas-title" title={['Todo lo que', <em key="f">quieras saber</em>]} />
          <p className="body faq__intro" data-reveal style={revealDelay(0.2)}>
            Si tu duda no está acá, escribinos: preferimos una pregunta de más a un invitado con dudas.
          </p>
        </div>

        <div className="faq__list">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`faq__item${isOpen ? ' is-open' : ''}`} data-reveal style={revealDelay(i * 0.05)}>
                <h3 className="faq__q">
                  <button
                    type="button"
                    className="faq__trigger"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="faq__num" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="faq__label">{item.q}</span>
                    <span className="faq__sign" aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq__panel" id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-trigger-${i}`}>
                  <div className="faq__panel-inner">
                    <p className="faq__a">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
