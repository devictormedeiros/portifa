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
        let currentTop = parseInt(textTop.current.style.left, 10);
        let currentBottom = parseInt(textBottom.current.style.right, 10);

        let newTop = isScrollingDown ? currentTop - 1 : currentTop + 1;
        let newbottom = isScrollingDown ? currentBottom - 1 : currentBottom + 1;

        textTop.current.style.left = `${newTop}%`;
        textBottom.current.style.right = `${newbottom}%`;
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={section} className="relative flex flex-col justify-center overflow-hidden gap-[0.25rem] pt-[13.72rem] pb-[8.58rem]">
      {/* Texto superior */}
      <div className="overflow-hidden flex justify-start">
        <div
          ref={textTop}
          className="relative whitespace-nowrap motion text-primary w-fit"
          style={{ left: `0%`, transition: `all .3s cubic-bezier(0, 0.8, 0.58, 1)` }}
        >
          {data.texto_superior}
        </div>
      </div>

      {/* Texto inferior */}
      <div className="overflow-hidden flex justify-end">
        <div
          ref={textBottom}
          className="relative whitespace-nowrap motion w-fit"
          style={{ right: `0%`, transition: `all .3s cubic-bezier(0, 0.8, 0.58, 1)` }}
        >
          {data.texto_inferior}
        </div>
      </div>
    </section>
  );
}