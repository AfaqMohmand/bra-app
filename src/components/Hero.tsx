import React from "react";
import Image from "next/image";
import ZigZagTwo from "../assets/zigzag_two.png";
import HeroImage from "../assets/HeroImage.jpg";

const Hero = () => {
  return (
    <div className="hero-section relative overflow-hidden w-full" style={{ height: "50vh" }}>
      {/* Noise texture background with yellow color */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${ZigZagTwo.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
          backgroundColor: "var(--color-yellow)",
          mixBlendMode: "multiply",
        }}
      ></div>

      {/* Simple straight edge instead of wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>

      <div className="container mx-auto px-4 py-3 sm:py-4 md:py-5 lg:py-6 relative z-10 h-full">
        <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center h-full">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4 lg:pr-8">
            <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-0 sm:mb-1 text-black tracking-tight font-poppins">
              TRANSFORMING
              <br className="hidden xs:block" />
              <span className="xs:hidden"> </span>
              IDEAS
            </h1>
            <h2 className="hero-heading-accent text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3 md:mb-4 text-gradient font-poppins">
              Into Digital Reality
            </h2>
            <p className="hero-text text-sm sm:text-base md:text-lg mb-3 sm:mb-4 text-gray-800 max-w-lg font-lato">
              We create stunning digital experiences that captivate your
              audience. Our innovative solutions are designed to elevate your
              brand and drive meaningful results.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 md:mt-5">
              <button
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-black text-white font-bold text-sm sm:text-base md:text-lg rounded-full hover:shadow-xl hover:transform hover:translate-y-[-3px] transition-all duration-300 font-poppins"
              >
                GET STARTED
              </button>
              <button
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-transparent border-2 border-black text-black font-bold text-sm sm:text-base md:text-lg rounded-full hover:bg-black hover:text-white transition-all duration-300 flex items-center font-poppins"
              >
                <span>WATCH VIDEO</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Right side - Image with decorative elements */}
          <div className="w-full md:w-1/2 relative mt-2 md:mt-0">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-lg mx-auto max-w-xs sm:max-w-sm md:max-w-md transform hover:scale-105 transition-transform duration-500">
              <Image
                src={HeroImage}
                alt="Hero Image"
                className="w-full h-auto object-cover max-h-[300px]"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Decorative elements - responsive sizes */}
              <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full opacity-70 blur-md"></div>
              <div className="absolute -bottom-3 -left-3 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-yellow-400 rounded-full opacity-50 blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
