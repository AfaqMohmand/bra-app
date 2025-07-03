"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarClientProps {
  logoSrc: string;
}

const NavbarClient = ({ logoSrc }: NavbarClientProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsMenuOpen(false); // Close menu when switching to desktop
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="w-full py-2 px-6 md:px-12 flex justify-between items-center bg-white shadow-sm relative z-20">
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
              className="px-4 py-2 text-black hover:text-yellow-500 font-medium transition-colors duration-300"
              style={{ color: "var(--color-black)" }}
            >
              Home
            </Link>
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col p-5">
            <div className="flex justify-end">
              <button
                className="text-black focus:outline-none"
                onClick={toggleMenu}
                aria-label="Close menu"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-8">
              <Link
                href="/"
                className="block py-3 text-black hover:text-yellow-500 font-medium transition-colors duration-300 border-b border-gray-200"
                style={{ color: "var(--color-black)" }}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarClient;
