"use client";
import Header from "./components/Header";
import About from "./components/Home/About";
import Intro from "./components/Home/Intro";
import Tecnologias from "./components/Home/Tecnologias";
import Contact from "./components/Contact";
import Projects from "./components/Home/Projects";
import Call from "./components/Home/Call/Call";
import Skills from "./components/Home/Skills/Skills";
import { useDataOptions } from "./context/DataOptionsContext";
import { useEffect, useState } from "react";
import Recommendations from "./components/Home/Recommendations";

const HomePage = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true); // Controla se o scroll está liberado ou não
  const [firstScroll, setFirstScroll] = useState(true); // ✅ Controla se é a primeira vez
  const { dataOption: data } = useDataOptions();

  useEffect(() => {
    const handleScroll = (event) => {
      if (!scrollEnabled) {
        event.preventDefault();
        return;
      }

      if (window.innerWidth <= 768) return; // Mantém scroll normal no mobile

      const introSection = document.querySelector(".sec-intro");
      const sectionAbout = document.querySelector(".sec-about");

      if (!introSection || !sectionAbout) return;

      const scrollPosition = window.scrollY;
      const introTop = introSection.offsetTop;
      const introHeight = introSection.offsetHeight;
      const sobreTop = sectionAbout.offsetTop;
      const sobreHeight = sectionAbout.offsetHeight;

      const isInsideIntro =
        scrollPosition >= introTop && scrollPosition < introTop + introHeight;
      const isInsideSobre =
        scrollPosition >= sobreTop && scrollPosition < sobreTop + sobreHeight;

      if (!isInsideIntro && !isInsideSobre) return;

      // Sempre permitir o efeito, mas travar só na primeira vez
      if (isInsideIntro && event.deltaY > 0) {
        event.preventDefault();
        setScrollEnabled(false);

        // Faz o scroll suave para a seção "about"
        sectionAbout.scrollIntoView({ behavior: "smooth" });
        
        if (firstScroll) {
          setFirstScroll(false);
          setTimeout(() => {
            setScrollEnabled(true);
          }, 3500);
        } else {
          setScrollEnabled(true);
        }
      }

      // Scroll de volta da sec-about para sec-intro
      else if (isInsideSobre && event.deltaY < 0) {
        event.preventDefault();
        setScrollEnabled(false);
        introSection.scrollIntoView({ behavior: "smooth" });

        // Na volta, não precisamos de delay, sempre libera rápido
        setTimeout(() => {
          setScrollEnabled(true);
        }, 500);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollEnabled, firstScroll]);

  return (
    <>
      {data?.home.introducao && <Intro data={data.home.introducao} />}
      <Header />
      <main className="main-home flex flex-wrap relative z-[1]">
        {data?.home.sobre && <About data={data?.home.sobre || null} />}
        <div className="sec-bg-home w-full grid grid-cols-1 gap-y-[5rem] pb-[5rem] md:pb-[7.72rem] md:gap-y-[8.75rem]">
          {data?.home?.scroll && <Call data={data?.home?.scroll || null} />}
          {data?.home.projetos && (
            <Projects data={data?.home?.projetos || null} />
          )}
          <section className="grid grid-cols-1 gap-y-[5rem] md:gap-y-[8.75rem]">
            {data?.home.tabs && <Skills data={data?.home.tabs} />}
            {data?.home.tecnologias_atuacoes && (
              <Tecnologias data={data?.home.tecnologias_atuacoes || null} />
            )}
            {data?.home.recomendacoes && (
              <Recommendations data={data.home.recomendacoes} />
            )}
          </section>
        </div>
        {data?.secao_contato && (
          <Contact
            scrollText={data?.texto_scroll || null}
            data={data?.secao_contato || null}
            dataForm={data?.configuracao_do_formulario || null}
          />
        )}
      </main>
    </>
  );
};

export default HomePage;
