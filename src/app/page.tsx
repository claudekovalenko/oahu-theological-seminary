import Link from "next/link";
import { Button, Card, Container, Eyebrow, Pill, SectionHeading, icons } from "@/components/ui";
import { YouTube } from "@/components/YouTube";
import { InstagramSection } from "@/components/InstagramSection";
import { site } from "@/content/site";
import { degrees } from "@/content/degrees";
import { courses } from "@/content/courses";
import { pathway } from "@/content/pathway";
import { events, testimonials } from "@/content/community";

export default function HomePage() {
  const upcoming = [...events].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 2);
  const equip = courses.filter((c) => c.track === "equip").slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ocean-900 text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 90% at 85% 10%, rgba(42,148,179,.45) 0%, transparent 60%), radial-gradient(50% 70% at 10% 90%, rgba(201,162,74,.25) 0%, transparent 60%)",
          }}
        />
        <Container className="relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <Eyebrow className="text-gold-400">Aiea, Oʻahu · Hawaiʻi</Eyebrow>
            <h1 className="mt-4 text-4xl leading-[1.05] sm:text-6xl">
              Immersed in Scripture.
              <br />
              <span className="text-gold-400">Rooted in the local church.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand-200">
              {site.name} exists to glorify God by training leaders for the church in Hawaiʻi and the Pacific Rim,
              with coursework that happens in the life of your congregation, not apart from it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/start" variant="gold" size="lg">
                Start here: 3 short videos {icons.arrow}
              </Button>
              <Button href="/degrees" variant="outline" size="lg">
                Explore degrees
              </Button>
            </div>
            <dl className="mt-10 grid max-w-lg gap-4 border-t border-ocean-700 pt-6 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-sand-300">Degrees</dt>
                <dd className="mt-1 font-display text-2xl">M.A. · M.Div. · Th.M.</dd>
              </div>
              <div>
                <dt className="text-sand-300">Classes</dt>
                <dd className="mt-1 font-display text-2xl">Tuesday nights</dd>
              </div>
              <div>
                <dt className="text-sand-300">Partner</dt>
                <dd className="mt-1 font-display text-2xl">TLI since {site.partner.since}</dd>
              </div>
            </dl>
          </div>
          <div>
            <YouTube id={site.youtube.featuredVideoId} title={site.youtube.featuredVideoTitle} />
            <p className="mt-3 text-center text-xs text-sand-300">Featured: {site.youtube.featuredVideoTitle}</p>
          </div>
        </Container>
      </section>

      {/* Two doors */}
      <section className="wave-top relative -mt-px py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Two ways in"
            title="Learn with the church. Or train to lead it."
            text="OTS serves everyone from the curious church member to the future pastor. Pick the door that fits, and know that both lead to the same community."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card className="relative overflow-hidden">
              <Pill tone="lagoon">Community courses</Pill>
              <h3 className="mt-4 text-2xl text-ocean-900">For the whole church</h3>
              <p className="mt-3 text-ink-muted">
                Short, free, non-degree courses on reading the Bible, Christian doctrine, church history in the Pacific,
                and ministry skills. No prerequisites. Learn online, then discuss with people from your church.
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                {equip.map((c) => (
                  <li key={c.slug} className="flex items-center gap-2">
                    <span className="text-lagoon-600">{icons.check}</span>
                    <Link href={`/courses/${c.slug}`} className="hover:underline">
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button href="/courses" className="mt-6">
                Browse courses {icons.arrow}
              </Button>
            </Card>
            <Card tone="dark" className="relative overflow-hidden">
              <Pill tone="gold">Graduate degrees</Pill>
              <h3 className="mt-4 text-2xl">For those called to lead</h3>
              <p className="mt-3 text-sand-200">
                Accredited-track master’s degrees taught on Tuesday evenings at Aiea Heights Church, with projects
                designed to be completed in your local congregation.
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                {degrees.map((d) => (
                  <li key={d.slug} className="flex items-center gap-2">
                    <span className="text-gold-400">{icons.check}</span>
                    <Link href={`/degrees/${d.slug}`} className="hover:underline">
                      {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button href="/degrees" variant="gold" className="mt-6">
                See the degrees {icons.arrow}
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      {/* Pathway */}
      <section className="bg-sand-100 py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Start here"
            title="Three videos. Then decide."
            text="Before you apply to anything, spend thirty minutes with us. Hear the vision, see how learning works, and try a real lesson. Then, if it fits, apply."
          />
          <ol className="grid gap-4">
            {pathway.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/start#step-${s.n}`}
                  className="flex gap-5 rounded-2xl border border-sand-200 bg-white p-5 shadow-soft transition hover:border-ocean-900"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ocean-900 font-display text-xl text-gold-400">
                    {s.n}
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-lagoon-600">{s.kicker} · {s.minutes} min</span>
                    <span className="mt-1 block font-display text-xl text-ocean-900">{s.title}</span>
                    <span className="mt-1 block text-sm text-ink-muted">{s.description}</span>
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/start/apply"
                className="flex items-center justify-between rounded-2xl bg-gold-500 p-5 text-ocean-950 shadow-soft transition hover:bg-gold-400"
              >
                <span className="font-display text-xl">Then apply</span>
                {icons.arrow}
              </Link>
            </li>
          </ol>
        </Container>
      </section>

      {/* Mission quote */}
      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our conviction"
              title="A seminary that serves churches, not the other way around."
              text="We immerse students in the Holy Scriptures as understood by the historic orthodox creeds and reformational confessions, with one aim: to serve the church in Hawaiʻi and the Pacific Rim."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/about">Read the president’s letter</Button>
              <Button href="/community" variant="secondary">
                Our community
              </Button>
            </div>
          </div>
          <figure className="rounded-3xl border border-sand-200 bg-white p-8 shadow-soft">
            <blockquote className="font-display text-2xl leading-snug text-ocean-900">
              “{testimonials[0].quote}”
            </blockquote>
            <figcaption className="mt-5 text-sm text-ink-muted">
              <span className="font-semibold text-ink">{testimonials[0].name}</span> · {testimonials[0].role}
            </figcaption>
          </figure>
        </Container>
      </section>

      <InstagramSection />

      {/* Upcoming */}
      {upcoming.length > 0 && (
        <section className="bg-ocean-900 py-20 text-white">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading dark eyebrow="Upcoming" title="Come and see" text="Seminars and class nights are open to visitors. Pull up a chair." />
              <Button href="/community" variant="gold">
                All events
              </Button>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {upcoming.map((e) => (
                <div key={e.id} className="rounded-2xl border border-ocean-700 bg-ocean-800 p-6">
                  <p className="text-sm text-gold-400">
                    {new Date(e.date + "T00:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
                    {e.time ? ` · ${e.time}` : ""}
                  </p>
                  <h3 className="mt-2 text-2xl">{e.title}</h3>
                  <p className="mt-2 text-sm text-sand-200">{e.description}</p>
                  <p className="mt-4 flex items-center gap-2 text-sm text-sand-300">
                    {icons.pin} {e.location}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
