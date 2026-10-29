import type { Metadata } from "next";
import { Button, Container, PageHero, SectionHeading } from "@/components/ui";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/content/courses";

export const metadata: Metadata = { title: "Community Courses" };

export default function CoursesPage() {
  const equip = courses.filter((c) => c.track === "equip");
  return (
    <>
      <PageHero
        eyebrow="Community courses"
        title="Training for the whole church"
        text="Short, non-degree courses for anyone who wants to grow: church members, small-group leaders, new believers, and curious friends. Learn online at your own pace, then talk it through with people from your church."
      >
        <Button href="/dashboard" variant="gold">
          Open the student portal
        </Button>
        <Button href="/degrees" variant="outline">
          Looking for a degree?
        </Button>
      </PageHero>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {equip.map((c) => (
              <CourseCard key={c.slug} course={c} href={`/courses/${c.slug}`} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sand-100 py-16">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="Watch, read, discuss, do."
            text="Every course is organized the way our degree courses are: week by week, with a short video, a reading, a discussion, and something to practice in your church. Progress is saved in the portal."
          />
        </Container>
      </section>
    </>
  );
}
