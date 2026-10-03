import { useEffect, useRef, type CSSProperties } from 'react';

/**
 * Marca con `data-visible` cada `[data-reveal]` dentro del ref cuando entra en pantalla.
 * Es un atributo y no una clase a propósito: React reescribe `className` en cada render
 * (por ejemplo al abrir una pregunta) y borraría la marca, dejando el elemento invisible.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', '');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

/** Inline style for a staggered reveal delay, in seconds. */
export const revealDelay = (seconds: number) => ({ '--delay': `${seconds}s` }) as CSSProperties;
