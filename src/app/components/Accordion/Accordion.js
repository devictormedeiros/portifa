import "./style.scss";
import {useState } from 'react';
import ObserverHtml from "../../hooks/ObserverHtml";

const Accordion = ({ title, children }) => {
    const [accordion, setAccordion] = useState(1);

    const toggleAccordion = () =>{
        setAccordion((prev) => !prev);
    }

    const { isVisible, targetRef } = ObserverHtml({ threshold: 0.5 });

    
    return (
      <article ref={targetRef} className={`accordion pb-10  ${accordion ? "open" : ""} ${isVisible ? "sec-visible" : ''}`} >
        <div className="container">
          <div className={`px-5`}>
            <div className="accordion-header mb-12">
              <button
                className="accordion-toggle flex items-center justify-between w-full py-5 text-gray-200 uppercase border-b border-gray-700"
                aria-expanded="false" onClick={() => toggleAccordion()}
              >
                <span className="accordion-title content-title-h2">
                  {title}
                </span>
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
            <div className={`accordion-body`}>
              <div className="accordion-content">{children}</div>
            </div>
          </div>
        </div>
      </article>
    );
  };
  
  export default Accordion;
  