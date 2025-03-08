"use client";
import { memo, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import TextAnimate from "../../TextAnimate";
import "./style.scss";

const AnimatedText = ({ text, onComplete }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const checkPageLoad = () => document.body.getAttribute("data-page-load") === "false";

    // Aguarda o body ter page-load="false"
    const observer = new MutationObserver(() => {
      if (checkPageLoad()) {
        startAnimation();
        observer.disconnect();
      }
    });

    if (!checkPageLoad()) {
      observer.observe(document.body, { attributes: true, attributeFilter: ["data-page-load"] });
    } else {
      startAnimation();
    }

    return () => observer.disconnect();
  }, []);

  const startAnimation = () => {
    if (!textRef.current) return;

    const letters = textRef.current.children;

    gsap.fromTo(
      letters,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.2,
        onComplete: onComplete, // Chama a função após a animação terminar
      }
    );
  };

  return (
    <span ref={textRef} style={{ display: "inline-block", whiteSpace: "pre-wrap" }}>
      {text.split("").map((char, i) => (
        <span key={i} style={{ display: "inline-block", minWidth: char === " " ? "0.3em" : "auto" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

const Intro = ({ data }) => {
  const [showTextAnimate, setShowTextAnimate] = useState(false);

  const frases = data?.destaque_introducao?.map((item) => item.destaque) || [];
  const texto_introducao = data?.texto_introducao || "";

  return (
    <section className="sec-intro overflow-hidden bg-gray-900">
      <div className="container-text">
        <div className="text container">
          <h1 className="content-title-h1 text-gray-200">
            <AnimatedText text={texto_introducao} onComplete={() => setShowTextAnimate(true)} />
          </h1>
          {frases && (
          <div className="text-animate">
          {showTextAnimate && <TextAnimate frases={frases} />}
          </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default memo(Intro);
