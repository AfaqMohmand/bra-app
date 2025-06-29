import React, { useState } from "react";
import faqImage from "../assets/faq-image.svg";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // First item open by default

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
      {/* Background with curved edges and yellow gradient */}
      <div className="absolute inset-0" style={{ 
        background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,248,225,1) 100%)",
        opacity: 0.8
      }}></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full" style={{ 
        background: "var(--color-yellow)", 
        opacity: 0.1,
        filter: "blur(40px)"
      }}></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 rounded-full" style={{ 
        background: "var(--color-yellow)", 
        opacity: 0.15,
        filter: "blur(50px)"
      }}></div>
      
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 h-16 md:h-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 w-full rotate-180">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

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
            <div className="bg-white rounded-2xl shadow-xl p-6 relative" style={{ borderTop: '4px solid var(--color-yellow)' }}>
              {/* Search bar */}
              <div className="bg-gray-50 rounded-xl flex items-center p-3 mb-8" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
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
                    className={`border-b border-gray-100 last:border-0 pb-5 last:pb-0 transition-all duration-300 ${activeIndex === index ? 'bg-yellow-50 rounded-lg px-4 -mx-4' : ''}`}
                  >
                    <button
                      className="flex justify-between items-center w-full text-left py-4 rounded-lg transition-colors"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className={`font-medium ${activeIndex === index ? 'text-yellow-700' : 'text-gray-800'}`}>{faq.question}</span>
                      <span className="flex items-center justify-center w-8 h-8 rounded-full" style={{ 
                        backgroundColor: activeIndex === index ? 'var(--color-yellow)' : '#f3f4f6',
                        color: activeIndex === index ? 'white' : '#4b5563'
                      }}>
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
          </div>

          {/* FAQ Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Main image with shadow and border */}
              <div className="relative z-10 bg-white p-4 rounded-2xl shadow-xl" style={{ 
                border: '4px solid var(--color-yellow)',
                transform: 'rotate(2deg)',
                maxWidth: '90%'
              }}>
                <img
                  src={faqImage}
                  alt="FAQ Illustration"
                  className="max-w-full h-auto rounded-xl"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-yellow-400 rounded-full opacity-30 blur-xl"></div>
              
              {/* FAQ text decoration */}
              <div className="absolute top-1/4 -right-10 text-9xl font-bold text-yellow-200 opacity-70 transform rotate-12">?</div>
              <div className="absolute bottom-1/3 -left-10 text-8xl font-bold text-yellow-200 opacity-60 transform -rotate-12">?</div>
              
              {/* Floating stats boxes */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg transform -rotate-6 z-20">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center mr-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default FAQ;
