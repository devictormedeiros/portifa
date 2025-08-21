import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import ScrollAnimation from "react-animate-on-scroll";
import "./style.scss";

const accordionAnimation = {
  mount: { opacity: 1 },
  unmount: { opacity: 0 },
};

const normalize = (v) =>
  typeof v === "string" ? v.trim().toLowerCase() : v;

const AccordionCustom = ({ title, children, condition }) => {
  const shouldStartOpen = useMemo(() => normalize(condition) !== "fechado", [condition]);
  const [open, setOpen] = useState(shouldStartOpen);

  const inputRef = useRef(null);

  useEffect(() => {
    setOpen(shouldStartOpen);
  }, [shouldStartOpen]);

  const handleOpen = () => setOpen((prev) => !prev);

  return (
    <>
      <ScrollAnimation
        className="block w-full"
        animateIn="fadeInUp"
        animateOnce={true}
        duration={1}
      >
        <Accordion
          open={open}
          className={`accordion w-full mb-0 px-0 ${open ? "open" : 0}`}
          animate={accordionAnimation}
        >
          <div className="container">
            <div className="accordion-header">
              <AccordionHeader
                onClick={handleOpen}
                className={`accordion-toggle flex items-center justify-between w-full pb-2 pt-0 text-gray-200 hover:text-gray-200 uppercase border-b border-white-10  cursor-expand`}
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
                  className={`accordion-icon transition-transform duration-400 ${
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
            <div
              className={`duration-1000 mx-[-1.5rem] md:mx-0`}
              style={{
                height:
                  open && inputRef.current ? inputRef.current.clientHeight : 0,
              }}
            >
              <AccordionBody
                ref={inputRef}
                className={`accordion-body ${
                  open ? "accordion-open" : ""
                } mt-6 md:mt-12 pt-0 text-base font-normal text-gray-400`}
              >
                <div className="accordion-content">{children}</div>
              </AccordionBody>
            </div>
          </div>
        </Accordion>
      </ScrollAnimation>
    </>
  );
};

export default AccordionCustom;
