"use client";
import React from "react";
import { useRef, useEffect } from "react";
import { useDataOptions } from "@/app/context/DataOptionsContext";
import Contato from "@/app/components/Contato/Contato";
import Header from "@/app/components/Header";
import "./style.scss";
const Archive = () => {
  const { dataOption } = useDataOptions();
  console.log(dataOption);
  const technologies = [
    { id: 1, name: "Nome Tecnologia", icon: "/images/vector.svg" },
    { id: 2, name: "Nome Tecnologia", icon: "/images/vector.svg" },
    { id: 3, name: "Nome Tecnologia", icon: "/images/vector.svg" },
    { id: 4, name: "Nome Tecnologia", icon: "/images/vector.svg" },
    { id: 5, name: "Nome Tecnologia", icon: "/images/vector.svg" },
    { id: 6, name: "Nome Tecnologia", icon: "/images/vector.svg" },
    { id: 7, name: "Nome Tecnologia", icon: "/images/vector.svg" },
  ];

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

  // Project data array
  const projects = Array(15).fill({
    title: "LOREM IPSUM DOLOR",
    image: "/images/image-15.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, tortor id cursus scelerisque, quam.Lorem ipsum dolor amet [...]",
    icons: Array(4).fill("images/frame-13563.svg"),
  });

  return (
    <>
      <Header logo={dataOption?.logo_principal || null} />
      <main className="main-archive">
        {/* Content Wrapper Section */}
        <section className="flex flex-col w-full items-center">
          <div className="relative w-full h-[360px] md:h-[450px]">
            <div
              className={`w-full h-[360px] md:h-[450px] bg-cover bg-center`}
              aria-hidden="true"
              style={{
                backgroundImage: `url(${dataOption?.archive?.cabecalho.background.url})`
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
              <h2 className="content-title-h2 text-gray-200 ">{dataOption?.archive?.cabecalho.titulo}</h2>

              <div
                ref={scrollRef}
                className="scroll-drag flex items-center gap-8 relative self-stretch w-full overflow-x-auto list-categories"
              >
                {technologies.map((tech, index) => (
                  <button
                    key={index}
                    className="bg-white-10 hover:bg-primary hover:text-gray-900 menu-section text-gray-200 flex items-center py-2 px-6 rounded-3xl gap-x-2 flex-none duration-500"
                  >
                    <img src={tech.icon} />
                    {tech.name}
                  </button>
                ))}
              </div>
            </div>

            <p className="relative self-stretch text-white-70">
            {dataOption?.archive?.cabecalho.descricao}
            </p>
          </section>
          <section className="w-full mx-auto flex flex-col gap-12 md:mt-[4rem] mt-[2.5rem] container">
            {[0, 1, 2, 3, 4].map((rowIndex) => (
              <div
                key={`row-${rowIndex}`}
                className="grid grid-cols-1 md:grid-cols-3 gap-12"
              >
                {projects
                  .slice(rowIndex * 3, rowIndex * 3 + 3)
                  .map((project, index) => (
                    <article
                      key={`project-${rowIndex}-${index}`}
                      className="flex flex-col overflow-hidden border-none bg-transparent"
                    >
                      <div className="relative w-full h-[230px] rounded-t-2xl overflow-hidden">
                        <img
                          className="absolute w-full h-full object-cover"
                          alt="Project thumbnail"
                          src={project.image}
                        />
                      </div>

                      <div className="flex flex-col items-start gap-4 p-6 bg-white-5 rounded-b-2xl">
                        <div className="flex flex-col items-start gap-3 w-full">
                          <div className="flex flex-col items-start gap-[3.75px] w-full">
                            <h3 className="w-full mt-[-0.94px] content-title-h5  text-gray-200">
                              {project.title}
                            </h3>
                          </div>

                          <div className="flex items-center gap-4">
                            {project.icons.map((icon, iconIndex) => (
                              <img
                                key={`icon-${iconIndex}`}
                                className="w-7"
                                alt="Category icon"
                                src={icon}
                              />
                            ))}
                          </div>
                        </div>

                        <p className="w-full text-white-70 feed-excerpt">
                          {project.description}
                        </p>
                      </div>
                    </article>
                  ))}
              </div>
            ))}
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
