"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { products, siteConfig } from "@/lib/data";

type Props = {
  slug: string;
};

export function ProductDetailContent({ slug }: Props) {
  const { t } = useLanguage();
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;

  const related = products.filter((p) => p.slug !== slug).slice(0, 3);
  const description = t.productDetail.description
    .replace("{category}", product.category)
    .replace("{company}", siteConfig.legalName);

  return (
    <>
      <section className="pt-28">
        <div className="container-wide grid lg:grid-cols-2">
          <div className="relative min-h-[55vh] lg:min-h-[80vh]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center section-pad !py-16">
            <Reveal>
              <p className="eyebrow">{product.category}</p>
              <h1 className="display mt-3 text-4xl md:text-6xl">{product.name}</h1>
              <p className="mt-6 max-w-lg text-sm leading-8 text-muted md:text-base">
                {description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn">
                  {t.productDetail.requestQuote}
                </Link>
                <Link href="/products" className="btn btn-ghost">
                  {t.productDetail.allProducts}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-bg-elevated">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow">{t.productDetail.related}</p>
            <h2 className="display mt-3 text-3xl">{t.productDetail.relatedTitle}</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {related.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.08}>
                <Link href={`/products/${item.slug}`} className="product-tile block aspect-[4/5]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                  <div className="meta">
                    <h3 className="display text-xl">{item.name}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
