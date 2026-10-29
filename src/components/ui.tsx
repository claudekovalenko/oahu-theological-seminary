import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "gold" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
  external?: boolean;
} & Omit<ComponentProps<"button">, "children">;

const variants = {
  primary: "bg-ocean-900 text-white hover:bg-ocean-800 border border-ocean-900",
  secondary: "bg-white text-ocean-900 border border-sand-300 hover:border-ocean-900",
  ghost: "bg-transparent text-ocean-900 hover:bg-sand-100 border border-transparent",
  gold: "bg-gold-500 text-ocean-950 hover:bg-gold-400 border border-gold-500",
  /** For use on dark backgrounds */
  outline: "bg-transparent text-white border border-white/40 hover:border-gold-400 hover:text-gold-400",
};
const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2.5 text-sm", lg: "px-6 py-3 text-base" };

export function Button({ href, variant = "primary", size = "md", className = "", children, external, ...rest }: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600 ${className}`}>{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow className={dark ? "text-gold-400" : ""}>{eyebrow}</Eyebrow>}
      <h2 className={`mt-3 text-3xl sm:text-4xl ${dark ? "text-white" : "text-ocean-900"}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-sand-200" : "text-ink-muted"}`}>{text}</p>}
    </div>
  );
}

export function Card({ className = "", tone = "light", children }: { className?: string; tone?: "light" | "dark"; children: ReactNode }) {
  const t = tone === "dark" ? "border-ocean-900 bg-ocean-900 text-white" : "border-sand-200 bg-white";
  return <div className={`rounded-2xl border p-6 shadow-soft ${t} ${className}`}>{children}</div>;
}

export function Pill({ children, tone = "sand" }: { children: ReactNode; tone?: "sand" | "lagoon" | "gold" | "ocean" }) {
  const t = {
    sand: "bg-sand-100 text-ink-muted",
    lagoon: "bg-lagoon-100 text-lagoon-700",
    gold: "bg-gold-400 text-ocean-950",
    ocean: "bg-ocean-900 text-white",
  }[tone];
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${t}`}>{children}</span>;
}

export function PageHero({ eyebrow, title, text, children }: { eyebrow?: string; title: string; text?: string; children?: ReactNode }) {
  return (
    <section className="bg-ocean-900 text-white">
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          {eyebrow && <Eyebrow className="text-gold-400">{eyebrow}</Eyebrow>}
          <h1 className="mt-3 text-4xl sm:text-5xl">{title}</h1>
          {text && <p className="mt-5 text-lg leading-relaxed text-sand-200">{text}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}

export const icons = {
  instagram: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.2zM9.8 15.2V8.8l6 3.2-6 3.2z" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4L8.5 12l6.8-6.7a1 1 0 0 1 1.4 0z" clipRule="evenodd" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M3 10a1 1 0 0 1 1-1h9.6l-3.3-3.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3H4a1 1 0 0 1-1-1z" clipRule="evenodd" />
    </svg>
  ),
  play: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
};
