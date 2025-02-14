import "./style.scss";
import { useState } from "react";
import ObserverHtml from "../../hooks/ObserverHtml";

const Accordion = ({ title, children }) => {
  const [accordion, setAccordion] = useState(true);

  const toggleAccordion = () => {
    setAccordion((prev) => !prev);
  };

  const { isVisible, targetRef } = ObserverHtml({ threshold: 0.5 });

  return (
    <section
      ref={targetRef}
      className={`accordion ${accordion ? "open" : ""} ${
        isVisible ? "sec-visible" : ""
      }`}
    >
      <div className="container px-0 md:px-6">
          <div className="accordion-header px-6 md:px-0">
            <button
              className="accordion-toggle flex items-center justify-between w-full py-4 md:pt-0 pb-4 text-gray-200 uppercase border-b border-white-10"
              aria-expanded={accordion}
              onClick={toggleAccordion}
            >
              <span className="accordion-title content-title-h2">{title}</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="accordion-icon transition-transform duration-300"
              >
                <path
                  d="M5 9L12 16L19 9"
                  stroke="#DEDEDE"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
          <div className={`accordion-body ${accordion ? "accordion-open" : ""}`}>
            <div className="accordion-content">{children}</div>
          </div>
      </div>
    </section>
  );
};

export default Accordion;
