import type { Metadata } from "next";
import Link from "next/link";
import { Button, Container, PageHero, Pill, SectionHeading, icons } from "@/components/ui";
import { degrees } from "@/content/degrees";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Degrees" };

export default function DegreesPage() {
  return (
    <>
      <PageHero
        eyebrow="Graduate programs"
        title="Degrees"
        text="Three programs, one conviction: theological education belongs in the life of the local church. All classes meet Tuesday evenings at Aiea Heights Church."
      >
        <Button href="/admissions" variant="gold">
          Admissions & tuition
        </Button>
        <Button href="/start" variant="outline">
          Not sure yet? Start here
        </Button>
      </PageHero>

      <section className="py-20">
        <Container className="space-y-8">
          {degrees.map((d, i) => (
            <article
              key={d.slug}
              className="grid gap-8 rounded-3xl border border-sand-200 bg-white p-8 shadow-soft lg:grid-cols-[.9fr_1.1fr]"
            >
              <div>
                <Pill tone={i === 1 ? "gold" : "lagoon"}>{d.short}</Pill>
                <h2 className="mt-4 text-3xl text-ocean-900">{d.name}</h2>
                <p className="mt-3 text-lg text-ink-muted">{d.summary}</p>
                <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-ink-muted">Format</dt>
                    <dd className="font-medium">{d.format}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-muted">Length</dt>
                    <dd className="font-medium">{d.length}</dd>
                  </div>
                </dl>
                <Button href={`/degrees/${d.slug}`} className="mt-6">
                  Program details {icons.arrow}
                </Button>
              </div>
              <div className="rounded-2xl bg-sand-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">Who it’s for</p>
                <p className="mt-2 text-sm">{d.audience}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">Highlights</p>
                <ul className="mt-2 space-y-2 text-sm">
                  {d.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-0.5 text-lagoon-600">{icons.check}</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-sand-100 py-16">
        <Container className="grid items-center gap-8 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Tuition"
            title={`$${site.tuition.perCredit} per credit hour`}
            text={`For the ${site.tuition.year} academic year, tuition and fees are set at $${site.tuition.perCredit} per credit hour for all programs. We work hard to keep seminary affordable for people already serving in churches.`}
          />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button href="/admissions">How to apply</Button>
            <Button href={site.academicCalendarUrl} external variant="secondary">
              Academic calendar (PDF)
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="text-center">
          <p className="text-ink-muted">
            Looking for something shorter and non-degree?{" "}
            <Link href="/courses" className="font-medium text-lagoon-700 underline">
              See our community courses
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
