import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Momo Renov' | Rénovation intérieure & petits travaux à Nantes",
  description:
    "Momo Renov' réalise vos petits travaux de rénovation à Nantes et ses alentours : salle de bain, cuisine, placo, peinture, parquet. Devis gratuit sous 24h.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${figtree.variable} ${fraunces.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
