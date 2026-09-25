// All editable site copy lives here.

export const couple = {
  first: 'Florencia',
  second: 'Matias',
  displayDate: '4 de diciembre de 2026',
  shortDate: '04 · 12 · 2026',
  location: 'La Rioja, Argentina',
};

// Countdown target (local time). The reference shows a live countdown; set the real ceremony time here.
export const countdownTarget = '2026-12-04T19:30:00';

export const navLinks = [
  { label: 'Itinerario', href: '#timeline' },
  { label: 'Detalles', href: '#details' },
  { label: 'Menú', href: '#menu' },
  { label: 'F & M', href: '#', isLogo: true },
  { label: 'Música', href: '#playlist' },
  { label: 'Regalos', href: '#registry' },
  { label: 'Confirmar', href: '#rsvp' },
  { label: 'Preguntas', href: '#faq' },
];

export const timeline: { time?: string; event: string }[] = [
  { time: '19:30 h', event: 'Ceremonia' },
  { event: 'Recepción' },
  { event: 'Cena' },
  { event: 'Baile' },
  { time: '03:00 h', event: 'Mesa dulce' },
];

export const details: {
  title: string;
  body: string;
  venue?: { name: string; city: string; mapUrl: string; mapLabel: string };
}[] = [
  {
    title: 'Cómo llegar',
    body: 'Nos casamos en el minigolf de la ciudad de La Rioja. Abrí el mapa y te guía hasta la puerta desde donde estés. Te esperamos unos minutos antes de las 19:30 para arrancar la ceremonia puntuales.',
    venue: {
      name: 'Minigolf La Rioja Eventos',
      city: 'La Rioja, Argentina',
      mapUrl: 'https://bit.ly/boda-flor-mati',
      mapLabel: 'Ver ubicación',
    },
  },
];

export const dressCode = {
  style: 'Elegante sport',
  forbiddenTitle: 'Colores reservados',
  forbidden: [
    { name: 'Verde olivo', color: '#6b6a3a' },
    { name: 'Lavanda', color: '#b3a6cb' },
    { name: 'Beige', color: '#ddd2bb' },
    { name: 'Blanco', color: '#ffffff' },
  ],
  paragraphs: [
    'El código es elegante sport: algo prolijo pero cómodo, pensado para una noche larga — la fiesta sigue hasta las tres. Nada de etiqueta rigurosa.',
    'Les pedimos evitar cuatro colores, que quedan reservados: verde olivo, lavanda, beige y blanco. Fuera de esos, vení con el que más te guste.',
  ],
};

export const menus: {
  title: string;
  intro: string;
  options: { name: string; price: string; groups: { title?: string; items: string[] }[] }[];
} = {
  title: 'Menú',
  intro: 'Al confirmar, contanos qué menú elegís y si tenés alguna restricción alimentaria.',
  options: [
    {
      name: 'Adulto',
      price: '$ 65.000',
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
      name: 'Niños',
      price: '$ 45.000',
      groups: [
        {
          items: ['Empanadas de jamón y queso', 'Lomito o milanesa con papas fritas'],
        },
        { title: 'Postre', items: ['Postre helado'] },
        { title: 'Bebidas', items: ['Línea Coca-Cola y agua mineral'] },
      ],
    },
  ],
};

export const playlist = {
  title: 'La Playlist',
  paragraphs: [
    ['¿Qué canción no puede faltar?', 'Sumala a la lista y la escuchamos esa noche.'],
    ['Cuantos más temas tenga,', 'mejor va a estar la pista.'],
  ],
  url: 'https://open.spotify.com/playlist/5gQbQTXRewEyyVpdkwqyJ2?nd=1&dlsi=3c5179495db14c79',
  label: 'Agregar mi canción',
};

export const gifts = {
  title: 'Regalos',
  paragraphs: [
    [
      'Su presencia es el mejor regalo que podríamos pedir.',
      'Si además desean hacernos un obsequio, escríbannos',
      'y con gusto les pasamos los datos.',
    ],
    [
      'Lo importante es tenerlos ahí, celebrando con nosotros',
      'hasta el último baile.',
    ],
  ],
};

// Ordered row by row: left, right, left, right…
export const faq: { q: string; a: string; link?: { label: string; href: string } }[] = [
  {
    q: '¿La ceremonia es al aire libre o bajo techo?',
    a: 'Las dos cosas. La ceremonia y la recepción son al aire libre, y el resto de la fiesta sigue adentro del salón, con ambiente climatizado. Diciembre en La Rioja viene caluroso, así que vengan frescos y cómodos.',
  },
  {
    q: '¿Habrá estacionamiento?',
    a: 'Sí. El establecimiento tiene estacionamiento propio y cuenta con seguridad. Si se llena, también se puede estacionar sobre la Av. Benavídez. Les pedimos llegar unos minutos antes para acomodarse con tiempo.',
  },
  {
    q: '¿Puedo ir con acompañante?',
    a: 'El salón tiene capacidad limitada, así que la invitación alcanza solo a las personas nombradas en ella. Es importante tenerlo en cuenta: la seguridad del establecimiento permite el ingreso únicamente a quienes figuran en la lista de invitados.',
  },
  {
    q: '¿A qué hora debo llegar?',
    a: 'Les pedimos llegar entre 15 y 30 minutos antes de las 19:30, así la ceremonia arranca puntual. Es importante respetar el horario: de eso dependen la organización del evento y el tiempo de los demás invitados.',
  },
  {
    q: '¿Pueden ir niños?',
    a: '¡Sí! Los más chicos son bienvenidos y van a tener un espacio propio para divertirse. Eso sí, avísennos al confirmar si vienen con ellos y cuántos son, para reservarles el lugar.',
  },
  {
    q: '¿Hay lista de regalos?',
    a: 'Su presencia es el mejor regalo. Si de todas formas desean hacernos un obsequio, sí tenemos una lista: escríbannos por mensaje privado y con gusto se la compartimos.',
  },
  {
    q: '¿Cómo compartimos las fotos?',
    a: '¡Nos encantaría ver la celebración a través de sus ojos! Tenemos una carpeta compartida: suban ahí todas las fotos y los videos que quieran, antes, durante y después de la fiesta.',
    link: {
      label: 'Subir fotos y videos',
      href: 'https://drive.google.com/drive/folders/1D6hpmwounZ11s494pc0z0vv7kdFAtj-G?usp=sharing',
    },
  },
];

export const rsvp = {
  /** Ultimo momento para confirmar. Pasada esta fecha la seccion se cierra sola. */
  deadlineDate: '2026-08-31T23:59:59',
  deadline: 'ANTES DEL 31 | 08 | 2026',
  lines: [
    ['¡No vemos la hora de celebrar', 'este día tan especial con ustedes!'],
    ['Por favor, completen el formulario.', 'Esperamos verlos allí.'],
  ],
  closedDeadline: 'CERRÓ EL 31 | 08 | 2026',
  closedLines: [
    ['El plazo para confirmar', 'ya finalizó.'],
    ['Si te queda algo por avisarnos,', 'hablá directamente con los novios.'],
  ],
  closedLabel: 'Confirmación cerrada',
};
