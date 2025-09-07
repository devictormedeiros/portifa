"use client";
import React from "react";
import { useRef, useEffect, useState } from "react";
import { useDataOptions } from "@/app/context/DataOptionsContext";
import Contact from "@/app/components/Contact";
import Header from "@/app/components/Header";
import { useProjects } from "@/app/context/ProjectsContext";
import "./style.scss";
import TopPage from "@/app/components/Projects/TopPage";
import List from "@/app/components/Projects/List";
import HeaderArchive from "@/app/components/Projects/HeaderArchive";

const Archive = () => {
  const { dataOption } = useDataOptions();
  const { projects, technologies } = useProjects();
  const [selectedTech, setSelectedTech] = useState(null);
  const filteredProjects = selectedTech
    ? projects.filter((project) => project.tecnologias?.includes(selectedTech))
    : projects;

  const scrollRef = useRef(null);
  const innerWidth =  typeof window !== "undefined" && window?.innerWidth;

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

  const bgImage =
  typeof window !== "undefined" && window.innerWidth < 768
  ? dataOption?.archive?.cabecalho["hero-mobile"]?.url
  : dataOption?.archive?.cabecalho["hero-desktop"]?.url

  return (
    <>
      <Header logo={dataOption?.logo_principal || null} />
      <main className="main-archive">
        {/* Content Wrapper Section */}
        <TopPage bgImage={bgImage ?? null} />
        <div className="archive-container w-full mt-[-3rem]">
          <HeaderArchive
            dataOption={dataOption}
            technologies={technologies}
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
            scrollRef={scrollRef}
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
