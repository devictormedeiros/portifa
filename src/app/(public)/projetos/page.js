"use client";
import React from "react";
import { useRef, useEffect, useState } from "react";
import { useDataOptions } from "@/app/context/DataOptionsContext";
import Contact from "@/app/components/Contact";
import { useProjects } from "@/app/context/ProjectsContext";
import "./style.scss";
import List from "@/app/components/Projects/List";
import TopPage from "@/features/projects/sections/TopPage";
import HeaderArchive from "@/features/projects/sections/HeaderArchive";

const Archive = ({ searchParams }) => {
  const { dataOption } = useDataOptions();
  const { projects, technologies } = useProjects();

  const [selectedTech, setSelectedTech] = useState(null);

  const filteredProjects = selectedTech
    ? projects.filter((project) => project.tecnologias?.includes(selectedTech))
    : projects;

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
      <main className="main-archive">
        <TopPage
          bgImageMobile={dataOption?.archive?.cabecalho["hero-mobile"]}
          bgImageDesktop={dataOption?.archive?.cabecalho["hero-desktop"]}
        />
        <div className="archive-container w-full mt-[-3rem]">
          <HeaderArchive
            dataOption={dataOption}
            technologies={technologies}
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
            title={dataOption?.archive?.cabecalho?.titulo || ""}
            description={dataOption?.archive?.cabecalho?.descricao || ""}
          />
          <List
            filteredProjects={filteredProjects}
            technologies={technologies}
          />
        </div>
        {dataOption && dataOption.secao_contato && (
          <Contact
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
