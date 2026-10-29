"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./ui";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Your message was not sent.");
      setState("done");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Your message was not sent.");
      setState("error");
    }
  }

  if (state === "done") {
    return <p className="rounded-xl border border-lagoon-500 bg-lagoon-100 p-4">Mahalo! Your message was sent. We’ll reply by email.</p>;
  }

  const field = "mt-1 w-full rounded-xl border border-sand-300 bg-white px-3 py-2.5 text-sm";
  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <label className="text-sm font-medium">
        Name
        <input id="contact-name" name="name" required className={field} autoComplete="name" />
      </label>
      <label className="text-sm font-medium">
        Email
        <input id="contact-email" name="email" type="email" required className={field} autoComplete="email" />
      </label>
      <label className="text-sm font-medium sm:col-span-2">
        Message
        <textarea id="contact-message" name="message" required rows={5} className={field} />
      </label>
      {state === "error" && <p className="text-sm text-koa-700 sm:col-span-2">{error} Please try again.</p>}
      <div className="sm:col-span-2">
        <Button type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
