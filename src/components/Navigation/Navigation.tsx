import { useEffect, useState } from 'react';
import { navLinks } from '../../data/content';
import Script from '../Script/Script';
import './Navigation.css';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const logo = navLinks.find((l) => l.isLogo)!;

  return (
    <nav className={`nav${open ? ' nav--open' : ''}`} aria-label="Principal">
      <a className="nav__mobile-logo" href={logo.href}>
        <Script text={logo.label} />
      </a>
      <button
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="nav-list"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
        <span className="nav__bar nav__bar--top" />
        <span className="nav__bar nav__bar--bottom" />
      </button>
      <ul className="nav__list" id="nav-list">
        {navLinks.map((link) => (
          <li key={link.label} className={link.isLogo ? 'nav__item nav__item--logo' : 'nav__item'}>
            <a
              href={link.href}
              className={link.isLogo ? 'nav__logo' : 'nav__link'}
              onClick={() => setOpen(false)}
            >
              {link.isLogo ? <Script text={link.label} /> : link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
