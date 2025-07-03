import React from "react";
import faqImage from "../assets/faq-image.svg";
import Image from "next/image";
import FAQAccordion from "./FAQAccordion";

const FAQ = () => {
  const faqs = [
    {
      question: "About our profile?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    },
    {
      question: "News and topics?",
      answer:
        "We regularly update our blog with the latest industry news, trends, and insights. Our topics cover a wide range of subjects related to digital transformation, web development, and design innovation.",
    },
    {
      question: "How to use?",
      answer:
        "Getting started is simple. Sign up for an account, explore our dashboard, and follow the guided tutorials. If you need assistance, our support team is available 24/7 to help you navigate the platform.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of digital services including web development, UI/UX design, digital marketing, brand strategy, and ongoing maintenance and support for all your digital needs.",
    },
    {
      question: "How can I contact support?",
      answer:
        "Our support team is available via email at support@example.com, through live chat on our website, or by phone at (123) 456-7890 during business hours. We typically respond within 24 hours.",
    },
  ];

  return (
    <section className="faq-section relative overflow-hidden py-16 md:py-24">
      {/* Decorative elements */}
      <div
        className="absolute top-20 left-10 w-32 h-32 rounded-full"
        style={{
          background: "var(--color-yellow)",
          opacity: 0.1,
          filter: "blur(40px)",
        }}
      ></div>
      <div
        className="absolute bottom-40 right-10 w-40 h-40 rounded-full"
        style={{
          background: "var(--color-yellow)",
          opacity: 0.15,
          filter: "blur(50px)",
        }}
      ></div>

      {/* Curved top edge */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="hero-heading text-4xl md:text-5xl lg:text-6xl mb-2 text-gray-800">
            Frequently Asked
            <br />
            <span className="text-gradient">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto my-6 rounded-full"></div>
          <p className="hero-text text-lg text-gray-600 max-w-xl mx-auto">
            Find answers to common questions about our services and platform.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          {/* FAQ Accordion */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <FAQAccordion faqs={faqs} />
          </div>

          {/* FAQ Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Main image with shadow and border */}
              <div
                className="relative z-10 bg-white p-4 rounded-2xl shadow-xl"
                style={{
                  border: "4px solid var(--color-yellow)",
                  transform: "rotate(2deg)",
                  maxWidth: "90%",
                }}
              >
                <Image
                  src={faqImage}
                  alt="FAQ Illustration"
                  className="max-w-full h-auto rounded-xl"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-yellow-400 rounded-full opacity-30 blur-xl"></div>

              {/* FAQ text decoration */}
              <div className="absolute top-1/4 -right-10 text-9xl font-bold text-yellow-200 opacity-70 transform rotate-12">
                ?
              </div>
              <div className="absolute bottom-1/3 -left-10 text-8xl font-bold text-yellow-200 opacity-60 transform -rotate-12">
                ?
              </div>

              {/* Floating stats boxes */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg transform -rotate-6 z-20">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center mr-2">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Quick Answers</p>
                    <p className="text-sm font-bold">24/7 Support</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg transform rotate-6 z-20">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center mr-2">
                    <svg
                      className="w-4 h-4 text-white"
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
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Helpful Resources</p>
                    <p className="text-sm font-bold">100+ Articles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default FAQ;
