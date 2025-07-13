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
  const { dataOption: data } = useDataOptions();
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
      <Header logo={data?.logo_principal || null} />
      <main className="main-single">
        <section className="flex flex-col w-full items-center  header-projetcs">
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
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.8 12C7.95913 12 8.11174 11.9368 8.22426 11.8243C8.33679 11.7117 8.4 11.5591 8.4 11.4C8.4 11.2409 8.33679 11.0883 8.22426 10.9757C8.11174 10.8632 7.95913 10.8 7.8 10.8H2.8C2.37565 10.8 1.96869 10.6314 1.66863 10.3314C1.36857 10.0313 1.2 9.62435 1.2 9.2V2.8C1.2 2.37565 1.36857 1.96869 1.66863 1.66863C1.96869 1.36857 2.37565 1.2 2.8 1.2H7.8C7.95913 1.2 8.11174 1.13679 8.22426 1.02426C8.33679 0.911742 8.4 0.75913 8.4 0.6C8.4 0.44087 8.33679 0.288258 8.22426 0.175736C8.11174 0.063214 7.95913 0 7.8 0H2.8C2.05739 0 1.3452 0.294999 0.820101 0.820101C0.294999 1.3452 0 2.05739 0 2.8V9.2C0 9.94261 0.294999 10.6548 0.820101 11.1799C1.3452 11.705 2.05739 12 2.8 12H7.8ZM8.5928 2.9592C8.65068 2.90571 8.71853 2.86415 8.79248 2.8369C8.86642 2.80964 8.94501 2.79721 9.02376 2.80033C9.10251 2.80345 9.17987 2.82206 9.25143 2.85508C9.32298 2.8881 9.38733 2.9349 9.4408 2.9928L11.8408 5.5928C11.9432 5.70366 12.0001 5.84906 12.0001 6C12.0001 6.15094 11.9432 6.29634 11.8408 6.4072L9.4408 9.0072C9.3327 9.124 9.18262 9.19308 9.02359 9.19923C8.86456 9.20538 8.7096 9.1481 8.5928 9.04C8.476 8.9319 8.40693 8.78182 8.40077 8.62279C8.39462 8.46376 8.4519 8.3088 8.56 8.192L10.0304 6.5992H3.8C3.64087 6.5992 3.48826 6.53599 3.37574 6.42346C3.26321 6.31094 3.2 6.15833 3.2 5.9992C3.2 5.84007 3.26321 5.68746 3.37574 5.57494C3.48826 5.46241 3.64087 5.3992 3.8 5.3992H10.0296L8.5592 3.8064C8.50571 3.74852 8.46415 3.68067 8.4369 3.60672C8.40964 3.53278 8.39721 3.45419 8.40033 3.37544C8.40345 3.29669 8.42206 3.21933 8.45508 3.14777C8.4881 3.07622 8.5349 3.01267 8.5928 2.9592Z"
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

        <SectionMoreProjoects
          moreProjects={currentProject?.acf["more-projects"]}
          technologies={technologies}
          projects={projects}
        />

        <Contato
          scrollText={data?.texto_scroll || null}
          data={data?.secao_contato || null}
          dataForm={data?.configuracao_do_formulario || null}
        />
      </main>
    </>
  );
};

export default ProjetoPage;
