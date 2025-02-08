import { useEffect, useRef, useState } from "react";

export default function ScrollingTexts({data}) {
  const section = useRef(null);
  const textTop = useRef(null);
  const textBottom = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
  
    let handleScroll = () => {
      let top = section.current.getBoundingClientRect().top;
      let bottom = section.current.getBoundingClientRect().bottom;
  
      let isVisible = top < window.innerHeight && bottom >= 0;
  
      // Determinar direção do scroll
      let currentScrollY = window.scrollY;
      let isScrollingDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;
  
      if (isVisible) {
        let currentTop = parseInt(textTop.current.style.right, 10);
        let currentBottom = parseInt(textBottom.current.style.right, 10);
        let newTop = isScrollingDown ? currentTop + 1 : currentTop - 1;
        let newbottom = isScrollingDown ? currentBottom - 1 : currentBottom + 1;
        textTop.current.style.right = `${newTop}%`;
        textBottom.current.style.right = `${newbottom}%`;
      } else {
        textTop.current.style.right = "-70%";
        textBottom.current.style.right = "70%";
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={section} className="relative flex flex-col justify-center items-center overflow-hidden gap-[0.25rem] pt-[5rem] pb-[4rem]">
      {/* Texto superior */}
      <div
        ref={textTop}
        className="relative whitespace-nowrap duration-300 motion text-primary"
        style={{ right: `-70%` }}
      >
        {data.texto_superior}
      </div>

      {/* Texto inferior */}
      <div
        ref={textBottom}
        className="relative whitespace-nowrap duration-300 motion"
        style={{ right: `70%` }}
      >
        {data.texto_inferior}
      </div>
    </section>
  );
}