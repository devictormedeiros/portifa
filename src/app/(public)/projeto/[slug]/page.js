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
import TopPage from "@/app/components/Projects/TopPage";
import ContentProject from "@/app/components/Projects/ContentProject";
import HeaderSingle from "@/app/components/Projects/HeaderSingle";

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
            const isAutoPlay = slider.classList.contains("autoplay");

            $(slider).slick({
              autoplay: isAutoPlay,
              autoplaySpeed: 3000,
              /* speed: 1000, */
              dots: true,
              arrows: true,
              fade: false,
              cssEase: "linear",
            });
          }
        });
      };

      setupSlider();
    }, 2000); // tempo pra garantir que HTML já foi injetado

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
        currentProject.tecnologias.includes(tech.id),
      )
    : [];

  return (
    <>
      <Header logo={data?.logo_principal || null} />
      <main className="main-single">
        <TopPage
          bgImage={
            currentProject._embedded?.["wp:featuredmedia"]?.[0]?.source_url
          }
        />
        <div className="single-container relative mt-[-3rem]">
          <HeaderSingle
            currentProject={currentProject}
            projectTechnologies={projectTechnologies}
            scrollRef={scrollRef}
          />

          <ContentProject content={currentProject.content?.rendered} />
        </div>
        <div className="bg-gradient-primary-d">
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
        </div>
      </main>
    </>
  );
};

export default ProjetoPage;
