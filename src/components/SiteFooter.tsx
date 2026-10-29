import Link from "next/link";
import { nav, site } from "@/content/site";
import { Container, icons } from "./ui";
import { Logo } from "./Logo";
import { Year } from "./Year";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ocean-950 text-sand-200">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <p className="font-display text-lg text-white">{site.name}</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-sand-300">{site.tagline}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-ocean-700 p-2 hover:border-gold-400 hover:text-gold-400"
            >
              {icons.instagram}
            </a>
            <a
              href={site.youtube.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="rounded-full border border-ocean-700 p-2 hover:border-gold-400 hover:text-gold-400"
            >
              {icons.youtube}
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/start" className="hover:text-white">
                Start here
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-white">
                Student portal
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">Visit</p>
          <address className="mt-4 text-sm not-italic leading-relaxed">
            {site.location.venue}
            <br />
            {site.location.address}
            <br />
            {site.location.city}
          </address>
          <p className="mt-3 text-sm text-sand-300">{site.location.note}</p>
          <a href={site.location.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-gold-400 hover:text-white">
            Get directions
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">Connect</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.contactEmail}`} className="hover:text-white">
                {site.contactEmail}
              </a>
            </li>
            <li>
              <a href={site.giveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Give to OTS
              </a>
            </li>
            <li>
              <a href={site.partner.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                In partnership with {site.partner.name}
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-ocean-800">
        <Container className="flex flex-col gap-2 py-6 text-xs text-sand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© <Year /> {site.name}. A Hawaiʻi nonprofit corporation.</p>
          <p>Soli Deo Gloria.</p>
        </Container>
      </div>
    </footer>
  );
}
