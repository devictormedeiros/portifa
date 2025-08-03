import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollingTexts({ data }) {
  const section = useRef(null);
  const textTop = useRef(null);
  const textBottom = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollTriggerTop = ScrollTrigger.create({
      trigger: ".sec-contato",
      start: "top 100%",
      scrub: true,
      animation: gsap.to(textTop.current, {
        x: "-50%",
        duration: 5,
      }),
    });

    const scrollTriggerBottom = ScrollTrigger.create({
      trigger: ".sec-contato",
      start: "top 100%",
      scrub: true,
      animation: gsap.to(textBottom.current, {
        x: "50%",
        duration: 5,
      }),
    });

    const bodyElement = document.body;
    let res;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === bodyElement) {
          clearTimeout(res);

          res = setTimeout(() => {
            scrollTriggerTop.update();
            scrollTriggerBottom.update();
          }, [500]);
        }
      }
    });

    resizeObserver.observe(bodyElement);
  }, []);

  return (
    <section
      ref={section}
      className="relative flex flex-col justify-center overflow-hidden gap-[0.25rem] md:pt-[10rem] md:pb-[8.58rem] pt-[6rem] pb-[4rem]"
    >
      {/* Texto superior */}
      <div className="overflow-hidden flex justify-start">
        <div
          ref={textTop}
          className="relative whitespace-nowrap motion text-primary w-fit duration-[1.5s] md:duration-[3.2s] ease-out"
        >
          {data.texto_superior}
          {data.texto_superior}
        </div>
      </div>

      {/* Texto inferior */}
      <div className="overflow-hidden flex justify-end">
        <div
          ref={textBottom}
          className="relative whitespace-nowrap motion w-fit duration-[1.5s] md:duration-[3.2s] ease-out"
        >
          {data.texto_inferior}
          {data.texto_inferior}
        </div>
      </div>
    </section>
  );
}
