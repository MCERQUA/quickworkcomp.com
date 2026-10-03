import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Contractors Choice Agency`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "workers comp for contractors",
    "same day workers comp quote",
    "ghost policy workers comp",
    "pay as you go workers comp",
    "contractor workers compensation",
    "certificate of insurance same day",
    "workers comp quote 15 minutes",
    "roofing workers comp",
    "PEO alternative workers comp",
    "workers comp audit defense",
    "contractor insurance",
    "same day COI",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Same-day workers' comp quotes and certificates for contractors — pay-as-you-go, ghost policies, annual policies, PEO alternatives, and same-day COIs. All trades. All 50 states.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: `${SITE.name} — same-day workers comp for contractors` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Same-day workers' comp for contractors. Ghost policies, pay-as-you-go, annual policies, PEO alternatives, and same-day COIs. All trades. All 50 states. 15-minute quotes.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "12220 E Riggs Road, Suite #104",
      addressLocality: "Chandler",
      addressRegion: "AZ",
      postalCode: "85249",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.2622, longitude: -111.7826 },
    employee: { "@type": "Person", name: "Josh Cotner", jobTitle: "Founder & Insurance Agent" },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "Same-Day Workers' Comp Quotes & Certificates",
      "Pay-As-You-Go Workers' Compensation",
      "Ghost Policy / Minimum Workers' Comp",
      "Contractor Workers' Compensation",
      "PEO Alternative Workers' Comp Coverage",
      "Same-Day Certificate of Insurance (COI)",
      "Standard Annual Workers' Comp Policy",
      "WC Premium Audit Defense",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
