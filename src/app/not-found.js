"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Header from "./components/Header";
import { useDataOptions } from "./context/DataOptionsContext";
import Contato from "./components/Contato/Contato";
import Footer from "./components/Footer";

export default function NotFound() {
  const { dataOption: data } = useDataOptions();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasShown = canvasRef.current;
    if (!canvasShown) return;

    const canvasHidden = document.createElement("canvas");
    const ctxHidden = canvasHidden.getContext("2d");
    const ctxShown = canvasShown.getContext("2d");

    if (!ctxHidden || !ctxShown) return;

    const isMobile = window.innerWidth < 768;
    const width = isMobile ? 318 : 680;
    const height = isMobile ? 140 : 250;
    const fontSize = isMobile
      ? "bold 8.75rem Roboto, serif"
      : "bold 18.5rem Roboto, serif";

    canvasShown.width = width;
    canvasShown.height = height;

    function init() {
      canvasHidden.width = width;
      canvasHidden.height = height;

      ctxHidden.clearRect(0, 0, width, height);
      ctxHidden.textAlign = "center";
      ctxHidden.textBaseline = "middle";
      ctxHidden.font = fontSize;
      ctxHidden.fillStyle = "#404040";
      ctxHidden.fillText("404", width / 2, height / 2);

      ctxShown.clearRect(0, 0, width, height);
      ctxShown.drawImage(canvasHidden, 0, 0);

      let i = 2;
      while (i--) glitch();
    }

    function glitch() {
      const w = 200 + Math.random() * 200;
      const h = 100 + Math.random() * 100;
      const x = Math.random() * width;
      const y = Math.random() * height;
      const dx = x + (Math.random() * 80 - 40);
      const dy = y + (Math.random() * 30 - 30);

      ctxShown.clearRect(x, y, w, h);
      ctxShown.drawImage(canvasHidden, x, y, w, h, dx, dy, w, h);
    }

    const interval = setInterval(init, 1000 / 15);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header logo={data?.logo_principal || null} />
      <main className="main-404">
        <div className="flex flex-col items-center justify-center relative overflow-hidden pt-[11.25rem] px-[1.5rem] pb-[11.25rem] md:pb-[15.625rem]">
          <canvas ref={canvasRef} className="pointer-events-none z-0" />
          <div className="text-404 text-center md:px-4 z-10 mt-[-1.5625rem]">
            <h2 className="content-title-h2 text-white-100 mb-[1rem] md:mb-0">
              OPS! SINAL PERDIDO...
            </h2>
            <div className="flex md:gap-6 gap-4 items-center flex-wrap md:justify-start justify-center">
              <p className="content-text text-white-70 mb-0 text-center md:text-left md:flex-1">
                A página sofreu interferência e não está disponível. <br />
                Que tal visitar nossa home e encontrar outro conteúdo?
              </p>
              <Link
                href="/"
                className="inline-block px-6 py-3 text-white-70 rounded border-white-70 border button-md uppercase md:w-auto w-full"
              >
                Acessar home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
