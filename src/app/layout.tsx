import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/lib/data";
import { dictionaries } from "@/lib/i18n";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display-family",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: true,
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-body-family",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: true,
});

const bootScript = `(function(){try{var r=document.documentElement;var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}r.classList.toggle('light',t==='light');r.classList.toggle('dark',t==='dark');r.style.colorScheme=t;var l=localStorage.getItem('locale');if(l!=='vi'&&l!=='en'){l='en';}r.lang=l;}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Indoor · Outdoor · Kitchen Furniture`,
    template: `%s | ${siteConfig.name}`,
  },
  description: dictionaries.en.site.description,
  keywords: [
    "Dai Thanh Furniture",
    "Đại Thành Furniture",
    "wooden furniture Vietnam",
    "outdoor furniture manufacturer",
    "indoor furniture export",
    "kitchen cabinets Vietnam",
    "patio furniture wholesaler",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["vi_VN"],
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${dictionaries.en.site.tagline}`,
    description: dictionaries.en.site.description,
    images: [
      {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
        alt: siteConfig.legalName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: dictionaries.en.site.description,
    images: ["/logo-full.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${beVietnam.variable} dark h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased">
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <ThemeProvider>
          <LanguageProvider>
            <JsonLd />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
