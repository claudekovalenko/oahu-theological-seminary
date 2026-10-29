import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, Card, Container, PageHero, Pill, SectionHeading, icons } from "@/components/ui";
import { degrees, getDegree } from "@/content/degrees";

export function generateStaticParams() {
  return degrees.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/degrees/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: getDegree(slug)?.name ?? "Degree" };
}

export default async function DegreePage({ params }: PageProps<"/degrees/[slug]">) {
  const { slug } = await params;
  const d = getDegree(slug);
  if (!d) notFound();

  return (
    <>
      <PageHero eyebrow={d.short} title={d.name} text={d.summary}>
        <Button href={`/start/apply?program=${d.slug}`} variant="gold">
          Apply {icons.arrow}
        </Button>
        <Button href="/admissions" variant="outline">
          Admissions
        </Button>
      </PageHero>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div className="min-w-0 space-y-12">
            <div className="max-w-2xl space-y-4 text-lg leading-relaxed">
              {d.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {d.prerequisites && (
              <div>
                <SectionHeading eyebrow="Before you apply" title="Who can apply" />
                <ul className="mt-6 space-y-3">
                  {d.prerequisites.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-1 text-lagoon-600">{icons.check}</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {d.concentrations && (
              <div>
                <SectionHeading eyebrow={`Concentration · ${d.concentrations.credits}`} title="Focus your study" />
                <div className="mt-5 flex flex-wrap gap-2">
                  {d.concentrations.areas.map((c) => (
                    <Pill key={c} tone="gold">
                      {c}
                    </Pill>
                  ))}
                </div>
                <p className="mt-4 max-w-2xl text-ink-muted">{d.concentrations.note}</p>
              </div>
            )}

            <div>
              <SectionHeading eyebrow="Courses" title="From the recent schedule" />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {d.courses.map((c) => (
                  <li key={c} className="flex items-center gap-3 rounded-xl border border-sand-200 bg-white px-4 py-3 text-sm">
                    <span className="text-lagoon-600">{icons.check}</span>
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-muted">
                See the{" "}
                <Link href="/calendar" className="underline">
                  academic calendar
                </Link>{" "}
                for current offerings.
              </p>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">At a glance</p>
              <dl className="mt-4 space-y-3 text-sm">
                {d.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-ink-muted">{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
              <Button href={`/start/apply?program=${d.slug}`} className="mt-6 w-full">
                Apply now
              </Button>
            </Card>
            <Card className="bg-sand-50">
              <p className="font-display text-lg text-ocean-900">Start with your church</p>
              <p className="mt-2 text-sm text-ink-muted">
                We encourage you to first meet with your local church leadership to help discern whether the program is
                a good fit for you.
              </p>
            </Card>
          </aside>
        </Container>
      </section>
    </>
  );
}
