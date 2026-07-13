import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { factoryLines, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Factory",
  description:
    "Outdoor, Indoor, and Kitchen cabinet production lines at Dai Thanh Furniture — 20ha facility in Quy Nhon.",
  alternates: { canonical: "/factory" },
};

export default function FactoryPage() {
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
            <p className="eyebrow">Our Factory</p>
            <h1 className="display mt-3 max-w-3xl text-4xl md:text-6xl">
              Export-grade production capacity
            </h1>
            <p className="mt-4 max-w-2xl text-muted">
              Three specialized lines — Outdoor, Indoor, and Kitchen cabinets — serving
              international markets.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide space-y-20">
          {factoryLines.map((line, i) => (
            <div
              key={line.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={line.image}
                    alt={line.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="eyebrow">Production Line 0{i + 1}</p>
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
            <p className="eyebrow">Capacity</p>
            <h2 className="display mt-3 text-3xl md:text-5xl">
              ~200 × 40&apos; containers / month
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted">
              Our factory near National Highway 1A serves large orders to the US, Europe, and
              Australia. Contact Sales for a capacity sheet and brochure.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={siteConfig.phoneHref} className="btn">
                {siteConfig.phone}
              </a>
              <Link href="/contact" className="btn btn-ghost">
                Download Brochure
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
