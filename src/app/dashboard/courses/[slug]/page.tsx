import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseViewer } from "@/components/dashboard/CourseViewer";
import { courses, getCourse } from "@/content/courses";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/dashboard/courses/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: getCourse(slug)?.title ?? "Course" };
}

export default async function DashboardCoursePage({ params }: PageProps<"/dashboard/courses/[slug]">) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();
  return <CourseViewer course={course} />;
}
