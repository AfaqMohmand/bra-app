"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

const FAQAccordion = ({ faqs }: FAQAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-xl p-6 relative"
      style={{ borderTop: "4px solid var(--color-yellow)" }}
    >
      {/* Search bar */}
      <div
        className="bg-gray-50 rounded-xl flex items-center p-3 mb-8"
        style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}
      >
        <input
          type="text"
          placeholder="Search question here"
          className="bg-transparent w-full outline-none text-gray-700 px-2"
        />
        <button className="p-2 rounded-full hover:bg-yellow-100 transition-colors">
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {/* FAQ Items */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-b border-gray-100 last:border-0 pb-5 last:pb-0 transition-all duration-300 ${
              activeIndex === index
                ? "bg-yellow-50 rounded-lg px-4 -mx-4"
                : ""
            }`}
          >
            <button
              className="flex justify-between items-center w-full text-left py-4 rounded-lg transition-colors"
              onClick={() => toggleAccordion(index)}
            >
              <span
                className={`font-medium ${
                  activeIndex === index
                    ? "text-yellow-700"
                    : "text-gray-800"
                }`}
              >
                {faq.question}
              </span>
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full"
                style={{
                  backgroundColor:
                    activeIndex === index
                      ? "var(--color-yellow)"
                      : "#f3f4f6",
                  color: activeIndex === index ? "white" : "#4b5563",
                }}
              >
                {activeIndex === index ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </span>
            </button>
            {activeIndex === index && (
              <div className="py-3 text-gray-600 text-sm leading-relaxed animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
