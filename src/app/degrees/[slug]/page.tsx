import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button, Card, Container, PageHero, Pill, SectionHeading, icons } from "@/components/ui";
import { degrees, getDegree } from "@/content/degrees";
import { site } from "@/content/site";

export function generateStaticParams() {
  return degrees.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/degrees/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const d = getDegree(slug);
  return { title: d?.name ?? "Degree" };
}

export default async function DegreePage({ params }: PageProps<"/degrees/[slug]">) {
  const { slug } = await params;
  const d = getDegree(slug);
  if (!d) notFound();

  return (
    <>
      <PageHero eyebrow={d.short} title={d.name} text={d.summary}>
        <Button href="/start/apply" variant="gold">
          Apply {icons.arrow}
        </Button>
        <Button href="/admissions" variant="outline">
          Admissions
        </Button>
      </PageHero>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div className="space-y-10">
            <div className="space-y-4 text-lg leading-relaxed">
              {d.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {d.concentrations && (
              <div>
                <SectionHeading eyebrow="Optional concentration" title="Nine credit hours in one area" />
                <div className="mt-5 flex flex-wrap gap-2">
                  {d.concentrations.map((c) => (
                    <Pill key={c} tone="gold">
                      {c}
                    </Pill>
                  ))}
                </div>
              </div>
            )}

            <div>
              <SectionHeading eyebrow="Sample courses" title="What you'll study" />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {d.sampleCourses.map((c) => (
                  <li key={c} className="flex items-center gap-3 rounded-xl border border-sand-200 bg-white px-4 py-3 text-sm">
                    <span className="text-lagoon-600">{icons.check}</span>
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-muted">
                Current offerings and dates are listed in the{" "}
                <a href={site.academicCalendarUrl} target="_blank" rel="noopener noreferrer" className="underline">
                  academic calendar
                </a>
                .
              </p>
            </div>

            <div>
              <SectionHeading eyebrow="Outcomes" title="Graduates will be able to" />
              <ol className="mt-6 space-y-3">
                {d.outcomes.map((o, i) => (
                  <li key={o} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ocean-900 font-display text-gold-400">
                      {i + 1}
                    </span>
                    <span className="pt-1">{o}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">At a glance</p>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-ink-muted">Who it’s for</dt>
                  <dd>{d.audience}</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Format</dt>
                  <dd>{d.format}</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Length</dt>
                  <dd>{d.length}</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Tuition</dt>
                  <dd>${site.tuition.perCredit} per credit hour ({site.tuition.year})</dd>
                </div>
              </dl>
              <Button href="/start/apply" className="mt-6 w-full">
                Apply now
              </Button>
            </Card>
            <Card className="bg-sand-50">
              <p className="font-display text-lg text-ocean-900">Talk with your pastor first</p>
              <p className="mt-2 text-sm text-ink-muted">
                We ask every applicant to meet with their local church leadership to help discern whether the program is
                a good fit. It’s the first step of the application.
              </p>
            </Card>
          </aside>
        </Container>
      </section>
    </>
  );
}
