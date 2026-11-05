/** OTS crest — the real logo from oahuseminary.org. */
export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img
      src="/images/ots-logo.webp"
      alt="Oahu Theological Seminary"
      className={className}
    />
  );
}
