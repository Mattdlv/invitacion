// Todo el texto editable del sitio vive acá.
// Lo marcado con "PENDIENTE" falta completar.

export const couple = {
  first: 'Florencia',
  second: 'Matias',
  monogram: 'F & M',
  weekday: 'Viernes',
  displayDate: '4 de diciembre de 2026',
  shortDate: '04 · 12 · 2026',
  location: 'La Rioja, Argentina',
  tagline: 'De todos los caminos posibles, elegimos el mismo.',
};

/** Fecha y hora de la ceremonia, con la zona horaria de Argentina para que el contador
 *  sea correcto aunque el invitado abra la invitación desde otro país. */
export const ceremonyStart = '2026-12-04T19:30:00-03:00';
export const celebrationEnd = '2026-12-05T03:00:00-03:00';

export const navLinks = [
  { label: 'Celebración', href: '#celebracion' },
  { label: 'Dress code', href: '#dress-code' },
  { label: 'Fotos', href: '#fotos' },
  { label: 'Regalos', href: '#regalos' },
  { label: 'Preguntas', href: '#preguntas' },
];

/* ---------- Ceremonia y celebración ---------- */

export const venue = {
  name: 'Minigolf La Rioja Eventos',
  city: 'La Rioja, Argentina',
  // PENDIENTE: calle y número. Si queda vacío, la fila no se muestra.
  address: '',
  mapUrl: 'https://bit.ly/boda-flor-mati',
  mapLabel: 'Abrir en Google Maps',
  note: 'La ceremonia y la recepción son al aire libre; después la fiesta sigue adentro del salón, climatizado. Te esperamos 15 minutos antes de las 19:30 para arrancar puntuales.',
};

export const schedule: { time?: string; event: string; detail?: string }[] = [
  { time: '19:30', event: 'Ceremonia', detail: 'Al aire libre' },
  { event: 'Recepción', detail: 'Al aire libre' },
  { event: 'Cena', detail: 'En el salón' },
  { event: 'Baile' },
  { time: '03:00', event: 'Mesa dulce' },
];

export const dressCode = {
  style: ['Elegante', 'sport'],
  forbiddenTitle: 'Colores reservados',
  forbiddenNote: 'Les pedimos no usarlos: quedan para el cortejo.',
  forbidden: [
    { name: 'Verde olivo', color: '#6b6a3a' },
    { name: 'Lavanda', color: '#b3a6cb' },
    { name: 'Beige', color: '#ddd2bb' },
    { name: 'Blanco', color: '#ffffff' },
  ],
  paragraphs: [
    'Algo prolijo pero cómodo, pensado para una noche larga: la fiesta sigue hasta las tres. Nada de etiqueta rigurosa.',
    'Diciembre en La Rioja viene caluroso: elegí telas livianas, sin perder la elegancia que pide el dress code.',
  ],
};

export const menus: {
  intro: string;
  /** `price` en pesos, sin puntos: la calculadora de la confirmación suma con estos valores. */
  options: { key: 'adult' | 'child'; name: string; price: number; groups: { title?: string; items: string[] }[] }[];
} = {
  intro: 'Al confirmar, elegí cuántos menús de adulto y de niños necesitás: el formulario te calcula el total.',
  options: [
    {
      key: 'adult',
      name: 'Adulto',
      price: 65000,
      groups: [
        {
          items: [
            'Bruschettas en variedad',
            'Escabeches',
            'Empanadas criollas',
            'Empanadas de jamón y queso',
            'Empanadas árabes',
            'Tacos mixtos',
            'Ensalada César',
            'Tabla de fiambres',
            'Cazuela de bondiola al disco',
            'Kebabs',
            'Panes artesanales',
          ],
        },
        { title: 'Postre', items: ['Copa helada Minigolf'] },
        { title: 'Bebidas', items: ['Línea Coca-Cola, soda y agua mineral'] },
      ],
    },
    {
      key: 'child',
      name: 'Niños',
      price: 45000,
      groups: [
        { items: ['Empanadas de jamón y queso', 'Lomito o milanesa con papas fritas'] },
        { title: 'Postre', items: ['Postre helado'] },
        { title: 'Bebidas', items: ['Línea Coca-Cola y agua mineral'] },
      ],
    },
  ],
};

/* ---------- Fotos ---------- */

