const paths = {
  arrowRight: <path d="M3 8h10M9 4l4 4-4 4" />,
  arrowDown: <path d="M8 3v10M4 9l4 4 4-4" />,
  arrowUp: <path d="M8 13V3M4 7l4-4 4 4" />,
  arrowUpRight: <path d="M5 11l6-6M6 5h5v5" />,
  copy: (
    <>
      <rect x="5.5" y="5.5" width="8" height="8" rx="1.2" />
      <path d="M10.5 5.5V3.7a1.2 1.2 0 0 0-1.2-1.2H3.7a1.2 1.2 0 0 0-1.2 1.2v5.6a1.2 1.2 0 0 0 1.2 1.2h1.8" />
    </>
  ),
  check: <path d="M3 8.5l3.2 3.2L13 5" />,
  pin: (
    <>
      <path d="M8 14.5S3.5 9.7 3.5 6.4a4.5 4.5 0 0 1 9 0c0 3.3-4.5 8.1-4.5 8.1z" />
      <circle cx="8" cy="6.4" r="1.6" />
    </>
  ),
  calendar: (
    <>
      <rect x="2.5" y="3.5" width="11" height="10" rx="1" />
      <path d="M2.5 6.5h11M5.5 2v3M10.5 2v3" />
    </>
  ),
  music: (
    <>
      <path d="M6 12V3.5l7-1.5v8.5" />
      <circle cx="4.3" cy="12" r="1.7" />
      <circle cx="11.3" cy="10.5" r="1.7" />
    </>
  ),
  instagram: (
    <>
      <rect x="2.25" y="2.25" width="11.5" height="11.5" rx="3.4" />
      <circle cx="8" cy="8" r="2.7" />
      <circle cx="11.4" cy="4.6" r="0.35" fill="currentColor" />
    </>
  ),
  plus: <path d="M8 3v10M3 8h10" />,
  minus: <path d="M3 8h10" />,
  close: <path d="M4 4l8 8M12 4l-8 8" />,
};

export type IconName = keyof typeof paths;

export default function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
