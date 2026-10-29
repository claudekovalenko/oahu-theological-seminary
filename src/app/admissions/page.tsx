import type { Metadata } from "next";
import { Button, Card, Container, PageHero, icons } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Admissions" };

const steps = [
  [
    "Meet with your church leadership",
    "Before applying, we encourage you to meet with your local church leadership to help discern whether the program is a good fit for you.",
  ],
  ["Watch the three intro videos", "About thirty minutes in total: the vision, how classes work, and a sample lesson."],
  ["Submit the application", "Tell us about yourself, your church, and the program you are considering."],
  ["Connect with us", "We would love to connect and give you a closer look at our programs, including a visit to a Tuesday class."],
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero eyebrow="Admissions" title="How to apply" text="Admission to OTS begins with a conversation in your church.">
        <Button href="/start/apply" variant="gold">
          Start an application {icons.arrow}
        </Button>
      </PageHero>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <ol className="space-y-6">
            {steps.map(([t, d], i) => (
              <li key={t} className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ocean-900 font-display text-xl text-gold-400">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl text-ocean-900">{t}</h3>
                  <p className="mt-1 text-ink-muted">{d}</p>
                </div>
              </li>
            ))}
          </ol>

          <aside className="space-y-6">
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">Tuition & fees</p>
              <p className="mt-3 font-display text-4xl text-ocean-900">
                ${site.tuition.perCredit}
                <span className="text-lg text-ink-muted"> / credit hour</span>
              </p>
              <p className="mt-2 text-sm text-ink-muted">
                For the {site.tuition.year} school year, tuition and fees are set at the rate of ${site.tuition.perCredit}{" "}
                per credit hour for all programs.
              </p>
            </Card>
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">Doctrinal commitment</p>
              <p className="mt-3 text-sm">
                Enrolled students affirm the traditional creeds of Christianity and at least one reformational confession.
              </p>
              <Button href="/about#beliefs" variant="secondary" size="sm" className="mt-4">
                Creeds and confessions
              </Button>
            </Card>
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">Class schedule</p>
              <p className="mt-3 text-sm">{site.location.note}</p>
              <Button href="/calendar" variant="secondary" size="sm" className="mt-4">
                Academic calendar
              </Button>
            </Card>
          </aside>
        </Container>
      </section>
    </>
  );
}
