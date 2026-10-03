export interface RsvpResponse {
  name: string;
  attending: 'yes' | 'no';
  /** Menús de adulto, contando a quien confirma. */
  adults: number;
  /** Menús de niños. */
  children: number;
  /** Total de los menús, en pesos. */
  total: number;
  dietary: string;
  message: string;
  sentAt: string;
}

const STORAGE_KEY = 'rsvp-response';

/**
 * Envío simulado: guarda la respuesta en este navegador. Para recibirlas de verdad,
 * reemplazá el cuerpo por un fetch a tu servicio (Google Apps Script con una planilla,
 * Formspree, una API propia). Si el servicio falla, lanzá un error: el formulario lo
 * muestra y deja reintentar.
 */
export async function submitRsvp(response: RsvpResponse): Promise<void> {
  await new Promise((r) => setTimeout(r, 700));
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(response));
  } catch {
    /* almacenamiento bloqueado: el envío simulado igual se da por bueno */
  }
}

/** Respuesta ya enviada desde este navegador, para mostrarla en lugar del formulario. */
export function savedRsvp(): RsvpResponse | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const saved = raw ? (JSON.parse(raw) as RsvpResponse) : null;
    // Respuestas guardadas con un formato anterior se descartan.
    return saved && typeof saved.adults === 'number' ? saved : null;
  } catch {
    return null;
  }
}

export function clearSavedRsvp() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* nada que limpiar */
  }
}
