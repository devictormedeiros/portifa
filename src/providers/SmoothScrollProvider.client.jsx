"use client";

import {
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
} from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

/** Menor = mais “inércia” / ease-out perceptível; maior = mais colado no dedo. */
const LERP = 0.082;

const LenisInstanceRefContext = createContext(null);

export function useLenisInstanceRef() {
  return useContext(LenisInstanceRefContext);
}

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const html = document.documentElement;
    html.classList.add("lenis", "lenis-smooth");

    const lenis = new Lenis({
      smoothWheel: true,
      lerp: LERP,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      syncTouch: false,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const onStRefresh = () => {
      lenis.resize();
    };
    ScrollTrigger.addEventListener("refresh", onStRefresh);

    const tickerFn = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.removeEventListener("refresh", onStRefresh);
      gsap.ticker.remove(tickerFn);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
      lenisRef.current = null;
      html.classList.remove("lenis", "lenis-smooth", "lenis-stopped");
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <LenisInstanceRefContext.Provider value={lenisRef}>
      {children}
    </LenisInstanceRefContext.Provider>
  );
}
