"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80";

export function Hero() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[100svh] overflow-hidden grain">
      <Image
        src={HERO_IMAGE}
        alt="Dai Thanh Furniture outdoor collection"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-[2] flex min-h-[100svh] items-end pb-16 pt-28 md:items-center md:pb-0">
        <div className="container-wide px-5 md:px-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-6 md:mb-8">
              <h1 className="sr-only">Dai Thanh Furniture</h1>
              {/* <Image
                src="/logo-full.png"
                alt="Dai Thanh Furniture"
                width={220}
                height={140}
                className="float-soft h-auto w-[9.5rem] object-contain sm:w-44 md:w-52"
                priority
              /> */}
            </div>

            <p className="max-w-xl text-base leading-8 text-muted md:text-lg">
              {t.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/products" className="btn">
                {t.hero.viewCollections}
              </Link>
              <Link href="/about" className="btn btn-ghost">
                {t.hero.ourStory}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-[2] hidden -translate-x-1/2 md:block"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2 text-[0.65rem] tracking-[0.3em] text-gold/80 uppercase">
          <span>{t.common.scroll}</span>
          <span className="h-8 w-px bg-gradient-to-b from-gold to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
