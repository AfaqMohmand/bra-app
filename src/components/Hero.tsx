import React from "react";
import Image from "next/image";
import HeroImage from "../assets/HeroImage.jpg";

const Hero = () => {
  return (
    <div
      className="hero-section relative overflow-hidden w-full"
      style={{ height: "auto", minHeight: "60vh" }}
    >
      {/* Noise texture background with yellow color */}
      <div
        className="absolute inset-0"
        style={{
          // backgroundImage: `url(${ZigZagTwo.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
          backgroundColor: "var(--color-yellow)",
          mixBlendMode: "multiply",
        }}
      ></div>

      {/* Simple straight edge instead of wave */}

      <div className="container mx-auto px-4 py-3 sm:py-4 md:py-5 lg:py-6 relative z-10 h-full">
        <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center h-full">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4 lg:pr-8">
            <h1 className="hero-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-0 sm:mb-1 text-black tracking-tight font-poppins">
              PROFESSIONAL BRA SIZE CALCULATOR
            </h1>

            <p className="hero-text text-xs sm:text-sm md:text-base lg:text-lg mb-3 sm:mb-4 text-gray-800 max-w-lg font-lato">
              Get your perfect fit with our accurate bra size calculator. Used
              by thousands of women worldwide for precise measurements.
            </p>
          </div>

          {/* Right side - Image with decorative elements */}
          <div className="w-full md:w-1/2 relative mt-2 md:mt-0">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-lg mx-auto max-w-[250px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transform hover:scale-105 transition-transform duration-500">
              <Image
                src={HeroImage}
                alt="Hero Image"
                className="w-full h-auto object-cover max-h-[350px]"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                width={500}
                height={350}
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
