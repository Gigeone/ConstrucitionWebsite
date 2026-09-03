import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const siteUrl = "https://momorenov.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Finéo | Rénovation intérieure & petits travaux à Nantes",
  description:
    "Finéo réalise vos petits travaux de rénovation à Nantes et ses alentours : salle de bain, cuisine, placo, peinture, parquet. Devis gratuit sous 24h.",
  keywords: [
    "rénovation intérieure Nantes",
    "petits travaux Nantes",
    "salle de bain Nantes",
    "pose cuisine Nantes",
    "placo Nantes",
    "peinture Nantes",
    "pose parquet Nantes",
    "artisan Nantes",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Finéo",
    title: "Finéo | Rénovation intérieure & petits travaux à Nantes",
    description:
      "Salle de bain, cuisine, placo, peinture, parquet : des finitions soignées à Nantes et alentours. Devis gratuit sous 24h.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finéo | Rénovation intérieure & petits travaux à Nantes",
    description:
      "Salle de bain, cuisine, placo, peinture, parquet : des finitions soignées à Nantes et alentours. Devis gratuit sous 24h.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Finéo",
  description:
    "Entreprise de rénovation intérieure et petits travaux à Nantes : salle de bain, cuisine, placo, peinture, parquet.",
  url: siteUrl,
  telephone: "+33612345678",
  email: "contact@momorenov.fr",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nantes",
    postalCode: "44000",
    addressCountry: "FR",
  },
  areaServed: [
    "Nantes",
    "Rezé",
    "Saint-Herblain",
    "Vertou",
    "Orvault",
    "Carquefou",
    "Bouguenais",
    "Couëron",
  ].map((city) => ({ "@type": "City", name: city })),
  makesOffer: [
    "Rénovation de salle de bain",
    "Pose et aménagement de cuisine",
    "Placo et cloisons",
    "Peinture intérieure",
    "Pose de parquet et sols",
    "Petits travaux de rénovation",
  ].map((service) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: service },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${figtree.variable} ${fraunces.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
