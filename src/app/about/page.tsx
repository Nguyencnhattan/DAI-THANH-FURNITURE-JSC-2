import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "History, production capacity, and quality commitment of Dai Thanh Furniture JSC since 1995.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
