import { NextResponse } from "next/server";
import { getServiceSupabase } from "@/lib/supabase/server";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  church?: string;
  pastor?: string;
  serving?: string;
  interest?: string;
  education?: string;
  message?: string;
  referral?: string;
  watched?: string;
  churchConsulted?: string;
  website?: string; // honeypot
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field. Pretend success.
  if (body.website) {
    return NextResponse.json({ ok: true, message: "Thanks!" });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const church = body.church?.trim();
  const interest = body.interest?.trim();
  if (!name || !email || !church || !interest) {
    return NextResponse.json({ error: "Please fill in your name, email, church, and program." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });
  }

  const record = {
    name,
    email,
    phone: body.phone?.trim() || null,
    location: body.location?.trim() || null,
    church,
    pastor: body.pastor?.trim() || null,
    serving: body.serving?.trim() || null,
    interest,
    education: body.education?.trim() || null,
    message: body.message?.trim() || null,
    referral: body.referral?.trim() || null,
    watched_intro: body.watched === "yes",
    church_consulted: body.churchConsulted === "yes",
  };

  const results: string[] = [];

  // 1) Supabase (if configured)
  const sb = getServiceSupabase();
  if (sb) {
    const { error } = await sb.from("applications").insert(record);
    if (error) {
      console.error("Supabase insert failed", error);
      return NextResponse.json({ error: "We couldn't save your application. Please try again." }, { status: 500 });
    }
    results.push("supabase");
  }

  // 2) Webhook (Zapier / Make / Formspree / email service), if configured
  const hook = process.env.APPLICATION_WEBHOOK_URL;
  if (hook) {
    try {
      const res = await fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...record, submitted_at: new Date().toISOString() }),
      });
      if (res.ok) results.push("webhook");
      else console.error("Webhook failed", res.status);
    } catch (err) {
      console.error("Webhook error", err);
    }
  }

  if (results.length === 0) {
    // Nothing configured: log so it is at least visible in server logs.
    console.log("[application] (no storage configured)", JSON.stringify(record));
  }

  return NextResponse.json({
    ok: true,
    stored: results,
    message: "We'll be in touch by email within a few days. In the meantime, feel free to explore the community courses.",
  });
}
