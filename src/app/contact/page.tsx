import type { Metadata } from "next";
import { Button, Card, Container, PageHero, icons } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Connect with us"
        title="We’d love to hear from you"
        text="Questions about a program, a class visit, or how your church can partner with OTS? Send us a note."
      />
      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-3xl border border-sand-200 bg-white p-6 shadow-soft sm:p-8">
            <h2 className="text-2xl text-ocean-900">Send a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <aside className="space-y-6">
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
            {site.contactEmail && (
              <Card>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">Email</p>
                <p className="mt-3 select-all font-display text-lg text-ocean-900">{site.contactEmail}</p>
              </Card>
            )}
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">Follow</p>
              <div className="mt-3 space-y-2">
                <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ocean-900 underline">
                  {icons.instagram} @{site.instagram.handle}
                </a>
                <a href={site.youtube.channelUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ocean-900 underline">
                  {icons.youtube} YouTube
                </a>
              </div>
            </Card>
          </aside>
        </Container>
      </section>
    </>
  );
}
