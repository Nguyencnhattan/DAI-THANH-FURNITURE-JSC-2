import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailContent } from "@/components/ProductDetailContent";
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

  return <ProductDetailContent slug={slug} />;
}
