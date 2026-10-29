"use client";

import { useState, type FormEvent } from "react";
import { degrees } from "@/content/degrees";
import { usePathwayProgress } from "@/lib/progress";
import { Button, icons } from "./ui";

const interests = [
  { value: "equip", label: "Community courses (non-degree)" },
  ...degrees.map((d) => ({ value: d.slug, label: d.name })),
  { value: "unsure", label: "Not sure yet, help me discern" },
];

type State = { status: "idle" | "sending" | "done" | "error"; message?: string };

export function ApplicationForm({ defaultInterest }: { defaultInterest?: string }) {
  const [state, setState] = useState<State>({ status: "idle" });
  const { done } = usePathwayProgress();
  const watched = done.length >= 3;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState({ status: "sending" });
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong");
      setState({ status: "done", message: json.message });
      form.reset();
    } catch (err) {
      setState({ status: "error", message: err instanceof Error ? err.message : "Something went wrong" });
    }
  }

  if (state.status === "done") {
    return (
      <div className="rounded-3xl border border-lagoon-600 bg-lagoon-100 p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lagoon-600 text-white">{icons.check}</span>
        <h2 className="mt-4 text-2xl text-ocean-900">Mahalo! We received your application.</h2>
        <p className="mt-2 text-ink-muted">{state.message}</p>
        <Button href="/dashboard" className="mt-6">
          Explore the student portal
        </Button>
      </div>
    );
  }

  const field = "mt-1 w-full rounded-xl border border-sand-300 bg-white px-3 py-2.5 text-sm focus:border-lagoon-600";

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <fieldset className="grid gap-4 sm:grid-cols-2">
        <legend className="mb-2 font-display text-xl text-ocean-900">About you</legend>
        <label className="text-sm font-medium">
          Full name
          <input name="name" required className={field} autoComplete="name" />
        </label>
        <label className="text-sm font-medium">
          Email
          <input name="email" type="email" required className={field} autoComplete="email" />
        </label>
        <label className="text-sm font-medium">
          Phone
          <input name="phone" type="tel" className={field} autoComplete="tel" />
        </label>
        <label className="text-sm font-medium">
          Island / city
          <input name="location" className={field} placeholder="e.g. Aiea, Oʻahu" />
        </label>
      </fieldset>

      <fieldset className="grid gap-4 sm:grid-cols-2">
        <legend className="mb-2 font-display text-xl text-ocean-900">Your church</legend>
        <label className="text-sm font-medium">
          Church name
          <input name="church" required className={field} />
        </label>
        <label className="text-sm font-medium">
          Pastor or elder we can talk with
          <input name="pastor" className={field} />
        </label>
        <label className="text-sm font-medium sm:col-span-2">
          How are you currently serving?
          <input name="serving" className={field} placeholder="e.g. small-group leader, youth volunteer, elder" />
        </label>
      </fieldset>

      <fieldset className="grid gap-4">
        <legend className="mb-2 font-display text-xl text-ocean-900">What you’re interested in</legend>
        <label className="text-sm font-medium">
          Track or program
          <select name="interest" required defaultValue={defaultInterest ?? ""} className={field}>
            <option value="" disabled>
              Choose one
            </option>
            {interests.map((i) => (
              <option key={i.value} value={i.value}>
                {i.label}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium">
          Highest education completed
          <select name="education" className={field} defaultValue="">
            <option value="">Choose one</option>
            <option>High school</option>
            <option>Some college</option>
            <option>Bachelor’s degree</option>
            <option>Master’s degree (M.Div. or similar)</option>
            <option>Other</option>
          </select>
        </label>
        <label className="text-sm font-medium">
          Tell us a little about yourself and why you’re interested
          <textarea name="message" rows={5} className={field} />
        </label>
        <label className="text-sm font-medium">
          How did you hear about OTS?
          <input name="referral" className={field} placeholder="Instagram, a friend, my pastor…" />
        </label>
        <label className="flex items-start gap-3 text-sm">
          <input key={String(watched)} type="checkbox" name="watched" value="yes" defaultChecked={watched} className="mt-0.5 h-5 w-5 accent-lagoon-600" />
          <span>
            I’ve watched the three intro videos on the{" "}
            <a href="/start" className="underline">
              Start Here
            </a>{" "}
            page
          </span>
        </label>
        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" name="churchConsulted" value="yes" className="mt-0.5 h-5 w-5 accent-lagoon-600" />
          <span>I’ve talked with my church leadership about applying</span>
        </label>
      </fieldset>

      {state.status === "error" && (
        <p role="alert" className="rounded-xl border border-koa-600 bg-sand-100 px-4 py-3 text-sm text-koa-700">
          {state.message}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={state.status === "sending"}>
          {state.status === "sending" ? "Sending…" : "Submit application"}
        </Button>
        <p className="text-xs text-ink-muted">We’ll only use your details to follow up about OTS.</p>
      </div>
    </form>
  );
}
