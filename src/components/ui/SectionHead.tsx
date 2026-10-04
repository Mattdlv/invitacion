import type { CSSProperties, ReactNode } from 'react';
import MaskText from './MaskText';

interface Props {
  index: string;
  eyebrow: string;
  title: ReactNode[];
  id?: string;
  className?: string;
  children?: ReactNode;
}

/** Encabezado editorial de sección: número de capítulo, volanta y título con máscara. */
export default function SectionHead({ index, eyebrow, title, id, className = '', children }: Props) {
  return (
    <header className={`section-head ${className}`.trim()}>
      <p className="eyebrow" data-reveal="fade">
        <span className="eyebrow__index">{index}</span>
        <span className="eyebrow__rule" data-reveal="rule" style={{ '--delay': '0.15s' } as CSSProperties} aria-hidden="true" />
        {eyebrow}
      </p>
      <MaskText lines={title} className="title section-head__title" delay={0.1} id={id} />
      {children}
    </header>
  );
}
