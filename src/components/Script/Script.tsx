import type { ElementType, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  text: string;
  as?: ElementType;
  'data-reveal'?: boolean | string;
}

/**
 * Calligraphic lettering: flourished capitals (Monsieur La Doulaise) paired with
 * copperplate lowercase (Pinyon Script) to match the reference's Bickham-style script.
 */
export default function Script({ text, as: Tag = 'span', className = '', ...rest }: Props) {
  return (
    <Tag className={`script ${className}`.trim()} {...rest}>
      {text.split(/(\s+)/).map((word, i) => {
        const match = /^([¡¿]?)(\p{Lu})(.*)$/u.exec(word);
        if (!match) return word;
        return (
          <span key={i} className="script__word">
            {match[1]}
            <span className="script__cap">{match[2]}</span>
            {match[3]}
          </span>
        );
      })}
    </Tag>
  );
}
