"use client";
import React, { useRef, useEffect, useState } from "react";
import { useDataOptions } from "@/app/context/DataOptionsContext";
import Contact from "@/app/components/Contact";
import Header from "@/app/components/Header";
import { useProjects } from "@/app/context/ProjectsContext";
import "./style.scss";
import TopPage from "@/app/components/Projects/TopPage";
import List from "@/app/components/Projects/List";
import HeaderArchive from "@/app/components/Projects/HeaderArchive";

export default function Archive({ pageData }) {
  const { dataOption } = useDataOptions();
  const { projects, technologies } = useProjects();
  const [selectedTech, setSelectedTech] = useState(null);
  const filteredProjects = selectedTech
    ? projects.filter((p) => p.tecnologias?.includes(selectedTech))
    : projects;

  const scrollRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const techSlug = params.get("t");
    if (techSlug && technologies.length > 0) {
      const tech = technologies.find((t) => t.slug === techSlug);
      if (tech) setSelectedTech(tech.id);
    }
  }, [technologies]);

  return (
    <>
      <Header logo={dataOption?.logo_principal || null} />
      <main className="main-archive">
        <TopPage bgImage={dataOption?.archive?.cabecalho?.background?.url} />
        <div className="archive-container w-full mt-[-3rem]">
          <HeaderArchive
            dataOption={dataOption}
            technologies={technologies}
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
            scrollRef={scrollRef}
          />
          <List filteredProjects={filteredProjects} technologies={technologies} />
        </div>
        {dataOption?.secao_contato && (
          <Contact
            scrollText={dataOption?.texto_scroll || null}
            data={dataOption.secao_contato}
            dataForm={dataOption?.configuracao_do_formulario || null}
          />
        )}
      </main>
    </>
  );
}
