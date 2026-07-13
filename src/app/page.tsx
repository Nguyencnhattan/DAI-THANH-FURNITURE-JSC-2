import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";
import { dictionaries } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Home",
  description: dictionaries.en.site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeContent />;
}
