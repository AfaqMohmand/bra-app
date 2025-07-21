import type { Metadata } from "next";
import { Rubik, Lato } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load Rubik font for headings
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
});

// Load Lato font for paragraph text
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Bra Size Calculator",
  description: "Professional bra size calculator with accurate measurements and sizing",
  keywords: "bra size calculator, bra fitting, cup size, band size, measurement guide",
  openGraph: {
    title: "Bra Size Calculator",
    description: "Find your perfect bra size with our professional calculator",
    url: "https://bra-calculator.com",
    siteName: "Bra Size Calculator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Bra Size Calculator",
    description: "Find your perfect bra size with our professional calculator"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${lato.variable} antialiased`}>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
