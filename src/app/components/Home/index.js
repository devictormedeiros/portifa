"use client";
import Header from "@/app/components/Header";
import Sobre from "@/app/components/Home/Sobre";
import Intro from "@/app/components/Home/Intro";
import Tecnologias from "@/app/components/Home/Tecnologias";
import Contact from "@/app/components/Contact";
import Projects from "@/app/components/Home/Projects";
import Call from "@/app/components/Home/Call/Call";
import Skills from "@/app/components/Home/Skills/Skills";
import Recomendacoes from "@/app/components/Home/Recomendacoes/Recomendacoes";
import { useDataOptions } from "@/app/context/DataOptionsContext";
import { useEffect, useState } from "react";

export default function HomePage({ pageData }) {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const { dataOption: data } = useDataOptions();

  useEffect(() => {
    const handleScroll = (event) => {
      if (!scrollEnabled) {
        event.preventDefault();
        return;
      }
      if (window.innerWidth <= 768) return;

      const introSection = document.querySelector(".sec-intro");
      const sectionSobre = document.querySelector(".sec-sobre");
      if (!introSection || !sectionSobre) return;

      const scrollPosition = window.scrollY;
      const introTop = introSection.offsetTop;
      const introHeight = introSection.offsetHeight;
      const sobreTop = sectionSobre.offsetTop;
      const sobreHeight = sectionSobre.offsetHeight;

      const isInsideIntro =
        scrollPosition >= introTop && scrollPosition < introTop + introHeight;
      const isInsideSobre =
        scrollPosition >= sobreTop && scrollPosition < sobreTop + sobreHeight;

      if (!isInsideIntro && !isInsideSobre) return;

      if (isInsideIntro && event.deltaY > 0) {
        event.preventDefault();
        setScrollEnabled(false);
        sectionSobre.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => setScrollEnabled(true), 3500);
      } else if (isInsideSobre && event.deltaY < 0) {
        event.preventDefault();
        setScrollEnabled(false);
        introSection.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => setScrollEnabled(true), 500);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [scrollEnabled]);

  return (
    <>
      {data?.home?.introducao && <Intro data={data.home.introducao} />}

      <Header />
      <main className="main-home flex flex-wrap relative z-[1]">
        {data?.home?.sobre && <Sobre data={data.home.sobre || null} />}
        <div className="sec-bg-home w-full grid grid-cols-1 gap-y-[5rem] pb-[5rem] md:pb-[7.72rem] md:gap-y-[8.75rem]">
          {data?.home?.scroll && <Call data={data.home.scroll || null} />}
          {data?.home?.projetos && (
            <Projects data={data.home.projetos || null} />
          )}
          <section className="grid grid-cols-1 gap-y-[5rem] md:gap-y-[8.75rem]">
            {data?.home?.tabs && <Skills data={data.home.tabs} />}
            {data?.home?.tecnologias_atuacoes && (
              <Tecnologias data={data.home.tecnologias_atuacoes || null} />
            )}
            {data?.home?.recomendacoes && (
              <Recomendacoes data={data.home.recomendacoes} />
            )}
          </section>
        </div>
        {data?.secao_contato && (
          <Contact
            scrollText={data?.texto_scroll || null}
            data={data.secao_contato || null}
            dataForm={data?.configuracao_do_formulario || null}
          />
        )}
      </main>
    </>
  );
}
