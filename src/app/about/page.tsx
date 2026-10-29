import type { Metadata } from "next";
import { Button, Card, Container, PageHero, SectionHeading, icons } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About OTS"
        title="A center for theological and ministry training in the Pacific"
        text="Oahu Theological Seminary works alongside local churches in Hawaiʻi for the glory of God and the strengthening of the Church in the Pacific Rim."
      />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <article className="prose-ots">
            <SectionHeading eyebrow="Letter from the President" title="Why we exist" />
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-ink">
              <p>
                Oahu Theological Seminary exists to glorify God by immersing students in the Holy Scriptures as
                understood by the historic orthodox creeds and reformational confessions, with the aim of serving the
                church in Hawaiʻi and the Pacific Rim.
              </p>
              <p>
                That last phrase matters to us. We are not trying to build an institution for its own sake. Every
                student at OTS is sent by a local church and remains embedded in it. Most of our courses are designed
                around projects that can only be completed in the context of the local church, so that what happens on
                Tuesday nights at Aiea Heights Church shows up on Sunday mornings in congregations across the islands.
              </p>
              <p>
                We believe the church in the Pacific deserves leaders who can read Scripture in its original languages,
                teach the historic faith with clarity, and shepherd people with wisdom and care. We also believe those
                leaders are best formed where they will serve.
              </p>
              <p>
                If you sense a call to deeper training, start by talking with your pastor. Then come visit a class. We
                would love to meet you.
              </p>
              <p className="pt-2 font-display text-xl text-ocean-900">
                Chris Bruno
                <br />
                <span className="text-base font-sans text-ink-muted">President · Professor of New Testament and Biblical Theology</span>
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">Where we meet</p>
              <p className="mt-3 font-display text-xl text-ocean-900">{site.location.venue}</p>
              <p className="mt-1 text-sm text-ink-muted">
                {site.location.address}
                <br />
                {site.location.city}
              </p>
              <p className="mt-3 text-sm">{site.location.note}</p>
              <Button href={site.location.mapsUrl} external variant="secondary" size="sm" className="mt-4">
                {icons.pin} Directions
              </Button>
            </Card>
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">Our partner</p>
              <p className="mt-3 font-display text-xl text-ocean-900">{site.partner.name}</p>
              <p className="mt-2 text-sm text-ink-muted">
                OTS has partnered with Training Leaders International since {site.partner.since}. TLI is a missional
                organization that seeks to strengthen the global church by training its leaders, and its Hawaiʻi and
                Pacific Islands team helped launch the seminary with a vision for a self-governed, local-church-partnered
                seminary on Oʻahu.
              </p>
              <Button href={site.partner.url} external variant="secondary" size="sm" className="mt-4">
                Visit TLI
              </Button>
            </Card>
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">What we confess</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex gap-2"><span className="text-lagoon-600">{icons.check}</span> The historic orthodox creeds</li>
                <li className="flex gap-2"><span className="text-lagoon-600">{icons.check}</span> The reformational confessions</li>
                <li className="flex gap-2"><span className="text-lagoon-600">{icons.check}</span> Scripture as the final authority</li>
              </ul>
            </Card>
          </aside>
        </Container>
      </section>

      <section className="bg-sand-100 py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="How we work"
            title="Three commitments"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Scripture first", "Students learn Greek and Hebrew and spend most of their time in the text itself."],
              ["Church-based", "Assignments are completed in the life of a congregation under the care of its leaders."],
              ["Pacific vision", "We train for Hawaiʻi and the islands beyond it, for the long-term health of the church here."],
            ].map(([t, d]) => (
              <Card key={t}>
                <h3 className="text-xl text-ocean-900">{t}</h3>
                <p className="mt-2 text-sm text-ink-muted">{d}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
