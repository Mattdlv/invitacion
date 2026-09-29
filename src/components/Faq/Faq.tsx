import { useState } from 'react';
import { faq, faqHeading } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import Script from '../Script/Script';
import './Faq.css';

export default function Faq() {
  const ref = useReveal<HTMLElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq" id="faq" ref={ref}>
      <header className="faq__head">
        <p className="faq__eyebrow display" data-reveal>
          {faqHeading.eyebrow}
        </p>
        <Script as="h2" className="faq__title" text={faqHeading.script} data-reveal />

        <div className="faq__ornament" aria-hidden="true" data-reveal style={revealDelay(0.1)}>
          <span className="faq__rule" />
          <svg viewBox="0 0 34 22" fill="none" stroke="currentColor" strokeWidth="0.9">
            <path d="M17 19c0-5 3.2-9.2 8-10.6" />
            <path d="M22.2 10.4c1.2-2.2 3.6-3.2 5.9-2.6-.5 2.3-2.5 3.9-4.9 3.8" />
            <path d="M17 19c0-4.3-2.6-8-6.6-9.5" />
            <path d="M12.6 10.8c-1.1-2-3.3-3-5.4-2.4.4 2.1 2.3 3.5 4.5 3.4" />
          </svg>
          <span className="faq__rule" />
        </div>

        <p className="faq__intro" data-reveal style={revealDelay(0.15)}>
          {faqHeading.intro}
        </p>
      </header>

      <div className="faq__grid">
        {faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              className={`faq__item${isOpen ? ' is-open' : ''}`}
              data-reveal
              style={revealDelay((i % 2) * 0.1)}
            >
              <h3 className="faq__q">
                <button
                  type="button"
                  className="faq__trigger"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="faq__label">{item.q}</span>
                  <span className="faq__sign" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3.5 6l4.5 4.5L12.5 6" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                className="faq__panel"
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
              >
                <div className="faq__panel-inner">
                  <p className="faq__a">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
