import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Tristan Parajes — Graphic Designer",
  description: "Tristan Parajes is a graphic designer based in the Philippines specialising in brand identity, editorial design and digital campaigns.",
  openGraph: {
    title: "Tristan Parajes — Graphic Designer",
    description: "Crafting visual identities, editorial systems and campaigns from the Philippines.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {/* GSAP loaded via CDN — same as original <script src> tags in <head> */}
        <Script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
