"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { useUser } from "@/lib/auth";
import { site } from "@/content/site";
import { Container } from "../ui";

const items = [
  { href: "/dashboard", label: "My courses", exact: true },
  { href: "/dashboard/catalog", label: "Course catalog" },
  ...(site.moodleUrl ? [{ href: "/dashboard/moodle", label: "Moodle" }] : []),
];

export function DashboardShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, enabled, signOut } = useUser();

  // When auth is configured, the portal requires a session.
  useEffect(() => {
    if (enabled && !loading && !user && pathname !== "/dashboard/login") {
      router.replace("/dashboard/login");
    }
  }, [enabled, loading, user, pathname, router]);

  if (enabled && loading) {
    return (
      <Container className="py-20 text-center text-ink-muted">Loading your portal…</Container>
    );
  }

  return (
    <div className="bg-sand-50">
      {!enabled && (
        <div className="border-b border-gold-400/60 bg-gold-400/20">
          <Container className="py-2 text-center text-xs text-koa-700">
            Demo mode: progress is saved in this browser only. Connect Supabase to enable accounts.
          </Container>
        </div>
      )}
      <Container className="grid gap-8 py-10 lg:grid-cols-[220px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">Student portal</p>
          <nav className="mt-3 flex gap-1 overflow-x-auto lg:flex-col" aria-label="Portal">
            {items.map((i) => {
              const active = i.exact ? pathname === i.href : pathname.startsWith(i.href);
              return (
                <Link
                  key={i.href}
                  href={i.href}
                  className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ${
                    active ? "bg-ocean-900 text-white" : "text-ocean-900 hover:bg-sand-100"
                  }`}
                >
                  {i.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 border-t border-sand-200 pt-4 text-xs text-ink-muted">
            {user ? (
              <>
                <p className="truncate">Signed in as {user.email}</p>
                <button type="button" onClick={signOut} className="mt-1 underline">
                  Sign out
                </button>
              </>
            ) : enabled ? (
              <Link href="/dashboard/login" className="underline">
                Sign in
              </Link>
            ) : (
              <p>Guest</p>
            )}
          </div>
        </aside>
        <div className="min-w-0">{children}</div>
      </Container>
    </div>
  );
}
