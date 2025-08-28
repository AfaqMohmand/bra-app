import BraSizeCalculator from "@/components/BraSizeCalculator";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bra Size Calculator – Find Your Perfect Band & Cup Size",
  description: "Find your perfect bra fit in seconds. Measure band and cup size with our free bra size calculator and get accurate, instant results online.",
  alternates: {
    canonical: "https://bracalculator.net",
  },
  openGraph: {
    type: "website",
    siteName: "Bra Size Calculator",
    url: "https://bracalculator.net",
    title: "Bra Size Calculator – Find Your Perfect Band & Cup Size",
    description: "Find your perfect bra fit in seconds. Measure band and cup size with our free bra size calculator and get accurate, instant results online.",
    images: [
      {
        url: "/assets/brasizecalculator.png",
        width: 1200,
        height: 630,
        alt: "Bra Size Calculator – Find Your Perfect Band & Cup Size",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bra Size Calculator – Find Your Perfect Band & Cup Size",
    description: "Find your perfect bra fit in seconds. Measure band & cup size with our free calculator for accurate, instant results online",
    images: ["/assets/brasizecalculator.png"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Bra Size Calculator",
      "url": "https://bracalculator.net",
      "description": "Find your perfect bra fit in seconds with our free online bra size calculator. Get accurate band and cup size instantly.",
      "applicationCategory": "UtilityApplication",
      "operatingSystem": "Web",
      "image": "/assets/brasizecalculator.png"
    })
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <section className="pt-10 sm:py-12 md:py-16 container mx-auto">
          <BraSizeCalculator />
        </section>
        <FAQ />
      </main>
    </>
  );
}
