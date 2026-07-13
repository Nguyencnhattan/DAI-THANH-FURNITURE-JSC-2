import type { Metadata } from "next";
import { ProductsContent } from "@/components/ProductsContent";

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
  return <ProductsContent category={category} />;
}
