import { useProjects } from "@/app/context/ProjectsContext";
import CardProjectBig from "./CardProjectBig";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";

const Projects = ({ data }) => {
  const { projects, technologies } = useProjects();

  useLayoutEffect(() => {
     if (!data || data.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const pinneds = gsap.utils.toArray(".pinned");

      pinneds?.forEach((pinned, index) => {
        if (index === pinneds.length - 1) return;

        gsap.to(pinned, {
          scale: "0.8",
          scrollTrigger: {
            trigger: pinned,
            start: "top 0",
            end: `bottom -70%`,
            scrub: true,
            markers: false,
          },
        });
      });
    });

    const bodyElement = document.body;
    let res;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === bodyElement) {
          clearTimeout(res);

          res = setTimeout(() => {
            ScrollTrigger.refresh();
          }, [300]);
        }
      }
    });

    resizeObserver.observe(bodyElement);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => ctx.revert();
  }, [data, projects]);

  return (
    <section
      className="sec-projects"
      style={{ height: `${data.length * 100 + 120}vh` }}
    >
      <div className="container h-full relative">
        <div className="grid grid-cols-12 md:gap-y-[7.25rem] lg:h-full">
          {Object?.values(data)
            .map((project) => project)
            .map((projectId) => projects.find((p) => p.id == projectId))
            .filter(Boolean)
            .map((project, index) => (
              <CardProjectBig
                project={project}
                technologies={technologies}
                key={`project-${index}`}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
