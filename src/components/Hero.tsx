import React from "react";
import HeroImage from "../assets/HeroImage.png";

const Hero = () => {
  return (
    <div
      className="hero-section relative overflow-hidden w-full mt-2 md:mt-0"
      
      // style={{ height: "auto", minHeight: "50vh" }}
    >
      {/* Noise texture background with yellow color */}
      <div
        className="absolute inset-0 mt-[8px] md:mt-0"
        style={{
          // backgroundImage: `url(${ZigZagTwo.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
          backgroundColor: "var(--color-yellow)",
          mixBlendMode: "multiply",
          
        }}
      ></div>

      {/* Simple straight edge instead of wave */}

      <div className="container mx-auto px-4 py-0 relative z-10 h-full bg-[#f2c94c]">
        <div className="flex flex-row items-center h-full">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2  md:mb-0 md:pr-4 lg:pr-8 py-[33px]">
            <h1 className="hero-heading text-[20px] md:text-4xl pb-1 lg:text-5xl xl:text-6xl mb-0 sm:mb-1 text-black tracking-tight font-poppins">
              BRA SIZE CALCULATOR
            </h1>

            <p
              className="hero-text  text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 max-w-lg font-lato"
              style={{ lineHeight: "1.2", marginBottom: "unset" }}
            >
              Get your perfect fit with our accurate bra size calculator. Used
              by thousands of women worldwide for precise measurements.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="w-full md:w-1/2 h-[250px] md:h-[450px] lg:h-[550px]" style={{backgroundImage: `url(${HeroImage.src})`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
