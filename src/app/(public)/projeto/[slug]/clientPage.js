"use client";
import React, { useRef, useEffect, useState } from "react";
import { useDataOptions } from "@/app/context/DataOptionsContext";
import { useProjects } from "@/app/context/ProjectsContext";
import Contact from "@/app/components/Contact";
import "./style.scss";
import Header from "@/app/components/Header";
import { useParams } from "next/navigation";
import SectionMoreProjoects from "@/app/components/Single/SectionMoreProjects";
import TopPage from "@/app/components/Projects/TopPage";
import ContentProject from "@/app/components/Projects/ContentProject";
import HeaderSingle from "@/app/components/Projects/HeaderSingle";
import Script from "next/script";

export default function ClientProjetoPage() {
  const { dataOption: data } = useDataOptions();
  const { projects, technologies } = useProjects();
  const [currentProject, setCurrentProject] = useState(null);
  const scrollRef = useRef(null);
  const params = useParams();

  useEffect(() => {
    if (projects.length > 0 && params.slug) {
      const project = projects.find((p) => p.slug === params.slug);
      setCurrentProject(project || null);
    }
  }, [projects, params.slug]);

  // Slick init (igual ao seu)
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
              dots: true,
              arrows: true,
              fade: false,
              cssEase: "linear",
            });
          }
        });
      };
      setupSlider();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [currentProject]);

  // Drag scroll (igual ao seu)
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;
    let isDown = false, startX, scrollLeft;
    const down = (e) => { isDown = true; slider.classList.add("dragging"); startX = e.pageX - slider.offsetLeft; scrollLeft = slider.scrollLeft; };
    const leave = () => { isDown = false; slider.classList.remove("dragging"); };
    const up = () => { isDown = false; slider.classList.remove("dragging"); };
    const move = (e) => { if (!isDown) return; e.preventDefault(); const x = e.pageX - slider.offsetLeft; slider.scrollLeft = scrollLeft - (x - startX) * 1.5; };
    slider.addEventListener("mousedown", down);
    slider.addEventListener("mouseleave", leave);
    slider.addEventListener("mouseup", up);
    slider.addEventListener("mousemove", move);
    return () => {
      slider.removeEventListener("mousedown", down);
      slider.removeEventListener("mouseleave", leave);
      slider.removeEventListener("mouseup", up);
      slider.removeEventListener("mousemove", move);
    };
  }, []);

  if (!currentProject) return <div>Projeto não encontrado</div>;

  const projectTechnologies = currentProject.tecnologias
    ? technologies.filter((t) => currentProject.tecnologias.includes(t.id))
    : [];

  // (Opcional, mas recomendado) Injetar o JSON-LD do Yoast na página
  // O generateMetadata não injeta JSON-LD; então renderizamos aqui:
  const yoastSchema = currentProject?.yoast_head_json?.schema;

  return (
    <>
      {yoastSchema && (
        <Script
          id="yoast-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(yoastSchema) }}
        />
      )}

      <Header logo={data?.logo_principal || null} />
      <main className="main-single">
        <TopPage
          bgImage={currentProject._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
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
            moreProjects={currentProject?.acf?.["more-projects"]}
            technologies={technologies}
            projects={projects}
          />
          <Contact
            scrollText={data?.texto_scroll || null}
            data={data?.secao_contato || null}
            dataForm={data?.configuracao_do_formulario || null}
          />
        </div>
      </main>
    </>
  );
}
