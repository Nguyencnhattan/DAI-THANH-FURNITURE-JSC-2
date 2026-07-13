import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Dai Thanh Furniture JSC — Quy Nhon address, hotline +84 2563 510 600, email info@daithanhfurniture.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="section-pad pt-32">
      <div className="container-narrow">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1 className="display mt-3 text-4xl md:text-6xl">Get In Touch</h1>
          <p className="mt-4 max-w-2xl text-muted">
            Connect with the Dai Thanh Furniture team for catalogues, OEM/ODM quotations, and
            production capacity details.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ul className="space-y-8">
              <li>
                <p className="eyebrow">Address</p>
                <p className="mt-3 text-sm leading-7 text-muted">{siteConfig.address}</p>
              </li>
              <li>
                <p className="eyebrow">Call Us</p>
                <a href={siteConfig.phoneHref} className="mt-3 block display text-2xl gold-text">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <p className="eyebrow">Email Us</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-3 block text-muted hover:text-gold"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <p className="eyebrow">Follow Us</p>
                <div className="mt-3 flex gap-5 text-sm text-gold">
                  <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                  <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer">
                    YouTube
                  </a>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
