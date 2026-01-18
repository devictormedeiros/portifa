"use client";

import { useEffect } from "react";

const ContentProject = ({ content }) => {
  useEffect(() => {
    if (!content) return;

    const setupSlider = async () => {
      const $ = (await import("jquery")).default;
      await import("slick-carousel");

      const sliders = document.querySelectorAll(".wp-block-gallery.slider");
      
      sliders.forEach((slider) => {
        if (!$(slider).hasClass("slick-initialized")) {
          const isAutoPlay = slider.classList.contains("autoplay");

          $(slider).slick({
            autoplay: isAutoPlay,
            autoplaySpeed: 3000,
            dots: true,
            arrows: true,
            fade: false,
            cssEase: "linear",
          });
        }
      });
    };

    setupSlider();
  }, [content]);

  return (
    <section className="w-full mb-[5rem] lg:mb-[7.5rem] w-full max-w-[59.5rem] mx-auto px-6 pt-[3rem]">
      <div
        className="text-white-70 gutenberg overflow-x-visible"
        dangerouslySetInnerHTML={{
          __html: content || "",
        }}
      />
    </section>
  );
};

export default ContentProject;
