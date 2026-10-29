import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { Pathway } from "@/components/Pathway";

export const metadata: Metadata = { title: "Start Here" };

export default function StartPage() {
  return (
    <>
      <PageHero
        eyebrow="Start here"
        title="Three videos. About thirty minutes. Then decide."
        text="This is the trial run. Watch each short video, think through the reflection questions (ideally with someone from your church), and when you're ready, fill out the application."
      />
      <section className="py-16">
        <Container>
          <Pathway />
        </Container>
      </section>
    </>
  );
}
