import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the benefits of working in the cloud?",
      answer:
        "In the cloud, you have access to your business data anywhere with an internet connection, on any device. All your data is in one place so you’ll always have access to the latest data even with multiple collaborators like your bookkeeper or your accountant.",
    },
    {
      question:
        "I use QuickBooks Desktop. How do I know if QuickBooks Online is right for me?",
      answer:
        "QuickBooks Online is great for businesses who need access to their business data from anywhere and real-time collaboration. Move your accounting online to take advantage of automatic data backup, live insights from your accountant, automated workflows to reduce errors and increase efficiency, and reports that are tailored to your business.",
    },
    {
      question:
        "How easy is it to migrate from QuickBooks Desktop to QuickBooks Online?",
      answer:
        "We’re here to make migrating your desktop data and getting to know QuickBooks Online as seamless as possible. Easily do it yourself, or get help from a specialist if you have questions. We also offer expert-led webinars, easy-to-use guides, and free phone and chat support. Sign up for QuickBooks Online on this page or call 1-833-207-4559 to hear about a limited-time offer.",
    },
    {
      question: "How do I make sure my data is secure?",
      answer:
        "All data transferred online is protected with 128-bit SSL encryption. Your data is automatically backed up at all times.",
    },
    {
      question: "What is the best accounting software for small businesses?",
      answer:
        "Simply put, the best accounting software is one that suits your unique needs. We offer flexible accounting plans to fit businesses small and large, across all industries, with integrations like payroll, time-tracking, and payments to help you grow efficiently when you’re ready.",
    },
    {
      question: "Is QuickBooks good for accountants?",
      answer:
        "Yes. Whether they work in-house or externally, accountants can use QuickBooks to automate and simplify tedious tasks and gain deep insights to drive growth for your business. If you run your own accounting practice, check out QuickBooks Online Accountant.",
    },
  ];

  return (
    <div className="faq-container">
      <h1>Frequently asked questions</h1>
      {faqData.map((item, index) => (
        <div key={index} className="QA">
          <div className="faq-question" onClick={() => toggle(index)}>
            <div>{item.question}</div>
            <div className={`dropdown-icon ${open === index ? "open" : ""}`}>
              {open === index ? "-" : "+"}
            </div>
          </div>
          {open === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
