"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/data";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80";

export function Hero() {
  const reduce = useReducedMotion();

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
            <div className="mb-8 flex items-center gap-4">
              <Image
                src="/logo-mark.png"
                alt=""
                width={72}
                height={72}
                className="float-soft h-14 w-14 object-contain md:h-16 md:w-16"
                priority
              />
              <div>
                <p className="display text-2xl tracking-[0.22em] text-ivory md:text-3xl">
                  DAI THANH
                </p>
                <p className="mt-1 text-xs tracking-[0.42em] text-gold">FURNITURE</p>
              </div>
            </div>

            <h1 className="display text-[clamp(2.4rem,6vw,4.8rem)] text-ivory">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted md:text-lg">
              Nhà sản xuất Indoor · Outdoor · Kitchen cabinets từ năm 1995 — xuất khẩu
              chất lượng Việt Nam ra thế giới.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/products" className="btn">
                Xem bộ sưu tập
              </Link>
              <Link href="/about" className="btn btn-ghost">
                Câu chuyện Đại Thành
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
          <span>Scroll</span>
          <span className="h-8 w-px bg-gradient-to-b from-gold to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
