"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/data";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="border border-line bg-bg-elevated p-6 md:p-10">
      <h2 className="display text-2xl">Send Message</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <label className="block text-xs tracking-[0.18em] text-muted uppercase">
          Full Name
          <input required name="name" className="input-field mt-2" placeholder="Your name" />
        </label>
        <label className="block text-xs tracking-[0.18em] text-muted uppercase">
          Email
          <input
            required
            type="email"
            name="email"
            className="input-field mt-2"
            placeholder="you@company.com"
          />
        </label>
        <label className="block text-xs tracking-[0.18em] text-muted uppercase md:col-span-2">
          Company
          <input name="company" className="input-field mt-2" placeholder="Company" />
        </label>
        <label className="block text-xs tracking-[0.18em] text-muted uppercase md:col-span-2">
          Message
          <textarea
            required
            name="message"
            rows={4}
            className="input-field mt-2 resize-none"
            placeholder="Tell us about your project..."
          />
        </label>
      </div>

      <button type="submit" className="btn mt-8">
        Send Message
      </button>

      {sent && (
        <p className="mt-5 text-sm text-gold">
          Thank you! This demo form has been received — please email {siteConfig.email} directly
          so our Sales team can respond.
        </p>
      )}
    </form>
  );
}
