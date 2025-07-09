import React from "react";
import FAQAccordion from "./FAQAccordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Optimizely?",
      answer:
        "Optimizely is a comprehensive software platform designed to help businesses optimize operations, enhance productivity, and drive growth. It offers customizable workflows, automation tools, and advanced analytics to support efficient processes, empowering companies to achieve scalable solutions and improve their bottom line.",
    },
    {
      question: "How does Optimizely works?",
      answer:
        "Optimizely works by providing a suite of tools that help businesses streamline their operations and make data-driven decisions. The platform includes features for A/B testing, personalization, content management, and analytics, allowing companies to optimize their digital experiences and improve customer engagement.",
    },
    {
      question: "Is Optimizely Free?",
      answer:
        "Optimizely offers various pricing tiers, including both paid plans and limited free options. The free tier provides basic functionality, while paid plans offer more advanced features and capabilities. Contact Optimizely's sales team for detailed pricing information tailored to your business needs.",
    },
    {
      question:
        "Can I create custom workflows without any technical knowledge?",
      answer:
        "Yes, Optimizely is designed with user-friendly interfaces that allow non-technical users to create and customize workflows. The platform features drag-and-drop tools and intuitive controls that make it easy to build and modify processes without requiring coding or technical expertise.",
    },
    {
      question: "Can I track the performance of my workflows?",
      answer:
        "Absolutely. Optimizely provides comprehensive analytics and reporting tools that allow you to monitor the performance of your workflows in real-time. You can track key metrics, identify bottlenecks, and make data-driven decisions to continuously improve your processes and outcomes.",
    },
  ];

  return (
    <section className="py-16">
      <FAQAccordion faqs={faqs} />
    </section>
  );
};

export default FAQ;
