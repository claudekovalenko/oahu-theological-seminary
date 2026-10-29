import type { Metadata } from "next";
import { DashboardShell } from "@/components/dashboard/Shell";

export const metadata: Metadata = { title: "Student Portal" };

export default function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  return <DashboardShell>{children}</DashboardShell>;
}
