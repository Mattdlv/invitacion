# Florencia & Matias — Invitación digital

Invitación de boda de una sola página (React + Vite + TypeScript), pensada primero para celular.

## Instalar y correr

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # chequeo de tipos + build de producción en dist/
npm run preview    # sirve el build de producción
```

## Estructura

```
public/
  images/     fotos (portada, cierre)
  icons/      favicon
src/
  components/       una carpeta por sección (componente + CSS)
  components/ui/    piezas compartidas: SectionHead, MaskText, Icon
  data/content.ts   TODO el texto, fechas, lugar, menú, FAQ, regalos, Instagram, Spotify
  hooks/            revelado al hacer scroll, parallax
  lib/              portapapeles, Google Calendar, envío del RSVP
  styles/global.css colores, tipografías, botones, animaciones compartidas
```

## Dónde cambiar cada cosa

Todo el contenido está en `src/data/content.ts`. Lo marcado con `PENDIENTE` es relleno.

- **Instagram para compartir fotos**: `instagram` (perfil, texto y pasos).
- **Playlist**: `playlist.url` (botón para sumar temas) y `playlist.embedUrl` (reproductor que
  muestra la lista en vivo).
- **Datos para transferir**: `gifts.alias` y `gifts.holder`. El botón copia el alias.
- **Dirección del salón**: `venue.address` (si queda vacío, la fila no se muestra).
- **Fecha y hora**: `ceremonyStart` / `celebrationEnd` (con zona horaria `-03:00`, así el
  contador es correcto desde cualquier país).
- **Plazo de confirmación**: `rsvp.deadlineDate`. Pasada la fecha, el formulario se cierra solo.
- **Colores y tipografías**: variables al principio de `src/styles/global.css`.

## Formulario de confirmación

`src/lib/rsvp.ts` → `submitRsvp()` hoy **simula** el envío: guarda la respuesta solo en el
navegador del invitado. Para recibir las respuestas hay que reemplazarlo por un `fetch` a un
servicio (Google Apps Script con una planilla, Formspree, una API propia). Si el servicio
falla, que lance un error: el formulario muestra el aviso y deja reintentar.

Las tipografías (Cormorant Garamond y Jost) vienen de npm (`@fontsource/*`): el sitio no
depende de Google Fonts.
