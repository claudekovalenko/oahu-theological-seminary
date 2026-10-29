import { NextResponse } from "next/server";
import { getServiceSupabase } from "@/lib/supabase/server";

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (body.website) return NextResponse.json({ ok: true });

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in your name, email, and message." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "That email address doesn’t look right." }, { status: 400 });
  }

  const record = { name, email, message };
  let stored = false;

  const sb = getServiceSupabase();
  if (sb) {
    const { error } = await sb.from("messages").insert(record);
    if (error) console.error("Supabase insert failed", error);
    else stored = true;
  }

  const hook = process.env.CONTACT_WEBHOOK_URL || process.env.APPLICATION_WEBHOOK_URL;
  if (hook) {
    try {
      const res = await fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...record, submitted_at: new Date().toISOString() }),
      });
      if (res.ok) stored = true;
    } catch (err) {
      console.error("Webhook error", err);
    }
  }

  if (!stored) console.log("[contact] (no storage configured)", JSON.stringify(record));
  return NextResponse.json({ ok: true });
}
