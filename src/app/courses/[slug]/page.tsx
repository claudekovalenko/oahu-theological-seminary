import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button, Card, Container, PageHero, Pill, icons } from "@/components/ui";
import { activityLabels, courseActivityCount, courses, getCourse } from "@/content/courses";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: getCourse(slug)?.title ?? "Course" };
}

export default async function CoursePreviewPage({ params }: PageProps<"/courses/[slug]">) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <>
      <PageHero eyebrow={`${course.code} · ${course.level}`} title={course.title} text={course.summary}>
        <Button href={`/dashboard/courses/${course.slug}`} variant="gold">
          Start this course {icons.arrow}
        </Button>
      </PageHero>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="text-lg leading-relaxed">{course.description}</p>
            <h2 className="mt-12 text-2xl text-ocean-900">Course outline</h2>
            <ol className="mt-6 space-y-4">
              {course.sections.map((s) => (
                <li key={s.id} className="rounded-2xl border border-sand-200 bg-white p-5">
                  <h3 className="font-display text-lg text-ocean-900">{s.title}</h3>
                  {s.summary && <p className="mt-1 text-sm text-ink-muted">{s.summary}</p>}
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {s.activities.map((a) => (
                      <li key={a.id} className="flex items-center justify-between gap-3">
                        <span className="flex items-center gap-2">
                          <Pill>{activityLabels[a.type]}</Pill>
                          {a.title}
                        </span>
                        {a.minutes && <span className="text-xs text-ink-muted">{a.minutes} min</span>}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Card>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-ink-muted">Instructor</dt>
                  <dd>{course.instructor}</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Length</dt>
                  <dd>
                    {course.weeks} weeks · {courseActivityCount(course)} activities
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Cost</dt>
                  <dd>Free</dd>
                </div>
              </dl>
              <Button href={`/dashboard/courses/${course.slug}`} className="mt-6 w-full">
                Start this course
              </Button>
              <p className="mt-3 text-center text-xs text-ink-muted">Opens in the student portal</p>
            </Card>
          </aside>
        </Container>
      </section>
    </>
  );
}
