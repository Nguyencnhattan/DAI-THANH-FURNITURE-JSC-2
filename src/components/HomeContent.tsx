"use client";

import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { categoryImages, products, siteConfig } from "@/lib/data";

export function HomeContent() {
  const { t } = useLanguage();

  return (
    <>
      <Hero />

      <section className="section-pad bg-bg">
        <div className="container-narrow grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">
              {siteConfig.experienceYears} {t.home.yearsExperience}
            </p>
            <h2 className="display mt-4 text-4xl text-ivory md:text-5xl">
              {t.home.storyTitle}
            </h2>
            <div className="divider-gold mt-6" />
            <p className="mt-6 text-sm italic leading-8 text-muted md:text-base">
              “{t.aboutQuote}”
            </p>
            <p className="mt-5 text-sm leading-8 text-muted md:text-base">{t.aboutStory}</p>
            <Link href="/about" className="btn mt-8">
              {t.home.discoverMore}
            </Link>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
                alt="Dai Thanh craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 border border-line bg-bg/70 p-5 backdrop-blur-md">
                <p className="eyebrow">{t.home.since1995}</p>
                <p className="display mt-2 text-2xl gold-text">{t.home.leadingFactory}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-bg-elevated">
        <div className="container-wide grid grid-cols-2 gap-px md:grid-cols-4">
          {t.stats.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08} className="px-6 py-10 text-center md:py-14">
              <p className="display text-3xl gold-text md:text-4xl">{item.value}</p>
              <p className="mt-3 text-xs tracking-[0.22em] text-muted uppercase">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-bg">
        <div className="container-wide section-pad !pb-8">
          <Reveal>
            <p className="eyebrow">{t.home.collections}</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">{t.home.collectionsTitle}</h2>
            <p className="mt-4 max-w-2xl text-muted">{t.home.collectionsDesc}</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3">
          {t.categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={i * 0.1} className="collection-panel">
              <Link href={`/products?category=${cat.slug}`} className="absolute inset-0 z-10">
                <span className="sr-only">{cat.title}</span>
              </Link>
              <Image
                src={categoryImages[cat.slug]}
                alt={cat.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-[1] p-8">
                <p className="eyebrow">{cat.subtitle}</p>
                <h3 className="display mt-2 text-3xl text-ivory">{cat.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-muted">{cat.description}</p>
                <p className="mt-5 text-xs tracking-[0.25em] text-gold uppercase">
                  {t.home.viewMore}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-bg-elevated">
        <div className="container-wide">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow">{t.home.ourProducts}</p>
              <h2 className="display mt-3 text-4xl md:text-5xl">{t.home.featuredPieces}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/products" className="btn btn-ghost">
                {t.home.viewMoreBtn}
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.06}>
                <Link href={`/products/${product.slug}`} className="product-tile block aspect-[4/5]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="meta">
                    <p className="text-xs tracking-[0.25em] text-gold uppercase">
                      {product.category}
                    </p>
                    <h3 className="display mt-1 text-2xl">{product.name}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-bg">
        <div className="container-narrow">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">{t.home.coreValues}</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">{t.home.valuesTitle}</h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {t.values.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="border-t border-line pt-6">
                <h3 className="display text-2xl gold-text">{item.title}</h3>
                <p className="mt-4 text-sm leading-8 text-muted md:text-base">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=2000&q=80"
          alt="Catalogue inspiration"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bg/75" />
        <div className="relative section-pad">
          <Reveal className="container-narrow text-center">
            <p className="eyebrow">{t.home.catalogue}</p>
            <h2 className="display mx-auto mt-4 max-w-3xl text-4xl md:text-6xl">
              {t.home.catalogueTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted">{t.home.catalogueDesc}</p>
            <Link href="/contact" className="btn mt-8">
              {t.home.receiveCatalogue}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-bg-elevated">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow">{t.home.news}</p>
            <h2 className="display mt-3 text-4xl">{t.home.newsTitle}</h2>
          </Reveal>
          <div className="mt-10 space-y-0">
            {t.news.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.08}>
                <article className="flex flex-col gap-2 border-t border-line py-7 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="max-w-3xl text-lg leading-8 text-ivory md:text-xl">
                    {item.title}
                  </h3>
                  <span className="text-xs tracking-[0.25em] text-gold uppercase">
                    {item.date}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-bg">
        <div className="container-narrow grid gap-10 border border-line bg-bg-soft/60 p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
          <Reveal>
            <p className="eyebrow">{t.home.getInTouch}</p>
            <h2 className="display mt-3 text-3xl md:text-4xl">{t.home.contactTitle}</h2>
            <p className="mt-4 text-sm leading-8 text-muted">{siteConfig.address}</p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center gap-4">
            <a href={siteConfig.phoneHref} className="display text-2xl gold-text">
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="text-muted hover:text-gold">
              {siteConfig.email}
            </a>
            <Link href="/contact" className="btn mt-2 w-fit">
              {t.home.sendMessage}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
