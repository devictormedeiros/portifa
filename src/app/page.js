"use client";
import Header from "./components/Header";
import Sobre from "./components/Home/Sobre";
import Intro from "./components/Home/Intro";
import Tecnologias from "./components/Home/Tecnologias";
import Contato from "./components/Contato/Contato";
import Footer from "./components/Footer";
import Projetos from "./components/Home/Projetos/Projetos";
import Call from "./components/Home/Call/Call";
import Skills from "./components/Home/Skills/Skills";
import Recomendacoes from "./components/Home/Recomendacoes/Recomendacoes";
import { useDataOptions } from "./context/DataOptionsContext";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [dataProjetcs, setDataProjects] = useState(null);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const { dataOption: data, isLoading } = useDataOptions();
  useEffect(() => {
   
    setDataProjects(
      [
        {
            id: 1,
            nome: "Lorem ipsum dolor sit amet",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum.  ",
            img: "/images/projeto.png",
            link: "https://github.com",
            technologies: ["html", "css", "js", "react"]
        },
        {
            id: 2,
            nome: "Lorem ipsum dolor sit amet",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum.  ",
            img: "/images/projeto.png",
            link: "https://github.com",
            technologies: ["html", "css", "js", "react"]
        },
        {
            id: 3,
            nome: "Lorem ipsum dolor sit amet",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum.  ",
            img: "/images/projeto.png",
            link: "https://github.com",
            technologies: ["html", "css", "js", "react"]
        },
    ]
    );
  }, [data]);

  useEffect(() => {
    const handleScroll = (event) => {
      if (!scrollEnabled) {
        event.preventDefault();
        return;
      }
      if (window.innerWidth <= 768) return; // Mantém o scroll normal no mobile
  
      const introSection = document.querySelector(".sec-intro");
      const sectionSobre = document.querySelector(".sec-sobre");
  
      if (!introSection || !sectionSobre) return;
  
      const scrollPosition = window.scrollY;
      const introTop = introSection.offsetTop;
      const introHeight = introSection.offsetHeight;
      const sobreTop = sectionSobre.offsetTop;
      const sobreHeight = sectionSobre.offsetHeight;
  
      // Verifica se o usuário está dentro das seções desejadas (sec-intro ou sec-sobre)
      const isInsideIntro = scrollPosition >= introTop && scrollPosition < introTop + introHeight;
      const isInsideSobre = scrollPosition >= sobreTop && scrollPosition < sobreTop + sobreHeight;
  
      // Se o usuário não estiver dentro dessas seções, não executa nada
      if (!isInsideIntro && !isInsideSobre) return;
  
      if (isInsideIntro && event.deltaY > 0) {
        // Scroll para baixo na sec-intro → vai para sec-sobre
        event.preventDefault();
        setScrollEnabled(false);
        sectionSobre.scrollIntoView({ behavior: "smooth" });
  
        setTimeout(() => {
          setScrollEnabled(true);
        }, 3500);
      } else if (isInsideSobre && event.deltaY < 0) {
        // Scroll para cima na sec-sobre → volta para sec-intro
        event.preventDefault();
        setScrollEnabled(false);
        introSection.scrollIntoView({ behavior: "smooth" });
  
        setTimeout(() => {
          setScrollEnabled(true);
        }, 500);
      }
    };
  
    window.addEventListener("wheel", handleScroll, { passive: false });
  
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollEnabled]);
  

  return (
    <>
      {data?.home.introducao && <Intro data={data.home.introducao} />}

      <Header logo={data?.logo_principal || null} />
      <main className="main-home flex flex-wrap relative z-[1]">
        {data?.home.sobre && <Sobre data={data?.home.sobre || null} />}
        <div className="sec-bg-home w-full grid grid-cols-1 gap-y-[5rem] pb-[5rem] md:pb-[7.72rem] md:gap-y-[8.75rem]">
          {data?.home.highlight && <Call data={data?.home.highlight || null} />}
            {dataProjetcs && <Projetos data={dataProjetcs} />}
            <section className="grid grid-cols-1 gap-y-[5rem] md:gap-y-[8.75rem]">
              {data?.home.tabs && (
                <Skills data={data?.home.tabs} />
              )}
              {data?.home.tecnologias_atuacoes && (
                <Tecnologias data={data?.home.tecnologias_atuacoes || null} />
              )}
              {data?.home.recomendacoes && (
                <Recomendacoes data={data.home.recomendacoes} />
              )}
            </section>
        </div>
        {data?.secao_contato && (
          <Contato
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
