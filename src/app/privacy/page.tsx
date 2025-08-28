import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Bra Size Calculator",
  description: "Read the privacy policy of bracalculator.net to understand how we handle your data with care and transparency.",
  alternates: {
    canonical: "https://bracalculator.net/privacy",
  },
  openGraph: {
    title: "Privacy Policy – Bra Size Calculator",
    description: "Read the privacy policy of bracalculator.net to understand how we handle your data with care and transparency.",
    url: "https://bracalculator.net/privacy",
    siteName: "Bra Size Calculator",
    type: "website",
    images: [
      {
        url: "/assets/privacy.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy – Bra Size Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy – Bra Size Calculator",
    description: "Read the privacy policy of bracalculator.net to understand how we handle your data with care and transparency.",
    images: ["/assets/privacy.png"],
  },
};

const PrivacyPolicy = () => {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 py-4 rounded-md">
          Privacy Policy
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-medium mb-4">Introduction</h2>
          <p className="mb-4">
            Your privacy matters to us. Our Bra Size Calculator is built with a
            strong commitment to user privacy. This Privacy Policy outlines how
            we protect your data — and to be clear, we do not collect or store
            any of it.
          </p>

          <h2 className="text-2xl font-medium mb-4 mt-8">
            What We Don&apos;t Collect
          </h2>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>We don&apos;t ask for your name, email, or contact info.</li>
            <li>We don&apos;t store the measurements you enter.</li>
            <li>
              We don&apos;t use analytics tools that track your behavior on our
              site.
            </li>
            <li>
              We don&apos;t place cookies or hidden scripts to monitor your
              activity.
            </li>
          </ul>
          <p className="mb-4">
            Everything you input stays in your browser and disappears once you
            close or refresh the page. We never see it.
          </p>

          <h2 className="text-2xl font-medium mb-4 mt-8">
            No Cookies or Tracking
          </h2>
          <p className="mb-4">
            We do not use cookies, pixels, tracking IDs, or any third-party
            analytics tools that follow you across the internet. Your session is
            100% private and anonymous.
          </p>

          <h2 className="text-2xl font-medium mb-4 mt-8">External Links</h2>
          <p className="mb-4">
            Sometimes, we may link to helpful external resources — like bra
            fitting tips, buying guides, or educational blogs. We&apos;re not
            responsible for the privacy policies or practices of those
            third-party sites. Always review their policies before sharing any
            information.
          </p>

          <h2 className="text-2xl font-medium mb-4 mt-8">Site Security</h2>
          <p className="mb-4">
            While we don&apos;t collect personal data, we still maintain a
            secure and regularly updated site. This includes HTTPS encryption
            and secure hosting environments to ensure a safe browsing
            experience.
          </p>

          <h2 className="text-2xl font-medium mb-4 mt-8">
            Children&apos;s Privacy
          </h2>
          <p className="mb-4">
            Our tool is intended for adult women. We do not knowingly target or
            collect information from anyone under the age of 13.
          </p>

          <h2 className="text-2xl font-medium mb-4 mt-8">
            Updates to this Policy
          </h2>
          <p className="mb-4">
            We may revise this policy from time to time to reflect any changes
            in the way we operate or maintain the website. Any updates will be
            published here with the revised date noted.
          </p>

          <h2 className="text-2xl font-medium mb-4 mt-8">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our privacy practices, feel free to
            reach out through our Contact page. We&apos;ll get back to you as
            soon as possible.
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Last Updated: July 29, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
