// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tristan Parajes — Graphic Designer",
  description:
    "Tristan Parajes is a graphic designer based in the Philippines specialising in brand identity, editorial design and digital campaigns.",
  openGraph: {
    title: "Tristan Parajes — Graphic Designer",
    description:
      "Crafting visual identities, editorial systems and campaigns from the Philippines.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}

        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}