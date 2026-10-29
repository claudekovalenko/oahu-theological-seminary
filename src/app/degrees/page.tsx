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
        text="Three master’s programs, each built in partnership with local churches. All classes meet Tuesday evenings at Aiea Heights Church."
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
              className="grid gap-8 rounded-3xl border border-sand-200 bg-white p-8 shadow-soft lg:grid-cols-[1.1fr_.9fr]"
            >
              <div>
                <Pill tone={i === 1 ? "gold" : "lagoon"}>{d.short}</Pill>
                <h2 className="mt-4 text-3xl text-ocean-900">{d.name}</h2>
                <p className="mt-3 text-lg text-ink-muted">{d.summary}</p>
                <Button href={`/degrees/${d.slug}`} className="mt-6">
                  Program details {icons.arrow}
                </Button>
              </div>
              <dl className="grid content-start gap-4 rounded-2xl bg-sand-50 p-6 text-sm">
                {d.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">{f.label}</dt>
                    <dd className="mt-1">{f.value}</dd>
                  </div>
                ))}
                {d.concentrations && (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">Concentrations</dt>
                    <dd className="mt-1">{d.concentrations.areas.join(", ")}</dd>
                  </div>
                )}
              </dl>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-sand-100 py-16">
        <Container className="grid items-center gap-8 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Tuition"
            title={`$${site.tuition.perCredit} per credit hour`}
            text={`For the ${site.tuition.year} school year, tuition and fees are set at the rate of $${site.tuition.perCredit} per credit hour for all programs.`}
          />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button href="/admissions">How to apply</Button>
            <Button href="/calendar" variant="secondary">
              Course schedule
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="text-center">
          <p className="text-ink-muted">
            Looking for something shorter and non-degree?{" "}
            <Link href="/courses" className="font-medium text-lagoon-700 underline">
              See community courses
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
