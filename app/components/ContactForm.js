"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

/**
 * Submission path:
 *  1. If NEXT_PUBLIC_FORMSPREE_ENDPOINT is set (e.g. https://formspree.io/f/abcwxyz),
 *     the form POSTs directly to Formspree — no backend needed.
 *  2. Otherwise it falls back to the Next.js API route /api/contact
 *     (nodemailer/SMTP — see app/api/contact/route.js).
 */
const FORMSPREE = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const endpoint = FORMSPREE || "/api/contact";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || body?.errors?.[0]?.message || "Something went wrong.");
      }

      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err.message || "Could not send. Please email directly.");
    }
  }

  if (status === "ok") {
    return (
      <div className={styles.success}>
        <p className={styles.successTitle}>Thank you.</p>
        <p className="muted">
          Your message is on its way. I&rsquo;ll be in touch shortly.
        </p>
        <button className="btn btn--outline" onClick={() => setStatus("idle")}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>Name</span>
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input type="email" name="email" required autoComplete="email" />
        </label>
      </div>

      <label className={styles.field}>
        <span>Subject</span>
        <input type="text" name="subject" required />
      </label>

      <label className={styles.field}>
        <span>Message</span>
        <textarea name="message" rows={5} required />
      </label>

      <button type="submit" className="btn btn--dark" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      {status === "error" && (
        <p className={styles.error}>
          {error} You can also email{" "}
          <a href="mailto:hakiza@vestafi.africa">hakiza@vestafi.africa</a>.
        </p>
      )}
    </form>
  );
}
