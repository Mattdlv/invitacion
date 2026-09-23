import { useEffect, useRef, useState, type FormEvent } from 'react';
import Script from '../Script/Script';
import './RsvpModal.css';

export interface RsvpResponse {
  name: string;
  email: string;
  attending: 'yes' | 'no';
  message: string;
}

/** Mock submission — replace with a real API call when a backend exists. */
async function submitRsvp(response: RsvpResponse) {
  await new Promise((r) => setTimeout(r, 600));
  try {
    const saved = JSON.parse(localStorage.getItem('rsvp-responses') ?? '[]');
    localStorage.setItem('rsvp-responses', JSON.stringify([...saved, response]));
  } catch {
    /* storage unavailable — ignore in mock */
  }
}

export default function RsvpModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (open && !el.open) {
      setStatus('idle');
      el.showModal();
    } else if (!open && el.open) {
      el.close();
    }
  }, [open]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus('sending');
    await submitRsvp({
      name: String(data.get('name')),
      email: String(data.get('email')),
      attending: data.get('attending') === 'no' ? 'no' : 'yes',
      message: String(data.get('message') ?? ''),
    });
    setStatus('done');
  };

  return (
    <dialog
      ref={dialog}
      className="rsvp-modal"
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-labelledby="rsvp-modal-title"
    >
      <div className="rsvp-modal__card">
        <button type="button" className="rsvp-modal__close" onClick={onClose} aria-label="Cerrar">
          ×
        </button>
        <Script as="h2" id="rsvp-modal-title" className="rsvp-modal__title" text="Confirmá tu Asistencia" />

        {status === 'done' ? (
          <p className="rsvp-modal__thanks">¡Gracias! Recibimos tu respuesta.</p>
        ) : (
          <form className="rsvp-modal__form" onSubmit={onSubmit}>
            <label>
              Nombre completo
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              Correo electrónico
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <fieldset>
              <legend>¿Vas a asistir?</legend>
              <label className="rsvp-modal__radio">
                <input type="radio" name="attending" value="yes" defaultChecked /> Con gusto asistiré
              </label>
              <label className="rsvp-modal__radio">
                <input type="radio" name="attending" value="no" /> Lamentablemente no podré
              </label>
            </fieldset>
            <label>
              Mensaje o restricciones alimentarias
              <textarea name="message" rows={3} />
            </label>
            <button type="submit" className="pill rsvp-modal__submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando…' : 'Enviar'}
            </button>
          </form>
        )}
      </div>
    </dialog>
  );
}
