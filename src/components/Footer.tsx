"use client";

import React, { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Sign Up */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold mb-4 uppercase">SIGN UP FOR EMAILS & TEXTS</h3>
            
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all duration-200 rounded-md"
                />
                <button
                  type="submit"
                  className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
                >
                  <span>SUBSCRIBE</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              {submitted && (
                <div className="mt-2 text-green-600 text-sm">
                  Thank you for subscribing!
                </div>
              )}
              <p className="text-xs text-gray-500 mt-2">
                By signing up, you agree to receive marketing emails and text messages.
              </p>
            </form>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </a>
              <a href="#" aria-label="Pinterest">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
                </svg>
              </a>
              <a href="#" aria-label="TikTok">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Help */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold mb-4 uppercase">HELP</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Live Chat
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Find a Store
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Orders & Returns */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold mb-4 uppercase">
              ORDERS & RETURNS
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Order Status
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Return Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="col-span-1">
            <h3 className="text-sm font-bold mb-4 uppercase">SERVICES</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Store Offer & Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  VS & PINK Creator Program
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Discover
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Get the iOS App
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Get the Android App
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Pay My Bill
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-xs text-gray-500">
          <p className="text-center mb-2">
            &copy; {currentYear} Victoria&apos;s Secret. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center text-center">
            <Link href="/terms" className="text-gray-500 hover:text-gray-700">
              Terms of Use
            </Link>
            <span className="mx-1">|</span>
            <Link href="/privacy" className="text-gray-500 hover:text-gray-700">
              Privacy
            </Link>
            <span className="mx-1">|</span>
            <Link
              href="/security"
              className="text-gray-500 hover:text-gray-700"
            >
              Security
            </Link>
            <span className="mx-1">|</span>
            <Link
              href="/accessibility"
              className="text-gray-500 hover:text-gray-700"
            >
              Accessibility
            </Link>
            <span className="mx-1">|</span>
            <Link
              href="/california-privacy"
              className="text-gray-500 hover:text-gray-700"
            >
              California Privacy Rights
            </Link>
            <span className="mx-1">|</span>
            <Link
              href="/do-not-sell"
              className="text-gray-500 hover:text-gray-700"
            >
              Do Not Sell or Share My Personal Information
            </Link>
            <span className="mx-1">|</span>
            <Link
              href="/modern-slavery"
              className="text-gray-500 hover:text-gray-700"
            >
              Modern Slavery Transparency Statement
            </Link>
            <span className="mx-1">|</span>
            <Link
              href="/ad-preferences"
              className="text-gray-500 hover:text-gray-700"
            >
              Ad Preferences
            </Link>
            <span className="mx-1">|</span>
            <Link href="/careers" className="text-gray-500 hover:text-gray-700">
              Careers
            </Link>
            <span className="mx-1">|</span>
            <Link
              href="/product-catalog"
              className="text-gray-500 hover:text-gray-700"
            >
              Product Catalog
            </Link>
            <span className="mx-1">|</span>
            <Link
              href="/site-map"
              className="text-gray-500 hover:text-gray-700"
            >
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
