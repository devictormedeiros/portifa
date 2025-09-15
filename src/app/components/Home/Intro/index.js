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
  const phrases = data?.destaque_introducao?.map((item) => item.destaque) || [];
  const layout_intro = data?.layout || "";
  const texto_intro = data?.texto_introducao || "";
  const video_capa_intro_desktop = data?.video_capa_intro_desktop || "";
  const video_intro_desktop = data?.video || "";
  const video_intro_mobile = data?.video_mobile || "";
  
  useEffect(() => {
    if (video_intro_desktop) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'video';
      preloadLink.href = video_intro_desktop;
      preloadLink.type = 'video/webm';
      preloadLink.setAttribute('fetchpriority', 'high');
      document.head.appendChild(preloadLink);
    }
  }, [video_intro_desktop]);
  return (
    <>
    <section className="sec-intro overflow-hidden bg-gray-900 relative">
      <div className="container-text">
        {layout_intro === "video" ? (
          <video
            autoPlay
            muted
            loop
            preload="auto"
            fetchPriority="high"
            playsInline
            poster={video_capa_intro_desktop}
            className="w-full h-full object-cover z-[2]"
          >
            {video_intro_desktop && (
              <source src={video_intro_desktop} type="video/webm" media="(min-width: 768px)" />
            )}
            {video_intro_mobile && (
              <source
                src={video_intro_mobile}
                type="video/webm"
                media="(max-width: 767px)"
              />
            )}
            Seu navegador não suporta o elemento <code>video</code>.
          </video>
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
            {phrases && (
              <div className="text-animate">
                {showTextAnimate && <TextAnimate phrases={phrases} />}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
    </>
  );
};

export default memo(Intro);
