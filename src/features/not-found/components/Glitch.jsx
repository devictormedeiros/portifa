"use client";

import { useEffect, useRef } from "react";

export default function Glitch() {
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
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none z-0" />;
}
