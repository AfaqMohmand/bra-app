import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Bra Size Calculator",
  description: "At bracalculator.net, our mission is to help women find confidence and comfort with accurate bra size calculations and fit guidance.",
  alternates: {
    canonical: "https://bracalculator.net/about",
  },
  openGraph: {
    title: "About Us – Bra Size Calculator",
    description: "At bracalculator.net, our mission is to help women find confidence and comfort with accurate bra size calculations and fit guidance.",
    url: "https://bracalculator.net/about",
    siteName: "Bra Size Calculator",
    type: "website",
    images: [
      {
        url: "/assets/about.png",
        width: 1200,
        height: 630,
        alt: "About Us – Bra Size Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us – Bra Size Calculator",
    description: "At bracalculator.net, our mission is to help women find confidence and comfort with accurate bra size calculations and fit guidance.",
    images: ["/assets/about.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Centered heading */}
          <h1 className="text-4xl font-bold mb-12 text-left md:text-center text-gray-800">
            About
          </h1>

          {/* Content section with the same text but styled like the image */}
          <div className="space-y-6 text-gray-700 max-w-3xl mx-auto">
            <p className="text-base leading-relaxed">
              Finding the correct bra size can be frustrating and confusing.
              Many women experience discomfort and uncertainty due to
              inconsistent sizing standards, resulting in bras that fit poorly
              and diminish confidence.
            </p>

            <p className="text-base leading-relaxed">
              We created our Bra Size Calculator to simplify this process. Our
              user-friendly and accurate tool helps you quickly determine your
              ideal bra size from the comfort and privacy of your home. We
              eliminate the guesswork by providing precise measurements aligned
              with international sizing standards, including US, UK, EU, Asia,
              and more. This empowers you to shop confidently online or
              in-store, knowing exactly what fits you best.
            </p>

            <p className="text-base leading-relaxed">
              Our mission is to enhance women&apos;s comfort and confidence
              through reliable sizing information. In addition to our
              calculator, we offer informative articles on essential topics like
              proper bra measurement techniques, common fitting issues,
              international size conversions, and practical advice on selecting
              bras suited to your body type and lifestyle.
            </p>

            <p className="text-base leading-relaxed">
              With our Bra Size Calculator and supportive resources, we aim to
              equip every woman with the knowledge and confidence to make
              informed decisions, ensuring comfort and a perfect fit every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
