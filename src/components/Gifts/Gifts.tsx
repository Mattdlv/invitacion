import { useState } from 'react';
import { gifts } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import Script from '../Script/Script';
import Sprig from './Sprig';
import './Gifts.css';

const { transfer } = gifts;

export default function Gifts() {
  const ref = useReveal<HTMLElement>();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const text = transfer.rows.map((r) => `${r.label}: ${r.value}`).join('\n');
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    } catch {
      /* portapapeles bloqueado: los datos igual están a la vista en la tarjeta */
    }
  };

  return (
    <section className="gifts" id="registry" ref={ref}>
      <div className="gifts__bg" aria-hidden="true" />
      <Sprig className="gifts__sprig gifts__sprig--left" />
      <Sprig className="gifts__sprig gifts__sprig--right" />

      <div className="gifts__content">
        <p className="gifts__eyebrow display" data-reveal>
          <span className="gifts__tick" aria-hidden="true" />
          {gifts.eyebrow}
          <span className="gifts__tick" aria-hidden="true" />
        </p>
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

        <div className="gifts__cards">
          <article className="gifts__card" data-reveal style={revealDelay(0.3)}>
            <span className="gifts__icon" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1">
                <rect x="4" y="12.5" width="24" height="15" rx="1" />
                <path d="M2.5 8.5h27v4h-27z" />
                <path d="M16 8.5v19" />
                <path d="M16 8.5c-1.6-3.4-3.6-5-6-4.6-1.9.3-2.7 2.2-1.6 3.6.9 1.1 3.5 1.4 7.6 1z" />
                <path d="M16 8.5c1.6-3.4 3.6-5 6-4.6 1.9.3 2.7 2.2 1.6 3.6-.9 1.1-3.5 1.4-7.6 1z" />
              </svg>
            </span>

            <h3 className="gifts__card-name">{transfer.name}</h3>
            <p className="gifts__card-sub">{transfer.subtitle}</p>

            <hr className="gifts__card-rule" />

            <dl className="gifts__rows">
              {transfer.rows.map((row) => (
                <div key={row.label} className="gifts__row">
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>

            <button type="button" className="gifts__copy" onClick={copy}>
              {copied ? transfer.copiedLabel : transfer.copyLabel}
              <span className="gifts__copy-icon" aria-hidden="true">
                {copied ? (
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8.6l3.2 3.2L13 5" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <rect x="5.4" y="5.4" width="8.1" height="8.1" rx="1.2" />
                    <path d="M10.6 5.4V3.7a1.2 1.2 0 0 0-1.2-1.2H3.7a1.2 1.2 0 0 0-1.2 1.2v5.7a1.2 1.2 0 0 0 1.2 1.2h1.7" />
                  </svg>
                )}
              </span>
            </button>

            <p className="gifts__status" role="status">
              {copied ? transfer.copiedLabel : ''}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
