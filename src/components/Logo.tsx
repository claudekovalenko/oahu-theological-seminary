/** Simple mark: an open book over a wave, in the site palette. */
export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="#0b2340" />
      <path d="M10 31c4-3 8-3 12 0 4-3 8-3 12 0v3c-4-3-8-3-12 0-4-3-8-3-12 0z" fill="#2a94b3" />
      <path d="M12 15c4-1.5 8-1 12 2 4-3 8-3.5 12-2v14c-4-1.5-8-1-12 2-4-3-8-3.5-12-2z" fill="#fbf8f1" />
      <path d="M24 17v14" stroke="#0b2340" strokeWidth="1.5" />
      <path d="M22 12l2-4 2 4" fill="none" stroke="#c9a24a" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
