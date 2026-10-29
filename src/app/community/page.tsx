import type { Metadata } from "next";
import { Button, Card, Container, PageHero, SectionHeading, icons } from "@/components/ui";
import { InstagramSection } from "@/components/InstagramSection";
import { YouTube } from "@/components/YouTube";
import { communityPillars, events } from "@/content/community";
import { articles } from "@/content/articles";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Community" };

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Seminary is a people, not a building"
        text="OTS exists for the churches of Hawaiʻi. Here is how to be part of it, whether or not you ever enroll."
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
          <SectionHeading
            eyebrow="Seminars & events"
            title="Recent gatherings"
            text="Seminars, refresher courses, and preview nights are open to the public. New events are announced on Instagram."
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {events.map((e) => (
              <li key={e.id} className="flex flex-col rounded-2xl border border-sand-200 bg-white p-6 shadow-soft">
                <p className="text-sm font-medium text-lagoon-700">{e.when}</p>
                <h3 className="mt-2 text-xl text-ocean-900">{e.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink-muted">{e.description}</p>
                <p className="mt-4 flex items-center gap-2 text-sm text-ink-muted">
                  {icons.pin} {e.location}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Watch"
            title="Training leaders for Hawaiʻi and the Pacific"
            text="Hear the vision behind the seminary and its work across the islands."
          />
          <YouTube id={site.youtube.featuredVideoId} title={site.youtube.featuredVideoTitle} />
        </Container>
      </section>

      <section className="bg-sand-100 py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Read" title="Articles from OTS" />
            <Button href="/articles" variant="secondary">
              All articles
            </Button>
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {articles.map((a) => (
              <li key={a.title}>
                <a href={a.url} target="_blank" rel="noopener noreferrer" className="block h-full rounded-2xl border border-sand-200 bg-white p-5 shadow-soft hover:border-ocean-900">
                  <span className="text-xs font-semibold uppercase tracking-wider text-lagoon-600">{a.kind}</span>
                  <span className="mt-2 block font-display text-lg text-ocean-900">{a.title}</span>
                  <span className="mt-1 block text-sm text-ink-muted">{a.author}</span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <InstagramSection />

      <section className="bg-ocean-900 py-20 text-white">
        <Container className="grid items-center gap-8 lg:grid-cols-2">
          <SectionHeading
            dark
            eyebrow="Partner with us"
            title="Pray. Give. Send."
            text="OTS is a Hawaiʻi nonprofit sustained by churches and friends who want faithful pastors, teachers, and leaders for the islands."
          />
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
