import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { products, siteConfig } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product" };

  return {
    title: product.name,
    description: `${product.name} — ${product.category} furniture by ${siteConfig.name}.`,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.name,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== slug).slice(0, 3);

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
                Sản phẩm thuộc bộ sưu tập {product.category} của {siteConfig.legalName} —
                chế tác gỗ chất lượng xuất khẩu, thiết kế hiện đại và bền vững theo chuẩn quốc tế.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn">
                  Yêu cầu báo giá
                </Link>
                <Link href="/products" className="btn btn-ghost">
                  Tất cả sản phẩm
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-bg-elevated">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow">Related</p>
            <h2 className="display mt-3 text-3xl">Bạn cũng có thể thích</h2>
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
