import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollingTexts({data}) {
  const section = useRef(null);
  const textTop = useRef(null);
  const textBottom = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to(
      textTop.current, 
        {
        scrollTrigger: {
          trigger: section.current,
          start: 'top 75%',
          scrub: true
        },
        x: "-30%",
        duration: 5,
        ease: "none",
      }
    );

    gsap.to(
      textBottom.current, 
      {
        scrollTrigger: {
          trigger: section.current,
          start: 'top 75%',
          scrub: true,
        },
        x: "30%",
        duration: 5,
        ease: "none",
      }
    );
  }, []);

  useEffect(() => {
      ScrollTrigger.refresh();
  }
  , [data]);

  return (
    <section ref={section} className="relative flex flex-col justify-center overflow-hidden gap-[0.25rem] md:pt-[13.72rem] md:pb-[8.58rem] pt-[6rem] pb-[4rem]">
      {/* Texto superior */}
      <div className="overflow-hidden flex justify-start">
        <div
          ref={textTop}
          className="relative whitespace-nowrap motion text-primary w-fit duration-300"
        >
          {data.texto_superior}
        </div>
      </div>

      {/* Texto inferior */}
      <div className="overflow-hidden flex justify-end">
        <div
          ref={textBottom}
          className="relative whitespace-nowrap motion w-fit duration-300"
        >
          {data.texto_inferior}
        </div>
      </div>
    </section>
  );
}