"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/data";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="border border-line bg-bg-elevated p-6 md:p-10">
      <h2 className="display text-2xl">{t.form.title}</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <label className="block text-xs tracking-[0.18em] text-muted uppercase">
          {t.form.fullName}
          <input
            required
            name="name"
            className="input-field mt-2"
            placeholder={t.form.namePlaceholder}
          />
        </label>
        <label className="block text-xs tracking-[0.18em] text-muted uppercase">
          {t.form.email}
          <input
            required
            type="email"
            name="email"
            className="input-field mt-2"
            placeholder="you@company.com"
          />
        </label>
        <label className="block text-xs tracking-[0.18em] text-muted uppercase md:col-span-2">
          {t.form.company}
          <input
            name="company"
            className="input-field mt-2"
            placeholder={t.form.companyPlaceholder}
          />
        </label>
        <label className="block text-xs tracking-[0.18em] text-muted uppercase md:col-span-2">
          {t.form.message}
          <textarea
            required
            name="message"
            rows={4}
            className="input-field mt-2 resize-none"
            placeholder={t.form.messagePlaceholder}
          />
        </label>
      </div>

      <button type="submit" className="btn mt-8">
        {t.form.submit}
      </button>

      {sent && (
        <p className="mt-5 text-sm text-gold">
          {t.form.success.replace("{email}", siteConfig.email)}
        </p>
      )}
    </form>
  );
}
