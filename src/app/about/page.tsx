import type { Metadata } from "next";
import Link from "next/link";
import { Button, Card, Container, PageHero, SectionHeading, icons } from "@/components/ui";
import { site } from "@/content/site";
import { confessions, creeds, marriageStatement, marriageStatementLegacyUrl } from "@/content/beliefs";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About OTS" title="Oahu Theological Seminary" text={site.description} />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <article>
            <SectionHeading eyebrow="From the President" title="A servant of the local church" />
            <div className="mt-8 space-y-4 text-lg leading-relaxed">
              <p>
                Oahu Theological Seminary exists to glorify God by immersing students in the Holy Scriptures as
                understood by the historic orthodox creeds and reformational confessions, with the aim of serving the
                church in Hawaiʻi and the Pacific Rim.
              </p>
              <p>
                In his letter, President Chris Bruno describes the seminary as a servant of the local church. OTS is very
                intentionally linked to the local churches on Oʻahu, and most of its courses are designed around
                projects that can only be completed in the context of the local church.
              </p>
              <p>
                The seminary stands on the ecumenical creeds and the confessions of the Reformation, and it invites
                churches and friends to support its work in Hawaiʻi and across the Pacific.
              </p>
            </div>
            <Link href="/faculty#chris-bruno" className="mt-6 inline-flex items-center gap-2 font-medium text-lagoon-700 hover:underline">
              About Chris Bruno {icons.arrow}
            </Link>

            <div className="mt-16">
              <SectionHeading eyebrow="Our story" title="From extension site to seminary" />
              <ol className="relative mt-8 space-y-6 border-l-2 border-sand-200 pl-6">
                {site.history.map((h) => (
                  <li key={h.year}>
                    <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-sand-50 bg-lagoon-600" />
                    <p className="font-display text-2xl text-ocean-900">{h.year}</p>
                    <p className="mt-1 text-ink-muted">{h.text}</p>
                  </li>
                ))}
              </ol>
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
              <p className="mt-1 text-sm text-ink-muted">Class periods: {site.location.classTimes.join(" and ")}</p>
              <Button href={site.location.mapsUrl} external variant="secondary" size="sm" className="mt-4">
                {icons.pin} Directions
              </Button>
            </Card>
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">Our partner</p>
              <p className="mt-3 font-display text-xl text-ocean-900">{site.partner.name}</p>
              <p className="mt-2 text-sm text-ink-muted">
                OTS has enjoyed a partnership with Training Leaders International since {site.partner.since}. TLI is a
                missional organization that seeks to strengthen the global church by training its leaders.
              </p>
              <Button href={site.partner.url} external variant="secondary" size="sm" className="mt-4">
                Visit TLI
              </Button>
            </Card>
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">Support OTS</p>
              <p className="mt-2 text-sm text-ink-muted">
                OTS is a Hawaiʻi nonprofit corporation sustained by churches and friends.
              </p>
              <Button href={site.giveUrl} external variant="gold" size="sm" className="mt-4">
                Give
              </Button>
            </Card>
          </aside>
        </Container>
      </section>

      <section id="beliefs" className="scroll-mt-20 bg-sand-100 py-20">
        <Container>
          <SectionHeading
            eyebrow="Creeds and confessions"
            title="What we confess"
            text="Faculty members and enrolled students of OTS are required to affirm the Christian faith as expressed in the traditional creeds of Christianity, and at least one of the reformational confessions below."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="text-xl text-ocean-900">The creeds</h3>
              <p className="mt-1 text-sm text-ink-muted">All of the following</p>
              <ul className="mt-4 space-y-2">
                {creeds.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="mt-1 text-lagoon-600">{icons.check}</span>
                    {c}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-xl text-ocean-900">The confessions</h3>
              <p className="mt-1 text-sm text-ink-muted">At least one of the following</p>
              <ul className="mt-4 space-y-2">
                {confessions.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="mt-1 text-lagoon-600">{icons.check}</span>
                    {c}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div id="marriage" className="mt-10 scroll-mt-20">
            <Card className="bg-sand-50">
              <h3 className="text-xl text-ocean-900">Statement on Marriage, Gender, and Sexuality</h3>
              <p className="mt-2 text-sm text-ink-muted">
                Employees, board members, and others serving OTS in any capacity agree to this statement.
              </p>
              {marriageStatement.length > 0 ? (
                <div className="mt-4 space-y-3">
                  {marriageStatement.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              ) : (
                <Button href={marriageStatementLegacyUrl} external variant="secondary" size="sm" className="mt-4">
                  Read the statement
                </Button>
              )}
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
