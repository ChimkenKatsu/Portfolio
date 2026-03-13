// app/layout.tsx
import "./globals.css";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "700"], 
  display: "swap" 
});

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600"], 
  display: "swap" 
});

export const metadata = {
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
    <html lang="en" className={`${playfair.className} ${inter.className}`}>
      <body>
        {children}
        {/* GSAP loaded via CDN */}
        <Script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}