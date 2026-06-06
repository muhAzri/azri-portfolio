/**
 * Custom brand mark — a stylized geometric "A" (peak + crossbar) drawn with a
 * violet→cyan gradient stroke. Used in the navbar; mirrored in icon.svg and the
 * OG image.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient
          id="azri-mark"
          x1="14"
          y1="50"
          x2="50"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#a99bff" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <path
        d="M18 48 32 16 46 48"
        stroke="url(#azri-mark)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 35 H39"
        stroke="url(#azri-mark)"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
