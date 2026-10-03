import { useEffect, useRef } from 'react';

/**
 * Salida de la portada al hacer scroll: el contenido sube un poco y se desvanece mientras la
 * foto queda atrás, como el final de un plano. Ligado al scroll (no es una animación con
 * duración), así que acompaña la mano del invitado en vez de dispararse sola.
 */
export function useHeroExit<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const height = el.parentElement!.offsetHeight || window.innerHeight;
      const p = Math.min(1, Math.max(0, window.scrollY / (height * 0.75)));
      if (p >= 1 && el.style.opacity === '0') return;
      el.style.transform = p ? `translate3d(0, ${(-p * 72).toFixed(1)}px, 0)` : '';
      el.style.opacity = p ? String(Math.max(0, 1 - p * 1.15).toFixed(3)) : '';
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return ref;
}
