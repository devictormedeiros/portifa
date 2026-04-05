"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Textos em marquee ligados ao scroll da seção de contato.
 * O componente deve estar dentro de um ancestral com a classe .sec-contact (ver Footer).
 */
const SCROLL_TEXT_CONFIG = {
  triggerSelector: ".sec-contact",
  start: "top bottom",
  /** Mais rolagem vertical para completar o movimento horizontal = efeito mais lento. */
  end: "+=3200",
  /** Suavização do scrub em segundos (GSAP 3). */
  scrub: 1.25,
  xTop: "-70%",
  xBottom: "70%",
  resizeDebounceMs: 1000,
  initialRefreshDelayMs: 800,
};

export default function ScrollingText({ data }) {
  const rootRef = useRef(null);
  const textTopRef = useRef(null);
  const textBottomRef = useRef(null);

  useEffect(() => {
    const triggerEl = rootRef.current?.closest(
      SCROLL_TEXT_CONFIG.triggerSelector,
    );
    const topEl = textTopRef.current;
    const bottomEl = textBottomRef.current;

    if (!triggerEl || !topEl || !bottomEl) {
      return;
    }

    let resizeDebounceId;
    let initialRefreshId;

    const {
      start,
      end,
      scrub,
      xTop,
      xBottom,
      resizeDebounceMs,
      initialRefreshDelayMs,
    } = SCROLL_TEXT_CONFIG;

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: triggerEl,
            start,
            end,
            scrub,
          },
        })
        .to(
          topEl,
          { x: xTop, ease: "none", immediateRender: false, overwrite: "auto" },
          0,
        )
        .to(
          bottomEl,
          {
            x: xBottom,
            ease: "none",
            immediateRender: false,
            overwrite: "auto",
          },
          0,
        );
    }, rootRef);

    const bodyElement = document.body;

    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeDebounceId);
      resizeDebounceId = setTimeout(() => {
        ScrollTrigger.refresh();
      }, resizeDebounceMs);
    });

    resizeObserver.observe(bodyElement);

    initialRefreshId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, initialRefreshDelayMs);

    return () => {
      clearTimeout(resizeDebounceId);
      clearTimeout(initialRefreshId);
      resizeObserver.disconnect();
      ctx.revert();
    };
  }, [data]);

  return (
    <section
      ref={rootRef}
      className="relative flex flex-col justify-center overflow-hidden gap-[0.25rem] md:pt-[10rem] md:pb-[8.58rem] pt-[6rem] pb-[4rem]"
    >
      <div className="overflow-hidden flex justify-start">
        <div
          ref={textTopRef}
          className="relative whitespace-nowrap text-primary w-fit motion ease-out"
        >
          {data?.texto_superior}
        </div>
      </div>

      <div className="overflow-hidden flex justify-end">
        <div
          ref={textBottomRef}
          className="relative whitespace-nowrap w-fit motion ease-out"
        >
          {data?.texto_inferior}
        </div>
      </div>
    </section>
  );
}
