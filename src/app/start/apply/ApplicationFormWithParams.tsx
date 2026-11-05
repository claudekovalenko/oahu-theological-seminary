"use client";

import { useSearchParams } from "next/navigation";
import { ApplicationForm } from "@/components/ApplicationForm";

export function ApplicationFormWithParams() {
  const sp = useSearchParams();
  const program = sp.get("program") ?? undefined;
  return <ApplicationForm defaultInterest={program} />;
}
