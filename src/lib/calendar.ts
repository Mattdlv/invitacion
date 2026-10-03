import { celebrationEnd, ceremonyStart, couple, venue } from '../data/content';

const toUtcStamp = (iso: string) =>
  new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

/** Enlace a Google Calendar con el evento ya cargado. */
export function googleCalendarUrl() {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `Boda de ${couple.first} y ${couple.second}`,
    dates: `${toUtcStamp(ceremonyStart)}/${toUtcStamp(celebrationEnd)}`,
    location: [venue.name, venue.address, venue.city].filter(Boolean).join(', '),
    details: `Ceremonia a las 19:30 h. ${window.location.origin}${window.location.pathname}`,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}
