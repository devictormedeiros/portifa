"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Call = ({ data }) => {
  console.log(data);
  const canvasRef = useRef(null);
  const images = useRef([]);
  const airpods = useRef({ frame: 0 });
  const frameCount = data?.frames?.length;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = 1158;
    canvas.height = 770;

    const currentFrame = (index) => data?.frames[index]?.image;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      console.log(currentFrame(i));
      images.current.push(img);
    }

    gsap.to(airpods.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 0.5,
      },
      onUpdate: render,
    });

    images.current[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images.current[airpods.current.frame], 0, 0);
    }
  }, []);

  return (
    <section className="sec-call bg-[#000]">
      <div className="container">
        <div className="flex flex-col-reverse md:grid grid-cols-12 gap-y-[2rem] md:gap-x-[2rem]">
          <div className="sec-call-text text col-span-12 md:col-span-4">
            {data?.items?.map((item) => (
              <>
                <div className="h-screen flex items-center">
                  <h2 className="content-title-h2 text-gray-200 uppercase">
                    {item.text}
                  </h2>
                </div>
              </>
            ))}
          </div>
          <div className="sec-call-image image col-span-12 md:col-span-8">
            <canvas
              ref={canvasRef}
              className="sticky left-1/2 top-[2.1875rem] max-w-full h-screen max-h-screen object-contain object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Call;
