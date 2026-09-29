/** Rama de olivo decorativa para las esquinas de la sección de regalos. */
export default function Sprig({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M2 118C28 104 58 84 84 58c14-14 26-30 34-46" />
      <path d="M30 98c-6-9-5-19 3-25 5 8 4 18-3 25z" />
      <path d="M30 98c-10 2-18-3-20-12 9-3 18 2 20 12z" />
      <path d="M56 76c-5-10-2-20 7-25 4 9 1 19-7 25z" />
      <path d="M56 76c-10 1-18-5-19-14 10-2 18 4 19 14z" />
      <path d="M82 52c-4-10 0-20 9-24 3 9-1 19-9 24z" />
      <path d="M82 52c-10 0-17-7-17-16 10-1 17 6 17 16z" />
      <path d="M104 26c-3-10 2-19 11-22 2 9-3 18-11 22z" />
      <path d="M104 26c-10-1-16-8-15-17 10 0 16 8 15 17z" />
    </svg>
  );
}
