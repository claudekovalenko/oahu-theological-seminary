import type { Metadata } from "next";
import { Suspense } from "react";
import { Card, Container, PageHero } from "@/components/ui";
import { ApplicationForm } from "@/components/ApplicationForm";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Apply" };

async function Form({ searchParams }: Pick<PageProps<"/start/apply">, "searchParams">) {
  const sp = await searchParams;
  const program = typeof sp.program === "string" ? sp.program : undefined;
  return <ApplicationForm defaultInterest={program} />;
}

export default function ApplyPage(props: PageProps<"/start/apply">) {
  return (
    <>
      <PageHero
        eyebrow="Application"
        title="Apply to Oahu Theological Seminary"
        text="One form for every track, from free community courses to the Th.M. Tell us about yourself and we'll follow up to talk through next steps."
      />
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-3xl border border-sand-200 bg-white p-6 shadow-soft sm:p-8">
            <Suspense fallback={<ApplicationForm />}>
              <Form searchParams={props.searchParams} />
            </Suspense>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">What happens next</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
                <li>We read your application and reply by email within a few days.</li>
                <li>We set up a short conversation, usually including your pastor.</li>
                <li>You visit a Tuesday class at {site.location.venue}.</li>
                <li>If it’s a fit, we walk you through enrollment and portal access.</li>
              </ol>
            </Card>
            <Card className="bg-sand-50">
              <p className="font-display text-lg text-ocean-900">No pressure</p>
              <p className="mt-2 text-sm text-ink-muted">
                Applying starts a conversation. Plenty of people begin with a community course and move into a degree
                later, and that’s exactly how we hope it works.
              </p>
            </Card>
          </aside>
        </Container>
      </section>
    </>
  );
}
