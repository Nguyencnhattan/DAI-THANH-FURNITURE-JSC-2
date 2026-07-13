import type { Metadata } from "next";
import { FactoryContent } from "@/components/FactoryContent";

export const metadata: Metadata = {
  title: "Factory",
  description:
    "Outdoor, Indoor, and Kitchen cabinet production lines at Dai Thanh Furniture — 20ha facility in Quy Nhon.",
  alternates: { canonical: "/factory" },
};

export default function FactoryPage() {
  return <FactoryContent />;
}
