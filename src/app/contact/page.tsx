import type { Metadata } from "next";
import { ContactContent } from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Dai Thanh Furniture JSC — Quy Nhon address, hotline +84 2563 510 600, email info@daithanhfurniture.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
