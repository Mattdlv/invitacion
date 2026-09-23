// All editable site copy lives here.

export const couple = {
  first: 'Florencia',
  second: 'Matias',
  displayDate: '4 de diciembre de 2026',
  shortDate: '04 · 12 · 2026',
  location: 'Greenhaven, NY',
};

// Countdown target (local time). The reference shows a live countdown; set the real ceremony time here.
export const countdownTarget = '2026-12-04T19:30:00';

export const navLinks = [
  { label: 'Itinerario', href: '#timeline' },
  { label: 'Detalles', href: '#details' },
  { label: 'Nuestra Historia', href: '#story', isLogo: true },
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

export const gifts = {
  title: 'Regalos',
  paragraphs: [
    [
      'Su presencia en nuestra boda es el mejor regalo que podríamos pedir.',
      'Si además quieren hacernos un obsequio, escribinos y con gusto',
      'les pasamos los datos.',
    ],
    [
      'Lo importante es tenerlos ahí, celebrando con nosotros',
      'hasta que se haga de día.',
    ],
  ],
  email: 'hello@reallygreatsite.com',
};

export const loveStory = {
  noteName: 'Florencia & Matias',
  noteDate: '04.12.2026',
  paragraphs: [
    '¡No se olviden de la propuesta! Cuenten cómo fue: ¿una sorpresa total, un plan pensado al detalle o un momento dulce e íntimo? A los invitados les va a encantar conocer ese momento decisivo.',
    'Por último, miren hacia adelante. ¿Qué es lo que más les entusiasma de este nuevo capítulo juntos? Cierren con unas palabras de agradecimiento para la familia y los amigos que los acompañaron hasta aquí.',
    'Este es el espacio para contar el camino que los trajo hasta aquí. Vuelvan al principio: ¿cómo se conocieron? ¿Qué les llamó la atención de ese primer encuentro? Compartan un momento o detalle que haga sonreír a sus invitados y los haga sentir parte de su historia.',
    'Cuenten cómo fue creciendo su relación con el tiempo. ¿Hubo aventuras, chistes internos o desafíos que fortalecieron el vínculo? Destaquen esos pequeños detalles que muestran quiénes son como pareja.',
  ],
};

// Ordered row by row: left, right, left, right…
export const faq = [
  {
    q: '¿La ceremonia es al aire libre o bajo techo?',
    a: 'Tanto la ceremonia como la recepción serán [bajo techo/al aire libre/parcialmente al aire libre] — elegir una). Recomendamos calzado cómodo y un abrigo liviano para la noche.',
  },
  {
    q: '¿Habrá estacionamiento?',
    a: 'Sí, habrá estacionamiento gratuito [en el lugar/cerca]. Les pedimos llegar unos minutos antes para estacionar con tiempo.',
  },
  {
    q: '¿Puedo ir con acompañante?',
    a: 'Les pedimos que asistan solo las personas nombradas en la invitación, ya que será una celebración íntima.',
  },
  {
    q: '¿A qué hora debo llegar?',
    a: 'Les pedimos llegar entre 15 y 30 minutos antes de la ceremonia para empezar puntualmente.',
  },
  {
    q: '¿Pueden ir niños?',
    a: 'Aunque adoramos a sus pequeños, la boda será solo para adultos, para que todos puedan relajarse y disfrutar de la noche.',
  },
  {
    q: '¿Hay lista de regalos?',
    a: 'Su presencia es el mejor regalo. Si de todas formas desean hacernos un obsequio, pueden ver nuestra lista [insertar enlace o "a pedido"].',
  },
  {
    q: '¿Habrá comida y bebida?',
    a: 'Habrá cena completa y barra libre. Avísennos de cualquier restricción alimentaria en el formulario de confirmación.',
  },
  {
    q: '¿Cómo compartimos las fotos?',
    a: '¡Nos encantaría ver la celebración a través de sus ojos! Usen nuestro hashtag # [SuHashtagAquí] al publicar.',
  },
];

export const rsvp = {
  deadline: 'ANTES DEL 04 | 11 | 2026',
  lines: [
    ['¡No vemos la hora de celebrar', 'este día tan especial con ustedes!'],
    ['Por favor, completen el formulario.', 'Esperamos verlos allí.'],
  ],
};
