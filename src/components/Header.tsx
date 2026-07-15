"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { siteConfig } from "@/lib/data";
import { navHrefs } from "@/lib/i18n";

export function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header ${scrolled || open ? "is-scrolled" : ""}`}>
      <div className="container-wide flex items-center justify-between gap-4 px-5 py-3 md:px-8 md:py-3.5">
        <Link href="/" className="relative z-20 flex shrink-0 items-center">
          <Image
            src="/logo-full.png"
            alt="Dai Thanh Furniture"
            width={160}
            height={100}
            className="h-auto w-[7.25rem] object-contain sm:w-32 md:w-36"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navHrefs.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "is-active" : ""}`}
            >
              {t.nav[link.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
          <a href={siteConfig.phoneHref} className="text-sm text-muted hover:text-gold">
            {siteConfig.phone}
          </a>
          <Link href="/contact" className="btn !px-5 !py-3 text-[0.68rem]">
            {t.common.getQuote}
          </Link>
        </div>

        <div className="relative z-20 flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            aria-label={t.common.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-px w-6 bg-gold transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span className={`h-px w-6 bg-gold transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-6 bg-gold transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-bg/95 px-5 py-6 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-5">
            {navHrefs.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link w-fit ${pathname === link.href ? "is-active" : ""}`}
              >
                {t.nav[link.key]}
              </Link>
            ))}
            <Link href="/contact" className="btn mt-2">
              {t.common.contactUs}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
