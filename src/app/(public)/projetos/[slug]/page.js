"use client";
import "./style.scss";

import { useDataOptions } from "@/app/context/DataOptionsContext";

import Header from "@/app/components/Header";

import SectionMoreProjects from "@/app/components/Single/SectionMoreProjects";
import SectionImageDefault from "@/app/components/Single/SectionImageDefault";
import SectionHeader from "@/app/components/Single/SectionHeader";
import SectionContent from "@/app/components/Single/SectionContent";
import Contato from "@/app/components/Contato/Contato";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';

const Single = () => {
  const params = useParams();
  const slug = params.slug;

  const { dataOption } = useDataOptions();
  const [project, setProject] = useState(null);

  // Project data array
  const moreProjects = Array(6).fill({
    title: "LOREM IPSUM DOLOR",
    image: "/images/image-15.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, tortor id cursus scelerisque, quam.Lorem ipsum dolor amet [...]",
    icons: Array(4).fill("images/frame-13563.svg"),
  });

  useEffect(() => {
    async function fetchProject() {
      const res = await fetch(`https://devictormedeiros.com/portifa-wp/wp-json/wp/v2/projeto?slug=${slug}&_embed=true`);
      const data = await res.json();

      if( data.length > 0) {
        setProject(data[0]);
      }
    }
    fetchProject();
  }, [slug])

  return (
    <>
      <Header logo={dataOption?.logo_principal || null} />
      {project !== null && (
        <main className="main-single pb-0">
          <SectionImageDefault data={project} />
          <SectionHeader data={project} />
          <SectionContent data={project} />
          <SectionMoreProjects data={moreProjects}/>
        </main>
      )}
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

export default Single;
