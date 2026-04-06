"use client";

import CardProjectBig from "./CardProjectBig";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const RESIZE_DEBOUNCE_MS = 300;
const INITIAL_REFRESH_MS = 400;

const Projects = ({ projects }) => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!projects || projects.length === 0) return;

    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    let resizeDebounceId;
    const bodyElement = document.body;

    const ctx = gsap.context(() => {
      const pinneds = gsap.utils.toArray(sectionEl.querySelectorAll(".pinned"));

      pinneds.forEach((pinned, index) => {
        if (index === pinneds.length - 1) return;

        gsap.to(pinned, {
          scale: 0.8,
          ease: "none",
          scrollTrigger: {
            trigger: pinned,
            start: "top top",
            end: "bottom -70%",
            scrub: 0.65,
          },
        });
      });
    }, sectionRef);

    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeDebounceId);
      resizeDebounceId = setTimeout(() => {
        ScrollTrigger.refresh();
      }, RESIZE_DEBOUNCE_MS);
    });

    resizeObserver.observe(bodyElement);

    const initialRefreshId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, INITIAL_REFRESH_MS);

    return () => {
      clearTimeout(resizeDebounceId);
      clearTimeout(initialRefreshId);
      resizeObserver.disconnect();
      ctx.revert();
    };
  }, [projects]);

  return (
    <section
      ref={sectionRef}
      className="sec-projects"
      style={{ height: `${projects.length * 85 + 120}vh` }}
    >
      <div className="container h-full relative">
        <div className="grid grid-cols-12 md:gap-y-[7.25rem] lg:h-full">
          {projects?.map((project, index) => (
            <CardProjectBig key={`project-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
