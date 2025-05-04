"use client";
import React from "react";
import { useRef, useEffect, useState } from "react";
import { useDataOptions } from "@/app/context/DataOptionsContext";
import { useProjects } from "@/app/context/ProjectsContext";
import Contato from "@/app/components/Contato/Contato";
import "./style.scss";
import Header from "@/app/components/Header";
import { useParams } from "next/navigation";
import Link from "next/link";
import SectionImageDefault from "@/app/components/Single/SectionImageDefault";
import SectionHeader from "@/app/components/Single/SectionHeader";
import SectionContent from "@/app/components/Single/SectionContent";
import SectionMoreProjects from "@/app/components/Single/SectionMoreProjects";

const ProjetoPage = () => {
  const { dataOption } = useDataOptions();
  const { projects, technologies } = useProjects();
  const [currentProject, setCurrentProject] = useState(null);
  const scrollRef = useRef(null);
  const params = useParams();

  useEffect(() => {
    if (projects.length > 0 && params.slug) {
      const project = projects.find(p => p.slug === params.slug);
      setCurrentProject(project);
      console.log(typeof project.acf['more-projects']);
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
    ? technologies.filter(tech => currentProject.tecnologias.includes(tech.id))
    : [];

  return (
    <>
      <Header logo={dataOption?.logo_principal || null} />
      <main className="main-single pb-0">
        <SectionImageDefault data={currentProject} />
        <SectionHeader data={currentProject} />
        <SectionContent data={currentProject} />
        <SectionMoreProjects data={{
            projects: projects,
            moreProjects: currentProject.acf['more-projects']
          }}/>
      </main>
      {dataOption && dataOption.secao_contato && (
        <Contato
          scrollText={dataOption.texto_scroll || null}
          data={dataOption.secao_contato}
          dataForm={dataOption.configuracao_do_formulario || null}
        />
      )}
    </>
  );
};

export default ProjetoPage;
