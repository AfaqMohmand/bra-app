import React from "react";
import Image from "next/image";
import HeroImage from "../assets/HeroImage.png";

const Hero = () => {
  return (
    <div
      className="hero-section relative overflow-hidden w-full"
      // style={{ height: "auto", minHeight: "50vh" }}
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
          marginTop: "5px",
        }}
      ></div>

      {/* Simple straight edge instead of wave */}

      <div className="container mx-auto px-4 py-0 relative z-10 h-full">
        <div className="flex flex-row items-center h-full">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 pt-3 md:mb-0 md:pr-4 lg:pr-8">
            <h1 className="hero-heading text-[16.5px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-0 sm:mb-1 text-black tracking-tight font-poppins">
              BRA SIZE CALCULATOR
            </h1>

            <p className="hero-text text-xs sm:text-sm md:text-base lg:text-lg mb-3 sm:mb-4 text-gray-800 max-w-lg font-lato">
              Get your perfect fit with our accurate bra size calculator. Used
              by thousands of women worldwide for precise measurements.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 mx-auto">
              <Image
                src={HeroImage}
                alt="Hero Image"
                className="w-full h-auto object-cover mt-[5px]"

                priority
                // sizes="(max-width: 768px) 100vw, 50vw"
                // width={500}
                // height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