export const instagram = {
  handle: 'mf.noscasamos',
  url: 'https://www.instagram.com/mf.noscasamos/',
  title: ['Compartí', 'tus fotos'],
  text: 'Queremos ver la boda a través de tus ojos. Subí tus fotos y videos de la noche y etiquetanos: así armamos entre todos el álbum.',
  steps: ['Seguí la cuenta', 'Subí tu foto o tu historia', 'Etiquetá a @mf.noscasamos'],
  label: 'Abrir en Instagram',
};

/* ---------- Playlist ---------- */

export const playlist = {
  title: ['¿Qué canción', 'no puede faltar?'],
  text: 'Sumala a la lista y la escuchamos esa noche. Cuantos más temas tenga, mejor va a estar la pista.',
  url: 'https://open.spotify.com/playlist/5gQbQTXRewEyyVpdkwqyJ2?nd=1&dlsi=3c5179495db14c79',
  /** Reproductor embebido: muestra los temas de la lista, incluidos los que se van sumando. */
  embedUrl: 'https://open.spotify.com/embed/playlist/5gQbQTXRewEyyVpdkwqyJ2?utm_source=generator&theme=0',
  label: 'Agregar mi canción',
};

/* ---------- Regalos ---------- */

export const gifts = {
  title: ['Su presencia', 'es el regalo'],
  paragraphs: [
    'Lo importante es tenerlos ahí, celebrando con nosotros hasta el último baile.',
    'Si además desean hacernos un obsequio, pueden hacerlo por transferencia.',
  ],
  /** Cuenta para los regalos. */
  alias: 'mf.regalo',
  holder: 'Matias De la Vega Cervantes',
  wallet: 'Lemon',
};

/** Cuenta para abonar la tarjeta (el valor de los menús): la usa la calculadora de la confirmación. */
export const card = {
  alias: 'mf.tarjeta',
  holder: 'Maria Florencia Ponce',
  wallet: 'Mercado Pago',
};

/* ---------- Preguntas ---------- */

export const faq: { q: string; a: string }[] = [
  {
    q: '¿La ceremonia es al aire libre o bajo techo?',
    a: 'Las dos cosas. La ceremonia y la recepción son al aire libre, y el resto de la fiesta sigue adentro del salón, con ambiente climatizado. Diciembre en La Rioja viene caluroso: elijan telas livianas, siempre dentro del dress code elegante sport.',
  },
  {
    q: '¿Habrá estacionamiento?',
    a: 'Sí. El establecimiento tiene estacionamiento propio y cuenta con seguridad. Si se llena, también se puede estacionar sobre la Av. Benavídez. Les pedimos llegar unos minutos antes para acomodarse con tiempo.',
  },
  {
    q: '¿A qué hora debo llegar?',
    a: 'Les pedimos llegar 15 minutos antes de las 19:30, así la ceremonia arranca puntual. Es importante respetar el horario: de eso dependen la organización del evento y el tiempo de los demás invitados.',
  },
  {
    q: '¿Hay lista de regalos?',
    a: 'Su presencia es el mejor regalo. Si de todas formas desean hacernos un obsequio, pueden escribirnos por privado y con gusto les compartimos la lista de regalos.',
  },
  {
    q: '¿Cómo compartimos las fotos?',
    a: '¡Nos encantaría ver la celebración a través de sus ojos! Suban sus fotos y videos a Instagram etiquetando a @mf.noscasamos, antes, durante y después de la fiesta.',
  },
];

/* ---------- Confirmación ---------- */

export const rsvp = {
  /** Último momento para confirmar. Pasada esta fecha el formulario se cierra solo. */
  deadlineDate: '2026-08-31T23:59:59-03:00',
  deadlineLabel: '31 de agosto de 2026',
  title: ['¿Nos', 'acompañás?'],
  intro: 'Completá el formulario una vez por grupo familiar. Si algo cambia, escribinos.',
  /** Topes de los contadores del formulario. */
  maxAdults: 8,
  maxChildren: 6,
  closedText: 'El plazo para confirmar ya finalizó. Para abonar la tarjeta, calculá acá el total de tu familia y transferí al alias. Si te queda algo por avisarnos, hablá directamente con los novios.',
};

export const closing = {
  lines: ['Gracias por ser parte', 'de nuestra historia'],
  signature: 'Con amor,',
};
