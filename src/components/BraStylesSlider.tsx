import React, { useState, useRef, useEffect } from "react";
import ZigZagTwo from "../assets/zigzag_two.png";

const BraStylesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  
  // Bra styles data
  const braStyles = [
    {
      id: 1,
      name: "Minimizer bras",
      image: "https://i.pinimg.com/474x/54/d0/28/54d028a92956c086d45202841bd8129c.jpg",
      description: "Reduces the projection of the bust line up to 1.5 inches"
    },
    {
      id: 2,
      name: "Non-wired bras",
      image: "https://img.drz.lazcdn.com/static/pk/p/f6d4e22ee0bf4ec8e2eb4b9a269694bd.jpg_720x720q80.jpg",
      description: "Comfortable support without underwires"
    },
    {
      id: 3,
      name: "Padded bras",
      image: "https://shyaway.static.n7.io/media/catalog/product/s/i/sinb01-sheepskin-front_2.jpg?aio=w-243;h-323;",
      description: "Added padding for shape and coverage"
    },
    {
      id: 4,
      name: "Push-Up bras",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0D7Nq_VfIKVr0RHgIzd9_noDMXLA0mtgfiQ&s",
      description: "Lifts and enhances cleavage"
    },
    {
      id: 5,
      name: "Underwired bras",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7AgJt6QSu2qf85G67gu3G5m5CZYU5arxUlQ&s",
      description: "Structured support with underwire"
    },
    {
      id: 6,
      name: "T-shirt bras",
      image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/1408879/2016/6/24/11466757415338-Tweens-Women-Bra-2651466757415171-1.jpg",
      description: "Smooth cups for a seamless look under clothing"
    },
    {
      id: 7,
      name: "Sports bras",
      image: "https://n.nordstrommedia.com/it/f3849b05-ac45-46bf-808c-eef8e3fa06f7.jpeg?h=368&w=240&dpr=2",
      description: "High-impact support for physical activities"
    },
    {
      id: 8,
      name: "Strapless bras",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImG3NDj9LAcRsnE3lc29rLXG_bY80Ub3elQ&s",
      description: "Support without straps for versatile styling"
    }
  ];

  // Items to display per view (responsive)
  const getItemsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
      return 4; // Desktop
    }
    return 4; // Default
  };

  const [itemsToShow, setItemsToShow] = useState(4);

  // Update items to show on resize
  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsToShow());
    };
    
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= braStyles.length 
        ? 0 
        : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 
        ? braStyles.length - 1 
        : prevIndex - 1
    );
  };

  // Buttons are never disabled in infinite loop mode
  const isNextDisabled = false;
  const isPrevDisabled = false;

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background with texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${ZigZagTwo})`,
          backgroundRepeat: "repeat",
          backgroundSize: "150px",
          backgroundColor: "#f5f5f5",
          mixBlendMode: "soft-light",
          opacity: 0.2,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Select Your Style</h2>
        
        <div className="relative">
          {/* Slider navigation */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className={`bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors ${
                isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isPrevDisabled}
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className={`bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors ${
                isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isNextDisabled}
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Slider container */}
          <div 
            ref={sliderRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${(currentIndex % braStyles.length) * (100 / itemsToShow)}%)`,
                width: `${(braStyles.length / itemsToShow) * 100}%` 
              }}
            >
              {braStyles.map((style) => (
                <div 
                  key={style.id} 
                  className="px-2"
                  style={{ width: `${100 / braStyles.length * itemsToShow}%` }}
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <div className="relative pb-[125%] overflow-hidden">
                      <img
                        src={style.image}
                        alt={style.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 text-center flex-grow flex flex-col justify-between">
                      <h3 className="text-lg font-medium mb-2">{style.name}</h3>
                      <p className="text-sm text-gray-600">{style.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: Math.ceil(braStyles.length / itemsToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsToShow)}
                className={`h-2 w-2 rounded-full mx-1 transition-colors ${
                  index === Math.floor((currentIndex % braStyles.length) / itemsToShow) 
                    ? "bg-yellow-500" 
                    : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BraStylesSlider;
