import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { RichText } from "./richText";

export const ProjectFaqs = ({ faqs = [] }) => {
  const list = (faqs || []).filter((f) => f?.question && f?.answer);
  const [openIndex, setOpenIndex] = useState(null);

  if (!list.length) return null;

  return (
    <section className="case-block">
      <header className="case-block-head">
        <p className="case-eyebrow">Questions</p>
        <h3 className="case-block-title">
          <span className="case-block-title-accent">FAQs</span>
        </h3>
      </header>
      <div className="case-faq-list">
        {list.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={`faq-${index}`} className="case-faq-item">
              <button
                type="button"
                className="case-faq-q"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`case-faq-chevron ${isOpen ? "is-open" : ""}`}
                />
              </button>
              <div className={`resume-collapse ${isOpen ? "is-open" : ""}`}>
                <div className="resume-collapse-inner">
                  <RichText as="p" className="case-faq-a" text={faq.answer} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
