import type { Metadata } from "next";
import { Button, Card, Container, PageHero, SectionHeading, icons } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Admissions" };

const steps = [
  ["Talk with your church", "Meet with your pastor or elders. We ask every applicant to discern this with their local church leadership first."],
  ["Watch the three intro videos", "About thirty minutes total. They'll show you the vision, the model, and a real lesson."],
  ["Submit the application", "Tell us about yourself, your church, and the program you're interested in. We'll follow up within a few days."],
  ["Visit a class", "Sit in on a Tuesday evening at Aiea Heights Church and meet students and faculty."],
  ["Enroll", "Once accepted, you'll receive course registration details and access to the student portal and Moodle."],
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero eyebrow="Admissions" title="How to apply" text="Admission to OTS begins with a conversation in your church and ends with you in a classroom. Here's the path.">
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
                For the {site.tuition.year} school year, tuition and fees are set at ${site.tuition.perCredit} per credit
                hour for all programs.
              </p>
              <Button href={site.academicCalendarUrl} external variant="secondary" size="sm" className="mt-4">
                Academic calendar (PDF)
              </Button>
            </Card>
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">Community courses</p>
              <p className="mt-3 text-sm">
                Not ready for a degree? Our non-degree courses have no application and no cost. Create a portal account and start today.
              </p>
              <Button href="/courses" variant="secondary" size="sm" className="mt-4">
                Browse courses
              </Button>
            </Card>
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">Questions?</p>
              <p className="mt-3 text-sm">
                Email{" "}
                <a className="underline" href={`mailto:${site.contactEmail}`}>
                  {site.contactEmail}
                </a>{" "}
                or come by on a Tuesday evening.
              </p>
            </Card>
          </aside>
        </Container>
      </section>

      <section className="bg-sand-100 py-16">
        <Container>
          <SectionHeading align="center" eyebrow="Requirements" title="What we look for" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["A sending church", "Active membership and the support of your pastor or elders."],
              ["Readiness to study", "A bachelor's degree for master's programs; an M.Div. or equivalent for the Th.M."],
              ["A heart for the church", "A desire to serve the church in Hawaiʻi and the Pacific, wherever God leads."],
            ].map(([t, d]) => (
              <Card key={t}>
                <h3 className="text-lg text-ocean-900">{t}</h3>
                <p className="mt-2 text-sm text-ink-muted">{d}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
