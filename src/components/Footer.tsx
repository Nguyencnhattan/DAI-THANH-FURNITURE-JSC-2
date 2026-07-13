"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/data";
import { navHrefs } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line bg-bg-elevated">
      <div className="container-wide section-pad !pb-10 !pt-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo-full.png"
                alt={siteConfig.legalName}
                width={180}
                height={90}
                className="h-auto w-40 object-contain"
              />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted">
              {t.site.description}
            </p>
            <div className="mt-6 flex gap-4 text-sm tracking-wide text-gold">
              <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer">
                YouTube
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow">{t.common.navigate}</p>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {navHrefs.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold">
                    {t.nav[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">{t.common.contact}</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-gold">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. {t.common.rights}
          </p>
          <p className="tracking-[0.2em] uppercase text-gold/70">{t.common.valuesLine}</p>
        </div>
      </div>
    </footer>
  );
}
