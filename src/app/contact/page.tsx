import type { Metadata } from "next";
import { Button, Card, Container, PageHero, icons } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="We'd love to hear from you" text="Questions about a program, a visit, or how your church can partner with OTS? Reach out." />
      <section className="py-20">
        <Container className="grid gap-6 md:grid-cols-3">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">Email</p>
            <a href={`mailto:${site.contactEmail}`} className="mt-3 block font-display text-xl text-ocean-900 underline">
              {site.contactEmail}
            </a>
            <p className="mt-2 text-sm text-ink-muted">We typically respond within a few days.</p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">Visit</p>
            <p className="mt-3 font-display text-xl text-ocean-900">{site.location.venue}</p>
            <p className="mt-1 text-sm text-ink-muted">
              {site.location.address}
              <br />
              {site.location.city}
            </p>
            <p className="mt-2 text-sm">{site.location.note}</p>
            <Button href={site.location.mapsUrl} external variant="secondary" size="sm" className="mt-4">
              {icons.pin} Directions
            </Button>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">Social</p>
            <div className="mt-3 space-y-2">
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ocean-900 underline">
                {icons.instagram} @{site.instagram.handle}
              </a>
              <a href={site.youtube.channelUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ocean-900 underline">
                {icons.youtube} YouTube
              </a>
            </div>
          </Card>
        </Container>
        <Container className="mt-10">
          <Card className="flex flex-wrap items-center justify-between gap-4 bg-sand-50">
            <div>
              <p className="font-display text-xl text-ocean-900">Interested in studying with us?</p>
              <p className="text-sm text-ink-muted">The application takes about ten minutes.</p>
            </div>
            <Button href="/start/apply" variant="gold">
              Apply {icons.arrow}
            </Button>
          </Card>
        </Container>
      </section>
    </>
  );
}
