import type { Metadata } from "next";
import { Button, Card, Container, PageHero, Pill, SectionHeading, icons } from "@/components/ui";
import { InstagramSection } from "@/components/InstagramSection";
import { YouTube } from "@/components/YouTube";
import { communityPillars, events } from "@/content/community";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Community" };

function fmt(d: string) {
  return new Date(d + "T00:00:00").toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric", year: "numeric" });
}

export default function CommunityPage() {
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Seminary is a people, not a building"
        text="The relationships formed over Tuesday-night meals and shared study are as much a part of OTS as the coursework. Here's how to be part of it, whether or not you ever enroll."
      >
        <Button href={site.instagram.url} external variant="gold">
          {icons.instagram} Follow on Instagram
        </Button>
      </PageHero>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {communityPillars.map((p) => (
              <Card key={p.title}>
                <h3 className="text-xl text-ocean-900">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{p.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sand-100 py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Events" title="Upcoming gatherings" text="Seminars and open class nights. Everyone is welcome." />
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {sorted.map((e) => (
              <li key={e.id} className="flex flex-col rounded-2xl border border-sand-200 bg-white p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-lagoon-700">
                    {fmt(e.date)}
                    {e.time ? ` · ${e.time}` : ""}
                  </p>
                  <Pill tone="gold">{e.kind}</Pill>
                </div>
                <h3 className="mt-2 text-2xl text-ocean-900">{e.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink-muted">{e.description}</p>
                <p className="mt-4 flex items-center gap-2 text-sm text-ink-muted">
                  {icons.pin} {e.location}
                </p>
                {e.url && (
                  <Button href={e.url} external variant="secondary" size="sm" className="mt-4 self-start">
                    Details & tickets
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Watch"
            title="Hear the vision"
            text="A short film on why we're training leaders for Hawaiʻi and the Pacific, and what it looks like week to week."
          />
          <YouTube id={site.youtube.featuredVideoId} title={site.youtube.featuredVideoTitle} />
        </Container>
      </section>

      <InstagramSection />

      <section className="bg-ocean-900 py-20 text-white">
        <Container className="grid items-center gap-8 lg:grid-cols-2">
          <SectionHeading dark eyebrow="Partner with us" title="Pray. Give. Send." text="OTS is a nonprofit sustained by churches and friends who believe the Pacific needs well-trained pastors and teachers." />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button href={site.giveUrl} external variant="gold">
              Give to OTS
            </Button>
            <Button href="/contact" variant="outline">
              Get in touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
