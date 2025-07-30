import React from "react";
import FAQAccordion from "./FAQAccordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Why do women need to wear a bra?",
      answer:
        "Women wear bras to support breast tissue, improve comfort during daily activities, and provide shape under clothing. Bras can also help reduce strain on the back and shoulders, especially for larger bust sizes.",
    },
    {
      question: "How to know when you need to start wearing a bra?",
      answer:
        "You may need to start wearing a bra when your breasts begin to develop, your nipples become more visible under clothing, or you feel discomfort during movement. A bra can provide coverage, support, and help you feel more confident as your body changes.",
    },
    {
      question: "How do I calculate my bra size?",
      answer:
        "To calculate your bra size, measure under your bust to get the band size, then measure around the fullest part of your chest. Subtract the band from the bust to find the cup size. Each inch difference equals one cup size. For example, a 34 band and 37 bust would be a 34C. You can also use our bra size calculator for instant results.",
    },
    {
      question: "What is band & bust size?",
      answer:
        "Band size is the measurement around your ribcage, just under your breasts. Bust size is the measurement around the fullest part of your chest. The difference between these two measurements helps determine your bra cup size.",
    },
    {
      question: "How do I know the band & bust size of my bra?",
      answer:
        "To find your band size, measure snugly around your ribcage just under your bust. To find your bust size, measure around the fullest part of your chest. Use these measurements to determine your bra size using our bra size chart or online calculator.",
    },
    {
      question: "How do I know my breast cup size?",
      answer:
        "Measure your band and bust, then subtract the band from the bust. Each inch of difference equals one cup size such as A, B, C, or D. You can also use our calculator for accurate results.",
    },
    {
      question: "What does ABCD mean in bra size?",
      answer:
        "ABCD in bra size refers to the cup size, which represents breast volume. A is the smallest cup, followed by B, C, and D as the size increases. The cup letter is determined by the difference between your bust and band measurements.",
    },
    {
      question: "Which cup size is bigger, B or C or D?",
      answer:
        "Cup size increases with each letter, so D is bigger than C, and C is bigger than B. The larger the letter, the more breast volume the cup holds.",
    },
    {
      question: "How do you know if your bra fits?",
      answer:
        "A bra fits properly when the band sits snugly around your ribcage, the cups fully contain your breasts without gaps or spillage, and the straps stay in place without digging in. The center of the bra should lie flat against your chest, and you should feel supported and comfortable throughout the day.",
    },
    {
      question: "What happens if you wear the wrong size?",
      answer:
        "Wearing the wrong bra size can cause discomfort, back or shoulder pain, skin irritation, and poor posture. It may also lead to gaping cups, slipping straps, or tight bands that dig into your skin. A proper fit ensures better support, comfort, and appearance.",
    },
    {
      question: "How to find the right bra for your breast shape?",
      answer:
        "To find the right bra for your breast shape, consider how your breasts are positioned and how they fill the cups. Some shapes need more lift, side support, or coverage. Trying different styles like balconette, plunge, or full-coverage bras can help you discover what fits and flatters your shape best.",
    },
    {
      question: "What is the average bra size for a 25 year old?",
      answer:
        "The average bra size for a 25-year-old woman varies by country, but in the US and UK, it is typically around 34C or 36C. However, individual sizes can differ based on body shape and genetics.",
    },
    {
      question: "What is the smallest bra size?",
      answer:
        "The smallest standard bra size is usually 28AA, which has a very small band and minimal cup volume. Some brands also offer AAA cups for even smaller sizes.",
    },
  ];

  return (
    <section className="py-4 sm:py-6 md:py-8">
      <FAQAccordion faqs={faqs} />
    </section>
  );
};

export default FAQ;
