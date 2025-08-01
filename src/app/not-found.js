"use client";

import { useEffect, useRef } from "react";
import Header from "./components/Header";
import { useDataOptions } from "./context/DataOptionsContext";
import Footer from "./components/Footer";

export default function NotFound() {
  const { dataOption: data, isLoading } = useDataOptions();
  const pagina404 = data?.pagina_404;
  const titulo = pagina404?.titulo;
  const texto = pagina404?.texto;
  const link = pagina404?.link;
  const linkCustomizado = pagina404?.link_customizado;
  const isHome = link === "home";
  const href = isHome ? "/" : linkCustomizado;
  const buttonLabel = isHome ? "Acessar Home" : "Acessar";
  const canvasRef = useRef(null);

  useEffect(() => {
    if (isLoading || !data) return;
    console.log("Data carregado no 404:", data);

    const canvasShown = canvasRef.current;
    if (!canvasShown) return;

    const canvasHidden = document.createElement("canvas");
    const ctxHidden = canvasHidden.getContext("2d");
    const ctxShown = canvasShown.getContext("2d");

    if (!ctxHidden || !ctxShown) return;

    const isMobile = window.innerWidth < 768;
    const width = isMobile ? 318 : 680;
    const height = isMobile ? 150 : 343;
    const fontSize = isMobile
      ? "bold 10rem Roboto, serif"
      : "bold 22rem Roboto, serif";

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

    return () => {
      clearInterval(interval);
    };
  }, [isLoading, data]);

  return (
    <>
      <Header logo={data?.logo_principal || null} />
      <main className="main-404">
        <div className="flex flex-col items-center justify-center relative overflow-hidden pt-[11.25rem] px-[1.5rem] pb-[11.25rem] md:pb-[15.625rem]">
          <canvas ref={canvasRef} className="pointer-events-none z-0" />
          <div className="text-404 text-center md:px-4 z-10 md:mt-[-2.75rem] mt-[-1rem]">
            <h2 className="content-title-h2 text-white-100 mb-[1rem] md:mb-[0.5rem]">
              {titulo}
            </h2>
            <div className="flex md:gap-6 gap-5 items-center flex-wrap md:justify-start justify-center">
              <p
                className="content-text text-white-70 mb-0 text-center md:text-left md:flex-1"
                dangerouslySetInnerHTML={{ __html: texto }}
              ></p>
              <a
                href={href}
                title="Acessa home"
                className="inline-block px-6 py-3 text-white-70 rounded border-white-70 border button-md uppercase md:w-auto w-full"
              >
                {buttonLabel}
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
