import React, { useState } from "react";
import "./otherPage.css";

const faqData = [
  {
    question: "What is your return policy?",
    answer: "You can return items within 30 days of purchase with a receipt.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order is shipped, you'll receive an email with a tracking link.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes! We offer 24/7 customer support via chat and email.",
  },
  {
    question: "Can I change my shipping address?",
    answer:
      "Yes, you can update your shipping address before the order is dispatched.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, MasterCard, PayPal, Apple Pay, and Google Pay.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>
          Need help? You're in the right place. Browse our FAQs or contact
          support for more info.
        </p>
      </div>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.question}</span>
              <span className="arrow">{openIndex === index ? "−" : "+"}</span>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
