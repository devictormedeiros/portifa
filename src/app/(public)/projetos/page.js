"use client";
import React from "react";
import { useRef, useEffect, useState } from "react";
import { useDataOptions } from "@/app/context/DataOptionsContext";
import Contato from "@/app/components/Contato/Contato";
import Header from "@/app/components/Header";
import { useProjects } from "@/app/context/ProjectsContext";
import "./style.scss";
import Link from "next/link";
import IconsLib from "@/app/components/Icons";

const Archive = () => {
  const { dataOption } = useDataOptions();
  const { projects, technologies } = useProjects();
  const [selectedTech, setSelectedTech] = useState(null);
  const filteredProjects = selectedTech
    ? projects.filter((project) => project.tecnologias?.includes(selectedTech))
    : projects;

  const scrollRef = useRef(null);

  useEffect(() => {
    const slider = scrollRef.current;
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
      const walk = (x - startX) * 1.5; // multiplicador de velocidade
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

  // Aplica filtro se ?t=slug estiver presente
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const techSlug = params.get("t");
    if (techSlug && technologies.length > 0) {
      const tech = technologies.find((t) => t.slug === techSlug);
      if (tech) {
        setSelectedTech(tech.id);
      }
    }
  }, [technologies]);

  return (
    <>
      <Header logo={dataOption?.logo_principal || null} />
      <main className="main-archive">
        {/* Content Wrapper Section */}
        <section className="flex flex-col w-full items-center header-projects">
          <div className="relative w-full h-[22.5rem] md:h-[28.125rem]">
            <div
              className={`w-full h-[22.5rem] md:h-[28.125rem] bg-cover bg-center`}
              aria-hidden="true"
              style={{
                backgroundImage: `url(${dataOption?.archive?.cabecalho.background.url})`,
              }}
            />
            <div
              className="absolute inset-0 w-full h-full [background:linear-gradient(180deg,rgba(13,13,13,1)_0%,rgba(13,13,13,0.6)_33%,rgba(13,13,13,0.6)_67%,rgba(13,13,13,1)_100%)]"
              aria-hidden="true"
            />
          </div>
        </section>
        <div className="archive-container w-full mt-[-3rem]">
          <section className="flex flex-col w-full items-center md:gap-10 gap-8 px-6 py-0 relative container">
            <div className="flex flex-col gap-6 w-full p-0">
              <h2 className="content-title-h2 text-gray-200 ">
                {dataOption?.archive?.cabecalho.titulo}
              </h2>

              <div
                ref={scrollRef}
                className={`${
                  technologies.length > 6 ? "cursor-horizontal" : ""
                } flex items-center gap-8 lg:gap-4 relative self-stretch w-full overflow-x-auto list-categories`}
              >
                {technologies.map((tech) => {
                  const isActive = selectedTech === tech.id;
                  return (
                    <button
                      key={tech.id}
                      onClick={() => setSelectedTech(isActive ? null : tech.id)}
                      className={`pill-category menu-section flex items-center gap-x-2   py-2 px-4 rounded-3xl duration-300 hover:bg-gray-200  hover:text-gray-700 min-w-[max-content] ${
                        isActive
                          ? "bg-gray-200 text-gray-700 pill-category-active"
                          : "bg-white-10 text-gray-200"
                      }`}
                    >
                      {tech.acf?.tecnologias?.icone && (
                        <div className="img-tech">
                          <IconsLib name={tech.acf?.tecnologias?.icone} />
                        </div>
                      )}
                      {tech.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="relative self-stretch text-white-70">
              {dataOption?.archive?.cabecalho.descricao}
            </p>
          </section>
          <section className="w-full mx-auto flex flex-col gap-12 md:mt-[4rem] mt-[2.5rem] container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {filteredProjects.map((project, index) => {
                const imageUrl =
                  project._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

                return (
                  <article
                    key={`project-${index}`}
                    className="flex flex-col project-card rounded-2xl"
                  >
                    <a
                      title={project.title?.rendered || "Sem título"}
                      href={`/projeto/${project.slug}`}
                      className="block w-full h-full"
                    >
                      <div className="w-full h-[14.375rem] rounded-t-2xl">
                        <img
                          className="w-full h-full object-cover rounded-t-2xl"
                          alt="Imagem do projeto"
                          src={imageUrl || "https://placehold.co/600x400"}
                        />
                      </div>
                      <div className="flex flex-col items-start gap-4 p-6 bg-white-5 rounded-b-2xl">
                        <div className="flex flex-col items-start gap-3">
                          <div className="flex flex-col items-start gap-[0.2344rem]">
                            <h3 className="mt-[-0.0587rem] content-title-h5  text-gray-200">
                              {project.title?.rendered || "Sem título"}
                            </h3>
                          </div>
                          {project.tecnologias?.length > 0 && (
                            <div className="flex items-center gap-4">
                              {project.tecnologias.map((techId, techIndex) => {
                                const tech = technologies.find(
                                  (t) => t.id === techId
                                );
                                const iconSlug = tech?.acf?.tecnologias?.icone;

                                return iconSlug ? (
                                  <div
                                    className="img-tech"
                                    key={`tech-${techIndex}`}
                                  >
                                    <IconsLib name={iconSlug} />
                                  </div>
                                ) : (
                                  <span
                                    key={`tech-${techIndex}`}
                                    className="text-white-70 text-sm"
                                  >
                                    {tech?.name}
                                  </span>
                                );
                              })}
                            </div>
                          )}
                        </div>
                        <p className="w-full text-white-70 feed-excerpt">
                          {(project.excerpt?.rendered || "")
                            .replace(/<[^>]+>/g, "") // remove tags HTML
                            .slice(0, 120) // limita os caracteres
                            .trim() + "..."}
                        </p>
                      </div>
                    </a>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
        {dataOption && dataOption.secao_contato && (
          <Contato
            scrollText={dataOption.texto_scroll || null}
            data={dataOption.secao_contato}
            dataForm={dataOption.configuracao_do_formulario || null}
          />
        )}
      </main>
    </>
  );
};

export default Archive;
