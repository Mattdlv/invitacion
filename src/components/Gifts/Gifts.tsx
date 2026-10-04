import { gifts } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import CopyAlias from '../ui/CopyAlias';
import SectionHead from '../ui/SectionHead';
import './Gifts.css';

export default function Gifts() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="section section--paper gifts" id="regalos" ref={ref} aria-labelledby="regalos-title">
      <div className="container gifts__grid">
        <div>
          <SectionHead
            index="06"
            eyebrow="Regalos"
            id="regalos-title"
            title={[gifts.title[0], <em key="g">{gifts.title[1]}</em>]}
          />
          <div className="gifts__text">
            {gifts.paragraphs.map((p, i) => (
              <p key={i} className="body" data-reveal style={revealDelay(0.2 + i * 0.08)}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="ledger" data-reveal style={revealDelay(0.15)}>
          <p className="label ledger__title">Transferencia bancaria</p>
          <dl className="ledger__rows">
            <div className="ledger__row">
              <dt className="label">Alias</dt>
              <dd className="ledger__value ledger__value--alias">{gifts.alias}</dd>
            </div>
            <div className="ledger__row">
              <dt className="label">Titular</dt>
              <dd className="ledger__value">{gifts.holder}</dd>
            </div>
            <div className="ledger__row">
              <dt className="label">Billetera</dt>
              <dd className="ledger__value">{gifts.wallet}</dd>
            </div>
          </dl>

          <CopyAlias alias={gifts.alias} className="ledger__copy" />
        </div>
      </div>
    </section>
  );
}
