"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { factoryLineImages, siteConfig } from "@/lib/data";

export function FactoryContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative min-h-[55vh] overflow-hidden pt-28">
        <Image
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80"
          alt="Dai Thanh Furniture factory"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" />
        <div className="relative container-wide flex min-h-[55vh] items-end px-5 pb-16 md:px-8">
          <Reveal>
            <p className="eyebrow">{t.factory.eyebrow}</p>
            <h1 className="display mt-3 max-w-3xl text-4xl md:text-6xl">{t.factory.title}</h1>
            <p className="mt-4 max-w-2xl text-muted">{t.factory.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide space-y-20">
          {t.factoryLines.map((line, i) => (
            <div
              key={line.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={factoryLineImages[i]}
                    alt={line.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="eyebrow">
                  {t.factory.productionLine} 0{i + 1}
                </p>
                <h2 className="display mt-3 text-3xl md:text-4xl">{line.title}</h2>
                <p className="mt-5 text-sm leading-8 text-muted md:text-base">
                  {line.description}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-bg-elevated section-pad">
        <div className="container-narrow text-center">
          <Reveal>
            <p className="eyebrow">{t.factory.capacity}</p>
            <h2 className="display mt-3 text-3xl md:text-5xl">{t.factory.capacityTitle}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted">{t.factory.capacityDesc}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={siteConfig.phoneHref} className="btn">
                {siteConfig.phone}
              </a>
              <Link href="/contact" className="btn btn-ghost">
                {t.factory.downloadBrochure}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
