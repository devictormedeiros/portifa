"use client";
import React from "react";
import { useRef, useEffect, useState } from "react";
import { useDataOptions } from "@/app/context/DataOptionsContext";
import { useProjects } from "@/app/context/ProjectsContext";
import Contato from "@/app/components/Contato/Contato";
import "./style.scss";
import Header from "@/app/components/Header";
import { useParams } from "next/navigation";
import SectionMoreProjoects from "@/app/components/Single/SectionMoreProjects";
import Link from "next/link";

const ProjetoPage = () => {
  const { dataOption } = useDataOptions();
  const { projects, technologies } = useProjects();
  const [currentProject, setCurrentProject] = useState(null);
  const scrollRef = useRef(null);
  const params = useParams();

  useEffect(() => {
    if (!currentProject) return;

    const timeout = setTimeout(() => {
      const setupSlider = async () => {
        const $ = (await import("jquery")).default;
        await import("slick-carousel");

        const sliders = document.querySelectorAll(".wp-block-gallery.slider");
        sliders.forEach((slider) => {
          if (!$(slider).hasClass("slick-initialized")) {
            $(slider).slick({
              autoplay: true,
              autoplaySpeed: 6000,
              speed: 3000,
              dots: true,
              arrows: true,
              fade: true,
              cssEase: "linear",
            });
          }
        });
      };

      setupSlider();
    }, 500); // tempo pra garantir que HTML já foi injetado

    return () => clearTimeout(timeout);
  }, [currentProject]);

  useEffect(() => {
    if (projects.length > 0 && params.slug) {
      const project = projects.find((p) => p.slug === params.slug);
      setCurrentProject(project);
    }
  }, [projects, params.slug]);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.classList.add("dragging");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove("dragging");
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove("dragging");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!currentProject) {
    return <div>Projeto não encontrado</div>; // Ou uma página 404
  }

  // Filtra as tecnologias do projeto atual
  const projectTechnologies = currentProject.tecnologias
    ? technologies.filter((tech) =>
        currentProject.tecnologias.includes(tech.id)
      )
    : [];

  return (
    <>
      <Header logo={dataOption?.logo_principal || null} />
      <main className="main-single">
        <section className="flex flex-col w-full items-center">
          <div className="relative w-full h-[22.5rem] md:h-[28.125rem]">
            <div
              className="w-full h-[22.5rem] md:h-[28.125rem] bg-cover bg-center"
              style={{
                backgroundImage: `url(${
                  currentProject._embedded?.["wp:featuredmedia"]?.[0]
                    ?.source_url || "/images/image.png"
                })`,
              }}
              aria-hidden="true"
            ></div>
            <div
              className="absolute inset-0 w-full h-full [background:linear-gradient(180deg,rgba(13,13,13,1)_0%,rgba(13,13,13,0.6)_33%,rgba(13,13,13,0.6)_67%,rgba(13,13,13,1)_100%)]"
              aria-hidden="true"
            ></div>
          </div>
        </section>

        <div className="single-container relative mt-[-3rem]">
          <section className="flex flex-col w-full items-center md:gap-10 gap-8 px-6 py-0 relative container">
            <div className="w-full flex flex-col gap-[1.5rem] pb-[3rem] border-b border-[#FFFFFF33] lg:flex-row lg:items-end lg:gap-[5rem]">
              <div className="lg:min-w-[41.125rem]">
                <small className="content-text-bold text-white-70">
                  {currentProject.type || "Projeto"}
                </small>
                <div className="flex items-center gap-[2.0625rem] mb-[1rem] lg:gap-[4rem]">
                  <h1 className="content-title-h2 text-gray-200 uppercase">
                    {currentProject.title?.rendered || "Sem título"}
                  </h1>
                  {currentProject.link && (
                    <Link
                      href={currentProject.link}
                      className="text-gray-200 bg-white-10 hover:bg-primary menu-section flex items-center py-2 px-4 rounded-3xl gap-x-2 flex-none duration-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.75 15.5C9.94891 15.5 10.1397 15.421 10.2803 15.2803C10.421 15.1397 10.5 14.9489 10.5 14.75C10.5 14.5511 10.421 14.3603 10.2803 14.2197C10.1397 14.079 9.94891 14 9.75 14H3.5C2.96957 14 2.46086 13.7893 2.08579 13.4142C1.71071 13.0391 1.5 12.5304 1.5 12V4C1.5 3.46957 1.71071 2.96086 2.08579 2.58579C2.46086 2.21071 2.96957 2 3.5 2H9.75C9.94891 2 10.1397 1.92098 10.2803 1.78033C10.421 1.63968 10.5 1.44891 10.5 1.25C10.5 1.05109 10.421 0.860322 10.2803 0.71967C10.1397 0.579018 9.94891 0.5 9.75 0.5H3.5C2.57174 0.5 1.6815 0.868749 1.02513 1.52513C0.368749 2.1815 0 3.07174 0 4V12C0 12.9283 0.368749 13.8185 1.02513 14.4749C1.6815 15.1313 2.57174 15.5 3.5 15.5H9.75Z"
                          fill="#DEDEDE"
                        />
                      </svg>
                      Acessar
                    </Link>
                  )}
                </div>
                <div
                  ref={scrollRef}
                  className="scroll-drag flex items-center gap-8 relative self-stretch w-full overflow-x-auto list-categories w-full lg:max-w-[41.125rem] lg:gap-4"
                >
                  {projectTechnologies.map((tech) => (
                    <div
                      key={tech.id}
                      className="border border-white-70 text-white-70 menu-section flex items-center py-[0.375rem] px-4 rounded-3xl gap-x-2 flex-none"
                    >
                      {tech.acf?.tecnologias?.icone?.link && (
                        <img
                          src={tech.acf.tecnologias.icone.link}
                          alt={tech.name}
                          className="w-[1.1875rem] h-[1.25rem]"
                        />
                      )}
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-white-70 feed-excerpt lg:flex-1">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      currentProject.excerpt?.rendered ||
                      "Sem descrição disponível",
                  }}
                />
              </div>
            </div>
          </section>

          <section className="w-full mb-[5rem] lg:mb-[7.5rem] w-full max-w-[59.5rem] mx-auto px-6 pt-[3rem]">
            <div
              className="content-text text-white-70"
              dangerouslySetInnerHTML={{
                __html: currentProject.content?.rendered || "",
              }}
            />
          </section>
        </div>

        <SectionMoreProjoects moreProjects={currentProject?.acf["more-projects"]} technologies={technologies} projects={projects}/>
      </main>
    </>
  );
};

export default ProjetoPage;
