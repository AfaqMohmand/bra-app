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
      // Check if scrolled at all - even 1px
      const isScrolled = window.scrollY > 0;
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
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.8)"
            : "transparent",
          backgroundRepeat: scrolled ? "no-repeat" : "repeat",
          backgroundSize: "200px",
          backdropFilter: scrolled ? "blur(5px)" : "none",
          boxShadow: scrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer">
              <Image
                src={logoSrc}
                alt="Logo"
                width={100}
                height={60}
                className="h-8 sm:h-9 md:h-10 w-auto"
              />
            </Link>
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
                className="px-4 py-2 text-black hover:text-yellow-400 font-medium transition-colors duration-300 font-poppins"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-black hover:text-yellow-400 font-medium transition-colors duration-300 font-poppins"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="pl-4 py-2 text-black hover:text-yellow-400 font-medium transition-colors duration-300 font-poppins"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>
      {/* Add a spacer to prevent content from hiding under the fixed navbar */}
      <div className="h-12 sm:h-14 md:h-16"></div>
    </>
  );
}
