"use client";

import React, { useState, useRef, useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

const FAQAccordion = ({ faqs }: FAQAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState(0); // First item open by default
  const [heights, setHeights] = useState<{ [key: number]: number }>({});
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // Measure content heights on initial render and window resize
  useEffect(() => {
    const measureHeights = () => {
      const newHeights: { [key: number]: number } = {};
      faqs.forEach((_, index) => {
        if (contentRefs.current[index]) {
          newHeights[index] = contentRefs.current[index]?.scrollHeight || 0;
        }
      });
      setHeights(newHeights);
    };

    // Measure after initial render
    measureHeights();

    // Re-measure on window resize
    window.addEventListener("resize", measureHeights);
    return () => window.removeEventListener("resize", measureHeights);
  }, [faqs]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
      {/* FAQ Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-4xl font-bold mb-2">
          <span className="text-gray-800">Frequently Asked </span>
          <span className="text-yellow-500">Questions</span>
        </h2>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="flex justify-between items-center w-full text-left px-6 py-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <span className="cursor-pointer">
                {activeIndex === index ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                )}
              </span>
            </button>
            <div
              ref={(el) => {
                contentRefs.current[index] = el;
                return undefined;
              }}
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight:
                  activeIndex === index ? `${heights[index] || 0}px` : "0",
                opacity: activeIndex === index ? 1 : 0,
              }}
            >
              <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
