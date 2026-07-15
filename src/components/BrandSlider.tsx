"use client";

import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { partnerLogos } from "@/lib/partners";

export function BrandSlider() {
  const { t } = useLanguage();
  const loop = [...partnerLogos, ...partnerLogos];

  return (
    <section className="overflow-hidden border-b border-line bg-bg py-16 md:py-20">
      <Reveal>
        <h2 className="display mb-12 px-5 text-center text-2xl text-ivory md:mb-14 md:text-3xl">
          {t.home.trustedBy}{" "}
          <span className="gold-text">{t.home.trustedCount}</span>{" "}
          {t.home.trustedCompanies}
        </h2>
      </Reveal>

      <div className="brand-slider">
        <div className="brand-track">
          {loop.map((logo, i) => (
            <div className="brand-item" key={`${logo.src}-${i}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 w-auto max-w-[10rem] object-contain md:h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
