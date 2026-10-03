import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

let lenis: Lenis | null = null;

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - 2 ** (-10 * t));

/**
 * Scroll suave con inercia para la rueda del mouse y el trackpad. En pantallas táctiles queda
 * el scroll nativo del sistema (ya es suave y reemplazarlo se siente ajeno). Con "reducir
 * movimiento" no se activa: el scroll sigue al dispositivo 1:1.
 */
export function initSmoothScroll() {
  if (lenis || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  lenis = new Lenis({
    lerp: 0.09,
    wheelMultiplier: 0.9,
    autoRaf: true,
    // El menú móvil y el reproductor de Spotify scrollean por su cuenta
    prevent: (node) => node.closest?.('[data-lenis-prevent], iframe') != null,
  });

  // Los enlaces internos (#seccion) viajan con la misma curva en vez de saltar.
  const onClick = (e: MouseEvent) => {
    const link = (e.target as HTMLElement).closest?.('a[href^="#"]');
    if (!link || !lenis || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
    const hash = link.getAttribute('href')!;
    const target = hash === '#' ? null : document.querySelector<HTMLElement>(hash);
    if (!target) return;
    e.preventDefault();
    lenis.start();
    lenis.scrollTo(target, { duration: 1.4, easing: easeOutExpo, force: true });
    history.replaceState(null, '', hash);
  };
  document.addEventListener('click', onClick);

  return () => {
    document.removeEventListener('click', onClick);
    lenis?.destroy();
    lenis = null;
  };
}

/** Pausa el scroll (por ejemplo, con el menú móvil abierto) y lo reanuda. */
export const pauseScroll = () => lenis?.stop();
export const resumeScroll = () => lenis?.start();
