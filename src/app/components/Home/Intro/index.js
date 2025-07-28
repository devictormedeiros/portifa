"use client";
import { memo, useEffect, useRef, useState, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import TextAnimate from "../../TextAnimate";
import "./style.scss";

const AnimatedText = ({ text, onComplete }) => {
  const textRef = useRef(null);
  const hasAnimated = useRef(false);

  const startAnimation = useCallback(() => {
    if (!textRef.current || hasAnimated.current) return;
    hasAnimated.current = true;

    // Limpa qualquer conteúdo inicial
    textRef.current.innerHTML = "";

    const letters = text.split("");

    const spans = letters.map((char) => {
      const span = document.createElement("span");
      span.className = "animated-letter";
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.visibility = "hidden";
      span.style.minWidth = char === " " ? "0.3em" : "auto";
      span.textContent = char === " " ? "\u00A0" : char;
      return span;
    });

    // Insere todos os spans no DOM
    spans.forEach((span) => textRef.current.appendChild(span));

    gsap.fromTo(
      spans,
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.03,
        delay: 0.8,
        duration: 1,
        ease: "power3.out",
        onComplete,
      }
    );
  }, [text, onComplete]);

  useEffect(() => {
    const checkPageLoad = () =>
      document.body.getAttribute("data-page-load") === "false";

    const observer = new MutationObserver(() => {
      if (checkPageLoad()) {
        startAnimation();
        observer.disconnect();
      }
    });

    if (!checkPageLoad()) {
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["data-page-load"],
      });
    } else {
      startAnimation();
    }

    return () => observer.disconnect();
  }, [startAnimation]);

  return (
    <span
      ref={textRef}
      style={{ display: "inline-block", whiteSpace: "pre-wrap" }}
    />
  );
};

const Intro = ({ data }) => {
  const [showTextAnimate, setShowTextAnimate] = useState(false);

  const frases = data?.destaque_introducao?.map((item) => item.destaque) || [];
  const layout_intro = data?.layout || "";
  const texto_intro = data?.texto_introducao || "";
  const video_intro_desktop = data?.video || "";
  const video_intro_mobile = data?.video_mobile || "";

  return (
    <section className="sec-intro overflow-hidden bg-gray-900">
      <div className="container-text">
        {layout_intro === "video" ? (
          <>
            {video_intro_desktop && (
              <video
                src={video_intro_desktop}
                autoPlay
                muted
                loop
                playsInline
                className="hidden md:block w-full h-full object-cover"
              >
                Seu navegador não suporta o elemento <code>video</code>.
              </video>
            )}

            {video_intro_mobile && (
              <video
                src={video_intro_mobile}
                autoPlay
                muted
                loop
                playsInline
                className="block md:hidden w-full h-full object-cover"
              >
                Seu navegador não suporta o elemento <code>video</code>.
              </video>
            )}
          </>
        ) : (
          <div
            className="text container"
            style={{
              "--font-intro-desktop": `${
                (data?.font_percent_desktop ?? 100) / 100
              }`,
              "--font-intro-mobile": `${
                (data?.font_percent_mobile ?? 100) / 100
              }`,
            }}
          >
            <h1 className="text-gray-200 text-left">
              <AnimatedText
                text={texto_intro}
                onComplete={() => setShowTextAnimate(true)}
              />
            </h1>
            {frases && (
              <div className="text-animate">
                {showTextAnimate && <TextAnimate frases={frases} />}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(Intro);
