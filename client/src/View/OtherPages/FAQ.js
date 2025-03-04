import React, { useState } from "react";
import "./otherPage.css";

const faqData = [
    { question: "What is your return policy?", answer: "You can return items within 30 days of purchase with a receipt." },
    { question: "How do I track my order?", answer: "Once your order is shipped, you'll receive an email with a tracking link." },
    { question: "Do you offer customer support?", answer: "Yes! We offer 24/7 customer support via chat and email." },
    { question: "Can I change my shipping address?", answer: "Yes, you can update your shipping address before the order is dispatched." },
    { question: "What payment methods do you accept?", answer: "We accept Visa, MasterCard, PayPal, Apple Pay, and Google Pay." },
    { question: "How long does shipping take?", answer: "Standard shipping takes 5-7 business days, while express shipping takes 2-3 business days." },
    { question: "Do you ship internationally?", answer: "Yes, we ship to most countries. International shipping rates apply." },
    { question: "Can I cancel my order after placing it?", answer: "Orders can be canceled within 24 hours before they are processed for shipping." },
    { question: "Do you offer gift wrapping?", answer: "Yes, you can select the gift wrapping option during checkout." },
    { question: "Is my payment information secure?", answer: "Yes, we use SSL encryption to ensure your payment details are safe." },
    { question: "How can I reset my password?", answer: "Click on 'Forgot Password' on the login page and follow the instructions to reset your password." },
];


const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h3 className="faq-title">Frequently Asked Questions</h3>
            <h5>Require assistance? Here are some of our commonly asked questions!</h5>
            <p>Discover answers to common queries and find solutions to your concerns with our comprehensive list of frequently asked questions.</p>
            <div className="faq-list">
                {faqData.map((item, index) => (
                    <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
                        <button className={`${openIndex === index ? 'faq-question bgColor' : 'faq-question'}`} onClick={() => toggleAccordion(index)}>
                            {item.question}
                            <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
                        </button>
                        <div className="faq-answer">{item.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
