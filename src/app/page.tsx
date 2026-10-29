import Link from "next/link";
import { Button, Card, Container, Eyebrow, Pill, SectionHeading, icons } from "@/components/ui";
import { YouTube } from "@/components/YouTube";
import { InstagramSection } from "@/components/InstagramSection";
import { site } from "@/content/site";
import { degrees } from "@/content/degrees";
import { courses } from "@/content/courses";
import { pathway } from "@/content/pathway";
import { events } from "@/content/community";
import { faculty } from "@/content/faculty";
import { terms } from "@/content/calendar";

export default function HomePage() {
  const recent = events.slice(0, 2);
  const equip = courses.filter((c) => c.track === "equip").slice(0, 3);
  const thisTerm = terms.find((t) => t.name === "Fall 2026");

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
        <Container className="relative grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <Eyebrow className="text-gold-400">Aiea, Oʻahu · Hawaiʻi</Eyebrow>
            <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl">
              Theological and ministry training, in partnership with local churches in Hawaiʻi.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand-200">
              For the glory of God and the strengthening of the Church in the Pacific Rim.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/start" variant="gold" size="lg">
                Start here: 3 short videos {icons.arrow}
              </Button>
              <Button href="/degrees" variant="outline" size="lg">
                Explore degrees
              </Button>
            </div>
            <dl className="mt-10 grid max-w-xl gap-4 border-t border-ocean-700 pt-6 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-sand-300">Degrees</dt>
                <dd className="mt-1 font-display text-xl">M.A. · M.Div. · Th.M.</dd>
              </div>
              <div>
                <dt className="text-sand-300">Classes</dt>
                <dd className="mt-1 font-display text-xl">Tuesday evenings</dd>
              </div>
              <div>
                <dt className="text-sand-300">Tuition</dt>
                <dd className="mt-1 font-display text-xl">${site.tuition.perCredit} / credit</dd>
              </div>
            </dl>
          </div>
          <div>
            <YouTube id={site.youtube.featuredVideoId} title={site.youtube.featuredVideoTitle} />
          </div>
        </Container>
      </section>

      {/* Two doors */}
      <section className="py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Two ways in"
            title="Learn with the church, or train to lead it"
            text="OTS serves church members who want to grow in the Scriptures and those preparing to pastor, teach, and lead."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card>
              <Pill tone="lagoon">Community courses</Pill>
              <h3 className="mt-4 text-2xl text-ocean-900">For the whole church</h3>
              <p className="mt-3 text-ink-muted">
                Short, non-degree courses and seminars for church members, small-group leaders, and anyone who wants to
                go deeper. Learn online at your own pace and talk it through with people from your church.
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
            <Card tone="dark">
              <Pill tone="gold">Graduate degrees</Pill>
              <h3 className="mt-4 text-2xl">For those called to lead</h3>
              <p className="mt-3 text-sand-200">
                Master’s programs taught on Tuesday evenings at Aiea Heights Church. Most courses include projects that
                can only be completed in the context of the local church.
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
            title="Three videos, then apply"
            text="Before you apply, spend about thirty minutes with us. Hear the vision, see how classes work, and try a real lesson. Then, if it fits, fill out the application."
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
                    <span className="block text-xs font-semibold uppercase tracking-wider text-lagoon-600">
                      {s.kicker} · {s.minutes} min
                    </span>
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

      {/* Conviction */}
      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our conviction"
              title="A servant of the local church"
              text="OTS exists to glorify God by immersing students in the Holy Scriptures as understood by the historic orthodox creeds and reformational confessions, with the aim of serving the church in Hawaiʻi and the Pacific Rim."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/about">About OTS</Button>
              <Button href="/about#beliefs" variant="secondary">
                Creeds and confessions
              </Button>
            </div>
          </div>
          <ol className="relative space-y-6 border-l-2 border-sand-200 pl-6">
            {site.history.map((h) => (
              <li key={h.year}>
                <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-sand-50 bg-lagoon-600" />
                <p className="font-display text-2xl text-ocean-900">{h.year}</p>
                <p className="mt-1 text-ink-muted">{h.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Faculty + this term */}
      <section className="bg-ocean-900 py-20 text-white">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <SectionHeading dark eyebrow="Faculty" title="Pastors and scholars who serve local churches" />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {faculty.slice(0, 4).map((p) => (
                <li key={p.slug} className="rounded-2xl border border-ocean-700 bg-ocean-800 p-5">
                  <p className="font-display text-xl">{p.name}</p>
                  <p className="mt-1 text-sm text-sand-200">{p.title}</p>
                </li>
              ))}
            </ul>
            <Button href="/faculty" variant="gold" className="mt-6">
              Meet the faculty
            </Button>
          </div>
          {thisTerm && (
            <div className="rounded-3xl border border-ocean-700 bg-ocean-800 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">This term · {thisTerm.name}</p>
              <ul className="mt-4 divide-y divide-ocean-700">
                {thisTerm.offerings.map((o) => (
                  <li key={o.course + o.session} className="flex items-baseline justify-between gap-4 py-3">
                    <span className="font-display text-lg">{o.course}</span>
                    <span className="text-right text-sm text-sand-300">
                      {o.session ? `${o.session} · ` : ""}
                      {o.instructor}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-sand-300">Tuesday evenings at {site.location.venue}.</p>
              <Link href="/calendar" className="mt-2 inline-block text-sm text-gold-400 hover:underline">
                Full academic calendar
              </Link>
            </div>
          )}
        </Container>
      </section>

      <InstagramSection />

      {/* Events */}
      <section className="bg-sand-100 py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Seminars & events"
              title="Open to the whole church"
              text="OTS regularly hosts seminars and refresher courses for pastors and church members. Here are the most recent."
            />
            <Button href="/community" variant="secondary">
              All events
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {recent.map((e) => (
              <Card key={e.id}>
                <p className="text-sm text-lagoon-700">{e.when}</p>
                <h3 className="mt-2 text-2xl text-ocean-900">{e.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{e.description}</p>
                <p className="mt-4 flex items-center gap-2 text-sm text-ink-muted">
                  {icons.pin} {e.location}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
