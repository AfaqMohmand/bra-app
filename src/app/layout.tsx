import type { Metadata } from "next";
import { Rubik, Lato } from "next/font/google";
import Script from "next/script";
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
  description:
    "Professional bra size calculator with accurate measurements and sizing",
  keywords:
    "bra size calculator, bra fitting, cup size, band size, measurement guide",
  robots: "index, follow",
  verification: {
    google: "iPZ9hyl1Lq0O0NzbeGA9nxCQ0XVNhI1NxjNuFp5utu0",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Bra Size Calculator",
    description: "Find your perfect bra size with our professional calculator",
    url: "https://bra-calculator.com",
    siteName: "Bra Size Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bra Size Calculator",
    description: "Find your perfect bra size with our professional calculator",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Technical Essentials */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Robots tag */}
        <meta name="robots" content="index, follow" />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="iPZ9hyl1Lq0O0NzbeGA9nxCQ0XVNhI1NxjNuFp5utu0" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        

      </head>
      <body className={`${rubik.variable} ${lato.variable} antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QWVC53Y4G5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QWVC53Y4G5');
          `}
        </Script>
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
