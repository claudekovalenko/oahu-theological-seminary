import { site } from "@/content/site";
import { Button, Container, SectionHeading, icons } from "./ui";

/**
 * Instagram is the seminary's primary social channel. Instagram does not
 * allow embedding a profile grid without their API, so this section links
 * out prominently and shows a tiled "window" in the brand palette. Replace
 * the tiles with real photos in /public/instagram/*.jpg if desired.
 */
const tiles = [
  "linear-gradient(135deg,#1b7a97,#0b2340)",
  "linear-gradient(135deg,#c9a24a,#8a4b2a)",
  "linear-gradient(135deg,#2a94b3,#15607a)",
  "linear-gradient(135deg,#0b2340,#1a416f)",
  "linear-gradient(135deg,#dcb964,#c9a24a)",
  "linear-gradient(135deg,#15607a,#061627)",
];

export function InstagramSection() {
  return (
    <section className="py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Community"
            title="Follow life at the seminary"
            text="Class nights, seminars, prayer, meals, and the people of the churches we serve. Instagram is where the day-to-day happens."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.instagram.url} external variant="primary">
              {icons.instagram} @{site.instagram.handle}
            </Button>
            <Button href={site.youtube.channelUrl} external variant="secondary">
              {icons.youtube} YouTube
            </Button>
          </div>
        </div>
        <a
          href={site.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open @${site.instagram.handle} on Instagram`}
          className="grid grid-cols-3 gap-2 rounded-3xl border border-sand-200 bg-white p-3 shadow-soft"
        >
          {tiles.map((bg, i) => (
            <span key={i} className="aspect-square rounded-xl" style={{ background: bg }} />
          ))}
        </a>
      </Container>
    </section>
  );
}
