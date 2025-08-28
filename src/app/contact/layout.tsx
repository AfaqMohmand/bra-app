import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – Bra Size Calculator",
  description: "Get in touch with bracalculator.net for questions, feedback, or support. We're here to help you with accurate bra size calculations and guidance.",
  alternates: {
    canonical: "https://bracalculator.net/contact",
  },
  openGraph: {
    title: "Contact Us – Bra Size Calculator",
    description: "Get in touch with bracalculator.net for questions, feedback, or support. We're here to help you with accurate bra size calculations and guidance.",
    url: "https://bracalculator.net/contact",
    siteName: "Bra Size Calculator",
    type: "website",
    images: [
      {
        url: "/assets/contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Us – Bra Size Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us – Bra Size Calculator",
    description: "Get in touch with bracalculator.net for questions, feedback, or support. We're here to help you with accurate bra size calculations and guidance.",
    images: ["/assets/contact.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
