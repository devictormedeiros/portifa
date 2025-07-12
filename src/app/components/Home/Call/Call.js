"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Call = ({ data }) => {
  const canvasRef = useRef(null);
  const images = useRef([]);
  const airpods = useRef({ frame: 0 });
  const frameCount = data?.frames?.length || 0;

  useEffect(() => {
    if (frameCount === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = 1158;
    canvas.height = 770;

    const loadImages = async () => {
      const loadImage = (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(img);
        });

      const loadedImages = await Promise.all(
        data.frames.map((frame) => loadImage(frame.image))
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
          trigger: canvas,
          start: "top top",
          end: "bottom+=3000 top",
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
      if (frame) {
        context.drawImage(frame, 0, 0);
      }
    };

    loadImages();
  }, [data, frameCount]);

  return (
    data?.frames?.length > 0 && (
      <section className="sec-call bg-[#000] relative">
        <div className="sec-call-image image absolute top-0 w-auto lg:max-w-[50vw] lg:right-0 h-full aspect-square">
          <canvas
            ref={canvasRef}
            className="sticky top-0 left-1/2 max-w-full h-screen max-h-screen object-cover object-center lg:object-right w-full aspect-square"
          />
        </div>
        <div className="container relative z-20">
          <div className="flex flex-col-reverse md:grid grid-cols-12 gap-y-[2rem] md:gap-x-[2rem]">
            <div className="sec-call-text text col-span-12 md:col-span-4">
              {data?.items?.length > 0 &&
                data.items.map((item, index) => (
                  <div key={index} className="h-screen flex items-center">
                    <h2 className="content-title-h2 text-gray-200 uppercase">
                      {item.text}
                    </h2>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Call;
