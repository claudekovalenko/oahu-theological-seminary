"use client";

import { useState, type FormEvent } from "react";
import { useUser } from "@/lib/auth";
import { Button } from "../ui";

export function Login() {
  const { enabled, signIn, user } = useUser();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      await signIn(email);
      setState("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send link");
      setState("error");
    }
  }

  if (!enabled) {
    return (
      <div className="mx-auto max-w-md rounded-3xl border border-sand-200 bg-white p-8 text-center shadow-soft">
        <h1 className="text-2xl text-ocean-900">Accounts are not enabled yet</h1>
        <p className="mt-2 text-sm text-ink-muted">The portal is running in demo mode. You can use every course without signing in.</p>
        <Button href="/dashboard" className="mt-5">
          Continue as guest
        </Button>
      </div>
    );
  }

  if (user) {
    return (
      <div className="mx-auto max-w-md rounded-3xl border border-sand-200 bg-white p-8 text-center shadow-soft">
        <h1 className="text-2xl text-ocean-900">You’re signed in</h1>
        <Button href="/dashboard" className="mt-5">
          Go to my courses
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md rounded-3xl border border-sand-200 bg-white p-8 shadow-soft">
      <h1 className="text-2xl text-ocean-900">Sign in</h1>
      <p className="mt-2 text-sm text-ink-muted">We’ll email you a magic link. No password needed.</p>
      {state === "sent" ? (
        <p className="mt-6 rounded-xl border border-lagoon-500 bg-lagoon-100 p-4 text-sm">Check your inbox for a sign-in link.</p>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <label className="block text-sm font-medium">
            Email
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-xl border border-sand-300 px-3 py-2.5 text-sm"
              autoComplete="email"
            />
          </label>
          {state === "error" && <p className="text-sm text-koa-700">{error}</p>}
          <Button type="submit" className="w-full" disabled={state === "sending"}>
            {state === "sending" ? "Sending…" : "Send magic link"}
          </Button>
        </form>
      )}
    </div>
  );
}
