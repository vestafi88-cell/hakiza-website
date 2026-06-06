import { NextResponse } from "next/server";

/**
 * Fallback contact endpoint (used only when NEXT_PUBLIC_FORMSPREE_ENDPOINT is
 * NOT set on the client). Sends mail via SMTP using nodemailer.
 *
 * Required env vars (set in Vercel → Project → Settings → Environment Variables):
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
 *   CONTACT_TO   (defaults to hakiza@vestafi.africa)
 *   CONTACT_FROM (defaults to SMTP_USER)
 *
 * If SMTP is not configured the route returns a clear 503 so the form can tell
 * the visitor to email directly.
 */
export async function POST(req) {
  let data;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message } = data || {};
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 422 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      {
        error:
          "The contact form backend is not configured yet. Please email hakiza@vestafi.africa directly.",
      },
      { status: 503 }
    );
  }

  try {
    // Lazy import so a missing/unused dependency never breaks the build.
    const nodemailer = (await import("nodemailer")).default;
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM || SMTP_USER,
      to: process.env.CONTACT_TO || "hakiza@vestafi.africa",
      replyTo: email,
      subject: `[hakizaronald.com] ${subject || "New message"}`,
      text: `From: ${name} <${email}>\nSubject: ${subject || "(none)"}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Could not send message. Please email hakiza@vestafi.africa directly." },
      { status: 500 }
    );
  }
}
