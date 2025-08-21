"use client";

import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Call = ({ data }) => {
  const canvasRef = useRef(null);
  const sec = useRef(null);
  const images = useRef([]);
  const airpods = useRef({ frame: 0 });
  const screenSize = window.innerWidth;
  const screenHeight = window.innerHeight;

  const handleData = useCallback(
    (d) => {
      if (screenSize < 768 && d?.frames_mob[0]) {
        return d?.frames_mob[0]?.frames;
      } else if (screenSize > 767 && d?.frames_desk[0]) {
        return d?.frames_desk[0]?.frames;
      }
      return null;
    },
    [screenSize]
  );

  const frameCount = handleData(data)?.length ?? 0;

  useEffect(() => {
    if (frameCount === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const loadImages = async () => {
      const loadImage = (src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(img);
        });
      };

      const loadedImages = await Promise.all(
        handleData(data)?.map((frame) => loadImage(frame.image))
      );

      images.current = loadedImages;

      // Primeiro render
      render();

      // Animação com ScrollTrigger
      const tween = gsap.to(airpods.current, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          scrub: 0.5,
          trigger: '.sec-call',
          start: "top top",
          end: `bottom bottom`, // sincronizado com a altura
        },
        onUpdate: render,
      });

      // Cleanup
      return () => {
        tween.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    };

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const frame = images.current[airpods.current.frame];
      if (!frame) return;

      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = frame.width / frame.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      // COVER — mantém proporção mas sempre preenche todo o canvas
      if (imgRatio > canvasRatio) {
        // imagem mais "larga" → ajusta pela altura e corta nas laterais
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
      } else {
        // imagem mais "alta" → ajusta pela largura e corta no topo/baixo
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
      }

      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = (canvas.height - drawHeight) / 2;

      context.drawImage(frame, offsetX, offsetY, drawWidth, drawHeight);
    };

    loadImages();
  }, [data, frameCount, handleData]);

  return (
    handleData(data)?.length > 0 && (
      <section
        className="sec-call bg-[#000] relative h-[500vh] lg:h-[700vh]"
      >
        <div className="sec-call-image image absolute top-0 w-full lg:right-0 h-full">
          <canvas
            ref={canvasRef}
            className="sticky top-0 object-cover object-center w-full aspect-square h-[100vh]"
          />
        </div>
      </section>
    )
  );
};

export default Call;
