import type { Metadata } from "next";
import { Container, PageHero, Pill } from "@/components/ui";
import { faculty } from "@/content/faculty";

export const metadata: Metadata = { title: "Faculty" };

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function FacultyPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet our team"
        title="Faculty"
        text="OTS faculty are pastors and scholars who serve local churches in Hawaiʻi while teaching Scripture, theology, and ministry on Tuesday evenings."
      />
      <section className="py-20">
        <Container className="space-y-6">
          {faculty.map((p) => (
            <article
              key={p.slug}
              id={p.slug}
              className="grid scroll-mt-24 gap-6 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft sm:grid-cols-[96px_1fr] sm:p-8"
            >
              <div
                className="flex h-24 w-24 items-center justify-center rounded-full bg-ocean-900 font-display text-3xl text-gold-400"
                aria-hidden="true"
              >
                {initials(p.name)}
              </div>
              <div className="min-w-0">
                <h2 className="text-2xl text-ocean-900">{p.name}</h2>
                <p className="mt-1 font-medium text-lagoon-700">{p.title}</p>
                {p.degrees && <p className="mt-1 text-sm text-ink-muted">{p.degrees}</p>}
                {p.bio.length > 0 && (
                  <div className="mt-4 max-w-3xl space-y-3 leading-relaxed">
                    {p.bio.map((b) => (
                      <p key={b}>{b}</p>
                    ))}
                  </div>
                )}
                {p.teaches && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.teaches.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
