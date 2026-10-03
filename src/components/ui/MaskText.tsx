import type { CSSProperties, ElementType, ReactNode } from 'react';

interface Props {
  /** Cada elemento es una línea que sube desde detrás de su propia máscara. */
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  /** Retardo inicial en segundos, antes del escalonado entre líneas. */
  delay?: number;
  id?: string;
}

/** Título que se revela línea por línea al entrar en pantalla (necesita un useReveal arriba). */
export default function MaskText({ lines, as: Tag = 'h2', className = '', delay = 0, id }: Props) {
  return (
    <Tag className={className} data-reveal="mask" style={{ '--delay': `${delay}s` } as CSSProperties} id={id}>
      {lines.map((line, i) => (
        <span key={i} className="mask-line">
          <span className="mask-line__inner" style={{ '--line': i } as CSSProperties}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
