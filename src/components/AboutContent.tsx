"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/data";

export function AboutContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative min-h-[55vh] overflow-hidden pt-28">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=80"
          alt="About Dai Thanh Furniture"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/30" />
        <div className="relative container-wide flex min-h-[55vh] items-end px-5 pb-16 md:px-8">
          <Reveal>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h1 className="display mt-3 max-w-3xl text-4xl md:text-6xl">
              {siteConfig.experienceYears} {t.about.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-narrow grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="display text-3xl md:text-4xl">{t.about.storyTitle}</h2>
            <div className="divider-gold mt-6" />
            <p className="mt-6 text-sm italic leading-8 text-muted">“{t.aboutQuote}”</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm leading-8 text-muted md:text-base">{t.aboutStory}</p>
            <p className="mt-5 text-sm leading-8 text-muted md:text-base">{t.aboutExtra}</p>
            <Link href="/factory" className="btn mt-8">
              {t.about.visitFactory}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-bg-elevated">
        <div className="container-wide grid grid-cols-2 gap-px md:grid-cols-4">
          {t.stats.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08} className="px-6 py-12 text-center">
              <p className="display text-3xl gold-text">{item.value}</p>
              <p className="mt-3 text-xs tracking-[0.2em] text-muted uppercase">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow">{t.about.ourPromise}</p>
            <h2 className="display mt-3 text-4xl">{t.about.coreValues}</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {t.values.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="border border-line p-7">
                <h3 className="display text-2xl gold-text">{item.title}</h3>
                <p className="mt-4 text-sm leading-8 text-muted">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
