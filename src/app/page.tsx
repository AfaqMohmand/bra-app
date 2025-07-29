import BraSizeCalculator from "@/components/BraSizeCalculator";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bra Size Calculator | Find Your Perfect Fit",
  description:
    "Get your accurate bra size with our professional calculator. Find the perfect fit with our easy-to-use measurement tool.",
  keywords:
    "bra size calculator, bra fitting, cup size, band size, measurement guide, perfect fit",
  openGraph: {
    title: "Bra Size Calculator | Find Your Perfect Fit",
    description: "Get your accurate bra size with our professional calculator",
    url: "https://bra-calculator.com",
    siteName: "Bra Size Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bra Size Calculator | Find Your Perfect Fit",
    description: "Get your accurate bra size with our professional calculator",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <section className="pt-10 pb-6 sm:py-12 md:py-16 container mx-auto">
          <BraSizeCalculator />
        </section>
        <FAQ />
      </main>
    </>
  );
}
