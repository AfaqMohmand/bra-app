"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface NavbarLinksProps {
  logoSrc: string;
  isMobile: boolean;
  toggleMenu: () => void;
}

export default function NavbarLinks({
  logoSrc,
  isMobile,
  toggleMenu,
}: NavbarLinksProps) {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect - making the navbar transparent and blurry when scrolled
  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero section (adjust the value as needed)
      const isScrolled = window.scrollY > 300;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <nav
        className={`w-full py-3 flex justify-center items-center fixed top-0 left-0 right-0 transition-all duration-300 z-50`}
        style={{
          // backgroundImage: scrolled ? "none" : `url(${ZigZagTwo.src})`,
          backgroundRepeat: scrolled ? "no-repeat" : "repeat",
          backgroundSize: "200px",
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.7)"
            : "var(--color-yellow)",
          backdropFilter: scrolled ? "blur(3px)" : "none",
          boxShadow: scrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src={logoSrc}
              alt="Logo"
              width={40}
              height={20}
              className="h-6 md:h-8 w-auto"
            />
          </div>

          {isMobile ? (
            <button
              className="text-black focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          ) : (
            <div className="flex items-center">
              <Link
                href="/"
                className="px-4 py-2 text-black hover:text-white font-medium transition-colors duration-300 font-poppins"
              >
                Bra Size Chart
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-black hover:text-white font-medium transition-colors duration-300 font-poppins"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-black hover:text-white font-medium transition-colors duration-300 font-poppins"
              >
                Blog
              </Link>
            </div>
          )}
        </div>
      </nav>
      {/* Add a spacer to prevent content from hiding under the fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}
