import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { categories, products, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Outdoor, Indoor, and Kitchen cabinet collections by Dai Thanh Furniture — export-quality craftsmanship.",
  alternates: { canonical: "/products" },
};

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ProductsPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <>
      <section className="section-pad !pb-8 pt-32">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow">Our Products</p>
            <h1 className="display mt-3 text-4xl md:text-6xl">Dai Thanh Collections</h1>
            <p className="mt-4 max-w-2xl text-muted">
              {siteConfig.tagline}. Explore finely crafted wood product lines for the global
              market.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/products"
              className={`px-4 py-2 text-xs tracking-[0.2em] uppercase border ${
                !category ? "border-gold text-gold" : "border-line text-muted"
              }`}
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className={`px-4 py-2 text-xs tracking-[0.2em] uppercase border ${
                  category === cat.slug ? "border-gold text-gold" : "border-line text-muted"
                }`}
              >
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide grid gap-4 px-5 sm:grid-cols-2 lg:grid-cols-3 md:px-8">
          {filtered.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.05}>
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
                  <h2 className="display mt-1 text-2xl">{product.name}</h2>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
