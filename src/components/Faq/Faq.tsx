import { faq } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import Script from '../Script/Script';
import './Faq.css';

export default function Faq() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="faq" id="faq" ref={ref}>
      <Script as="h2" className="faq__title" text="Preguntas" data-reveal />
      <dl className="faq__grid">
        {faq.map((item, i) => (
          <div key={item.q} className="faq__item" data-reveal style={revealDelay((i % 2) * 0.12)}>
            <dt className="faq__q">{item.q}</dt>
            <dd className="faq__a">{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
