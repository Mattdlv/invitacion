interface Props {
  name: string;
  city: string;
  mapUrl: string;
  mapLabel: string;
}

/** Location card for the "Cómo llegar" block: pin + venue name + link out to the map. */
export default function VenueCard({ name, city, mapUrl, mapLabel }: Props) {
  return (
    <div className="venue">
      <span className="venue__pin" aria-hidden="true">
        <svg viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 31c0 0-10.5-12.2-10.5-19A10.5 10.5 0 0 1 22.5 12c0 6.8-10.5 19-10.5 19z" />
          <circle cx="12" cy="11.6" r="3.9" />
        </svg>
      </span>
      <p className="venue__name">{name}</p>
      <p className="venue__city">{city}</p>
      <a className="pill venue__button" href={mapUrl} target="_blank" rel="noreferrer">
        {mapLabel}
        <span className="sr-only"> en Google Maps (se abre en una pestaña nueva)</span>
      </a>
    </div>
  );
}
