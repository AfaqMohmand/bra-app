import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bgRaggedUrl from "@/assets/white-bg-ragged.svg";

// Load Poppins font for headings
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

// Load Lato font for paragraph text
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Bra Size Calculator",
  description: "Professional bra size calculator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lato.variable} antialiased`}>
        <ScrollToTop />
        <div
          className="min-h-screen flex flex-col"
          style={{
            backgroundImage: `url(${bgRaggedUrl.src})`,
          }}
        >
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
