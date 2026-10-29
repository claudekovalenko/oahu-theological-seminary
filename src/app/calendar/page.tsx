import type { Metadata } from "next";
import { Button, Container, PageHero } from "@/components/ui";
import { academicYear, terms } from "@/content/calendar";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Academic Calendar" };

export default function CalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Academic calendar"
        title="Course schedule"
        text={`All classes are held at ${site.location.venue} on Tuesday evenings, in two periods: ${site.location.classTimes.join(" and ")}.`}
      >
        <Button href={site.academicCalendarPdf} external variant="gold">
          {academicYear} calendar (PDF)
        </Button>
      </PageHero>

      <section className="py-20">
        <Container>
          <p className="max-w-3xl text-ink-muted">
            Each semester is split into two halves. Courses marked <strong>A</strong> meet in the first half,{" "}
            <strong>B</strong> in the second, and <strong>AB</strong> for the whole semester.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {terms.map((t) => (
              <section key={t.name} className="rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
                <h2 className="text-2xl text-ocean-900">{t.name}</h2>
                {t.dates && <p className="mt-1 text-sm text-ink-muted">{t.dates}</p>}
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-sand-200 text-xs uppercase tracking-wider text-ink-muted">
                        <th className="py-2 pr-3 font-semibold">Course</th>
                        <th className="py-2 pr-3 font-semibold">Session</th>
                        <th className="py-2 font-semibold">Instructor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {t.offerings.map((o) => (
                        <tr key={o.course + o.instructor} className="border-b border-sand-100 last:border-0">
                          <td className="py-2.5 pr-3 font-medium">{o.course}</td>
                          <td className="py-2.5 pr-3 text-ink-muted">{o.session ?? "—"}</td>
                          <td className="py-2.5 text-ink-muted">{o.instructor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-muted">
            Dates for 2026–2027 will be posted with the next academic calendar.
          </p>
        </Container>
      </section>
    </>
  );
}
