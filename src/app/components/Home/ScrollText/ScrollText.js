import { useEffect, useRef, useState } from "react";

export default function ScrollingTexts({data}) {
  const [scrollLeft, setScrollLeft] = useState(-70);
  const [scrollRight, setScrollRight] = useState(70);
  const section = useRef(null);

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
        setScrollLeft((e) => (isScrollingDown ? e + 1 : e - 1));
        setScrollRight((e) => (isScrollingDown ? e - 1 : e + 1));
      } else {
        setScrollLeft(-70);
        setScrollRight(70);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={section} className="relative flex flex-col justify-center items-center overflow-hidden gap-[0.25rem] pt-[5rem] pb-[4rem]">
      {/* Texto superior */}
      <div
        className="relative whitespace-nowrap duration-300 motion text-primary"
        style={{ right: `${scrollLeft}%` }}
      >
        {data.texto_superior}
      </div>

      {/* Texto inferior */}
      <div
        className="relative whitespace-nowrap duration-300 motion"
        style={{ right: `${scrollRight}%` }}
      >
        {data.texto_inferior}
      </div>
    </section>
  );
}
