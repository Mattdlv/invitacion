# Florencia & Matias — Wedding Site

Single-page wedding website (React + Vite + TypeScript) rebuilt from the reference design.

## Requirements

- Node.js 18+ (tested on Node 24) and npm

## Install & run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build in dist/
npm run preview    # serve the production build
```

## Structure

```
public/
  images/     photos (hero, honeymoon, love-story frame, closing) + QR code
  svg/        ornaments: countdown frame, RSVP divider, paperclip
  textures/   damask pattern, paper noise
  icons/      favicon
src/
  components/ one folder per section (component + CSS)
  data/content.ts   all texts, dates, links, FAQ, timeline, colors
  hooks/            scroll reveal + parallax
  styles/global.css design tokens (colors, fonts), shared classes, animations
```

## Where to change things

- **Content** (names, dates, texts, FAQ, timeline, hotel links, email): `src/data/content.ts`
- **Countdown target date**: `countdownTarget` in `src/data/content.ts`
- **Colors / fonts**: CSS variables at the top of `src/styles/global.css`
- **Section styles**: `src/components/<Section>/<Section>.css`
- **Images**: replace files in `public/images/` keeping the same names
- **RSVP form**: `src/components/Rsvp/RsvpModal.tsx` — `submitRsvp()` is a mock (saves to localStorage); replace it with a real API call.

Fonts are bundled from npm (`@fontsource/*`), so the site works fully offline.
