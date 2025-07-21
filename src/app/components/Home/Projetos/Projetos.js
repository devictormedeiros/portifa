import { useProjects } from "@/app/context/ProjectsContext";
import CardProjectBig from "./CardProjectBig";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";

const Projetos = ({ data }) => {
  const { projects, technologies } = useProjects();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let pinneds = gsap.utils.toArray(".pinned .project-card");
    let mm = gsap.matchMedia(),
      breakPoint = 1024;

    mm.add(
      {
        // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        let { isMobile } = context.conditions;

        pinneds.forEach((pinned, index) => {
          if (!pinneds[index + 1]) {
            return;
          }

          gsap.to(pinned, {
            scale: "0.8",
            scrollTrigger: {
              trigger: pinned,
              start: isMobile ? `top 7rem` : `top 0`,
              end: isMobile ? `bottom -40%` : `bottom -50%`,
              scrub: true,
              toggleActions: "play none none reverse",
            },
          });
        });
      }
    );
  }, [data]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [data]);

  return (
    <section
      className="sec-projects"
      style={{ height: `${data.length * 100 + 120}vh` }}
    >
      <div className="container h-full relative">
        <div className="grid grid-cols-12 md:gap-y-[7.25rem] lg:h-full">
          {Object?.values(data)
            .map((project) => project.ID)
            .map((projectId) => projects.find((p) => p.id === projectId))
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

export default Projetos;
