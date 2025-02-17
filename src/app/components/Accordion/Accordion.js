import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import ScrollAnimation from 'react-animate-on-scroll';
import "./style.scss";

const AccordionCustom = ({ title, children }) => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(!open);

  return (

<>
<ScrollAnimation className="block w-full" animateIn='fadeInRight' animateOnce={true} duration={2}>
    <Accordion open={open} className={`accordion w-full mb-0 px-0 ${open ? "open" : 0}`}>
      <div className="container">
        <div className="accordion-header">
          <AccordionHeader
            onClick={handleOpen}
            className={`accordion-toggle flex items-center justify-between w-full py-4 md:pt-0 pb-4 text-gray-200 hover:text-gray-200 uppercase border-b border-white-10 transition-colors`}
          >
            <span className="accordion-title content-title-h2">{title}</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`accordion-icon transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            >
              <path
                d="M5 9L12 16L19 9"
                stroke="#DEDEDE"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </AccordionHeader>
        </div>
        <AccordionBody
          className={`accordion-body ${
            open ? "accordion-open" : ""
          } mt-10 md:mt-12 pt-0 text-base font-normal text-gray-400`}
        >
          <div className="accordion-content">{children}</div>
        </AccordionBody>
      </div>
    </Accordion>
    </ScrollAnimation>
    </>
  );
};

export default AccordionCustom;
