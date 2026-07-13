import { siteConfig } from "@/lib/data";
import { dictionaries } from "@/lib/i18n";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo-full.png`,
    foundingDate: String(siteConfig.founded),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressCountry: "VN",
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.youtube],
    description: dictionaries.en.site.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
