import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { StructuredData } from "@/components/StructuredData/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smartsolar.lk"),
  title: {
    default: "Smart Solar Energy | #1 Solar Panel Installation in Sri Lanka",
    template: "%s | Smart Solar Energy Sri Lanka",
  },
  description:
    "Smart Solar Energy And Electricals (PVT) LTD — Sri Lanka's trusted solar panel installation company. Residential & commercial solar systems, net metering, and renewable energy solutions island-wide.",
  keywords: [
    "solar panels Sri Lanka",
    "solar installation Sri Lanka",
    "solar energy Sri Lanka",
    "net metering Sri Lanka",
    "solar power system Sri Lanka",
    "residential solar panels Sri Lanka",
    "commercial solar installation Sri Lanka",
    "renewable energy Sri Lanka",
    "Smart Solar Energy",
    "solar panel company Sri Lanka",
    "on-grid solar system Sri Lanka",
    "solar inverter Sri Lanka",
    "best solar company Sri Lanka",
    "solar panel price Sri Lanka",
  ],
  authors: [{ name: "Smart Solar Energy And Electricals (PVT) LTD" }],
  creator: "Smart Solar Energy And Electricals (PVT) LTD",
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "https://smartsolar.lk",
    siteName: "Smart Solar Energy",
    title: "Smart Solar Energy | #1 Solar Panel Installation in Sri Lanka",
    description:
      "Sri Lanka's trusted solar panel installation company. Premium residential & commercial solar systems with net metering support.",
    images: [
      {
        url: "/smart-solar-hero-banner.png",
        width: 1200,
        height: 630,
        alt: "Smart Solar Energy — Solar Panel Installation Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Solar Energy | Solar Panel Installation Sri Lanka",
    description:
      "Premium solar panel installation for homes & businesses across Sri Lanka. Net metering, on-grid systems & expert installation.",
    images: ["/smart-solar-hero-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://smartsolar.lk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`} suppressHydrationWarning>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
