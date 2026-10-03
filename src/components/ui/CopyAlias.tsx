import { useEffect, useRef, useState } from 'react';
import { gifts } from '../../data/content';
import { copyText } from '../../lib/clipboard';
import Icon from './Icon';
import './CopyAlias.css';

type CopyState = 'idle' | 'copied' | 'error';

/** Botón que copia el alias, con su aviso flotante. Se usa en Regalos y en la confirmación. */
export default function CopyAlias({ className = '' }: { className?: string }) {
  const [state, setState] = useState<CopyState>('idle');
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    const ok = await copyText(gifts.alias);
    window.clearTimeout(timer.current);
    setState(ok ? 'copied' : 'error');
    timer.current = window.setTimeout(() => setState('idle'), 2400);
  };

  return (
    <>
      <button
        type="button"
        className={`btn btn--solid copy-alias${state === 'copied' ? ' is-copied' : ''} ${className}`.trim()}
        onClick={copy}
      >
        {/* Los dos estados se cruzan con desenfoque: se lee como un solo botón que cambia */}
        <span className="copy-alias__face copy-alias__face--idle" aria-hidden={state === 'copied'}>
          <Icon name="copy" className="btn__icon" />
          {gifts.copyLabel}
        </span>
        <span className="copy-alias__face copy-alias__face--done" aria-hidden={state !== 'copied'}>
          <Icon name="check" className="btn__icon" />
          {gifts.copiedLabel}
        </span>
      </button>

      {/* Aviso flotante: confirma la copia aunque el botón quede fuera de la vista */}
      <div className={`toast${state !== 'idle' ? ' is-visible' : ''}${state === 'error' ? ' toast--error' : ''}`} role="status">
        {state === 'copied' && (
          <>
            <Icon name="check" className="toast__icon" />
            {gifts.copiedLabel}: {gifts.alias}
          </>
        )}
        {state === 'error' && (
          <>
            <Icon name="close" className="toast__icon" />
            No se pudo copiar. Mantené presionado el alias para copiarlo.
          </>
        )}
      </div>
    </>
  );
}
