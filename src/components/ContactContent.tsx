"use client";

import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/data";

export function ContactContent() {
  const { t } = useLanguage();

  return (
    <section className="section-pad pt-32">
      <div className="container-narrow">
        <Reveal>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h1 className="display mt-3 text-4xl md:text-6xl">{t.contact.title}</h1>
          <p className="mt-4 max-w-2xl text-muted">{t.contact.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ul className="space-y-8">
              <li>
                <p className="eyebrow">{t.contact.address}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{siteConfig.address}</p>
              </li>
              <li>
                <p className="eyebrow">{t.contact.callUs}</p>
                <a href={siteConfig.phoneHref} className="mt-3 block display text-2xl gold-text">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <p className="eyebrow">{t.contact.emailUs}</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-3 block text-muted hover:text-gold"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <p className="eyebrow">{t.contact.followUs}</p>
                <div className="mt-3 flex gap-5 text-sm text-gold">
                  <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                  <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer">
                    YouTube
                  </a>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
