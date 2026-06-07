import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";

// Headings & big editorial titles
const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// Subheadings, card titles, body text & labels
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sami Kessar — Social Media Manager & Créateur de Contenu",
  description:
    "Portfolio de Sami Kessar, Social Media Manager et Créateur de Contenu 360° avec 4+ ans d'expérience chez Chouf TV, l'une des principales chaînes nationales du Maroc.",
  keywords: [
    "Sami Kessar",
    "Social Media Manager",
    "Créateur de contenu",
    "Chouf TV",
    "Casablanca",
    "Maroc",
    "Copywriting",
    "Community Management",
  ],
  authors: [{ name: "Sami Kessar" }],
  openGraph: {
    title: "Sami Kessar — Social Media Manager & Créateur de Contenu",
    description:
      "Portfolio de Sami Kessar, Social Media Manager et Créateur de Contenu 360°.",
    type: "website",
    locale: "fr_MA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${bebas.variable} ${outfit.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <div
          className="grain-overlay"
          aria-hidden="true"
        />
        {children}
      </body>
    </html>
  );
}
