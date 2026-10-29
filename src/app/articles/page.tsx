import type { Metadata } from "next";
import { Container, PageHero, Pill, icons } from "@/components/ui";
import { articles } from "@/content/articles";

export const metadata: Metadata = { title: "Articles" };

export default function ArticlesPage() {
  return (
    <>
      <PageHero eyebrow="Articles & blog" title="Writing from OTS" text="Articles, blog posts, and prayer letters from the seminary’s faculty." />
      <section className="py-20">
        <Container>
          <ul className="divide-y divide-sand-200 rounded-3xl border border-sand-200 bg-white shadow-soft">
            {articles.map((a) => (
              <li key={a.title}>
                <a href={a.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-6 p-6 hover:bg-sand-50">
                  <span>
                    <Pill tone="lagoon">{a.kind}</Pill>
                    <span className="mt-2 block font-display text-xl text-ocean-900">{a.title}</span>
                    <span className="mt-1 block text-sm text-ink-muted">{a.author}</span>
                  </span>
                  <span className="text-ocean-900">{icons.arrow}</span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
