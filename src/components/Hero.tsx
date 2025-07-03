import React from "react";
import Image from "next/image";
import ZigZagTwo from "../assets/zigzag_two.png";
import HeroImage from "../assets/HeroImage.jpg";

const Hero = () => {
  return (
    <div className="hero-section relative overflow-hidden w-full">
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

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-10 lg:py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-4 lg:pr-8">
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-0 sm:mb-2 text-black tracking-tight">
              TRANSFORMING
              <br className="hidden xs:block" />
              <span className="xs:hidden"> </span>
              IDEAS
            </h1>
            <h2 className="hero-heading-accent text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 text-gradient">
              Into Digital Reality
            </h2>
            <p className="hero-text text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-800 max-w-lg">
              We create stunning digital experiences that captivate your
              audience. Our innovative solutions are designed to elevate your
              brand and drive meaningful results.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
              <button
                className="px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 bg-black text-white font-bold text-base sm:text-lg md:text-xl rounded-full hover:shadow-xl hover:transform hover:translate-y-[-3px] transition-all duration-300"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "1px",
                }}
              >
                GET STARTED
              </button>
              <button
                className="px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 bg-transparent border-2 border-black text-black font-bold text-base sm:text-lg md:text-xl rounded-full hover:bg-black hover:text-white transition-all duration-300 flex items-center"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "1px",
                }}
              >
                <span>WATCH VIDEO</span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ml-2"
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
          <div className="w-full md:w-1/2 relative mt-4 md:mt-0">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl mx-auto max-w-md sm:max-w-lg md:max-w-full transform hover:scale-105 transition-transform duration-500">
              <Image
                src={HeroImage}
                alt="Hero Image"
                className="w-full h-auto object-cover max-h-[700px]"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Decorative elements - responsive sizes */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-yellow-400 rounded-full opacity-70 blur-md"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-yellow-400 rounded-full opacity-50 blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
