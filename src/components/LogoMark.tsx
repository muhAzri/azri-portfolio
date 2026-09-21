/** Brand mark: a geometric "A" (peak + crossbar). Single color, follows currentColor. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M18 48 32 16 46 48"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M25 35 H39" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
