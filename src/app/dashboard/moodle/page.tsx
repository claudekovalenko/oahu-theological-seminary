import type { Metadata } from "next";
import { Button } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Moodle" };

export default function MoodlePage() {
  if (!site.moodleUrl) {
    return (
      <div className="rounded-3xl border border-dashed border-sand-300 bg-white p-10 text-center">
        <h1 className="text-2xl text-ocean-900">Moodle is not connected yet</h1>
        <p className="mt-2 text-sm text-ink-muted">
          Set <code className="rounded bg-sand-100 px-1">NEXT_PUBLIC_MOODLE_URL</code> to your Moodle site to show it here.
        </p>
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl text-ocean-900">Moodle</h1>
          <p className="mt-1 text-sm text-ink-muted">Degree coursework, grades, and submissions live in Moodle.</p>
        </div>
        <Button href={site.moodleUrl} external variant="secondary" size="sm">
          Open Moodle in a new tab
        </Button>
      </div>
      <div className="mt-6 overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-soft">
        <iframe
          src={site.moodleUrl}
          title="Moodle"
          className="h-[80vh] w-full"
          allow="fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <p className="mt-3 text-xs text-ink-muted">
        If the frame is blank, your Moodle administrator needs to enable “Allow frame embedding” (Site administration →
        Security → HTTP security) or you can use the button above instead.
      </p>
    </div>
  );
}
