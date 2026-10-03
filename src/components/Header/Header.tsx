import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { couple, navLinks } from '../../data/content';
import { pauseScroll, resumeScroll } from '../../lib/smoothScroll';
import './Header.css';

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLSpanElement>(null);

  // Barra de lectura: se escribe directo en el estilo, sin re-renderizar en cada scroll.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (progress.current) progress.current.style.transform = `scaleX(${p.toFixed(4)})`;
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

  // Sobre la portada el encabezado es transparente; al salir de ella toma el fondo de papel.
  useEffect(() => {
    const hero = document.getElementById('inicio');
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setSolid(!entry.isIntersecting), {
      rootMargin: '-72px 0px 0px 0px',
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Menú móvil: bloquea el scroll, cierra con Escape y mantiene el foco adentro.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = 'hidden';
    pauseScroll();
    const focusables = () =>
      Array.from(panel.current?.querySelectorAll<HTMLElement>('a, button') ?? []).concat(toggle.current ?? []);
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
        return;
      }
      if (e.key !== 'Tab') return;
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      root.style.overflow = '';
      resumeScroll();
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header${solid ? ' header--solid' : ''}${open ? ' header--open' : ''}`}>
      <div className="header__bar">
        <span className="header__progress" ref={progress} aria-hidden="true" />
        <a className="header__mark" href="#inicio" onClick={close} aria-label={`${couple.first} y ${couple.second}, volver al inicio`}>
          F<em>&amp;</em>M
        </a>

        <nav className="header__nav" aria-label="Secciones">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a className="header__cta" href="#confirmar" onClick={close}>
            Confirmar
          </a>
          <button
            ref={toggle}
            type="button"
            className="header__toggle"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="header__toggle-label">{open ? 'Cerrar' : 'Menú'}</span>
            <span className="header__toggle-lines" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div className="header__sheet" id="menu-movil" ref={panel} aria-hidden={!open} inert={!open} data-lenis-prevent>
        <nav aria-label="Secciones">
          <ol className="header__sheet-list">
            {navLinks.map((link, i) => (
              <li key={link.href} style={{ '--i': i } as CSSProperties}>
                <a href={link.href} onClick={close}>
                  <span className="header__sheet-index">{String(i + 1).padStart(2, '0')}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="header__sheet-foot" style={{ '--i': navLinks.length } as CSSProperties}>
          <p>
            {couple.weekday} {couple.displayDate}
            <br />
            {couple.location}
          </p>
          <a className="btn btn--solid" href="#confirmar" onClick={close}>
            Confirmar asistencia
          </a>
        </div>
      </div>
    </header>
  );
}
