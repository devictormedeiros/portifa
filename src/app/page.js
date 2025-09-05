"use client";
import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import About from "./components/Home/About";
import Intro from "./components/Home/Intro";
import Tecnologias from "./components/Home/Tecnologias";
import Contact from "./components/Contact";
import Projects from "./components/Home/Projects";
import Call from "./components/Home/Call/Call";
import Skills from "./components/Home/Skills/Skills";
import { useDataOptions } from "./context/DataOptionsContext";
import Recommendations from "./components/Home/Recommendations";

const HomePage = () => {
  const { dataOption: data } = useDataOptions();
  const mainRef = useRef(null);
  const [scrollLocked, setScrollLocked] = useState(false);
  const [alreadyLocked, setAlreadyLocked] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (
        scrollLocked ||
        alreadyLocked ||
        !mainRef.current ||
        window.innerWidth < 1024 // só desktop
      ) {
        return;
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = mainRef.current.getBoundingClientRect();

          if (rect.top <= 0 && window.scrollY > 100) {
            setScrollLocked(true);
            setAlreadyLocked(true);
            document.body.style.overflowY = "hidden";

            // Libera o scroll após 2 segundos (2000ms)
            setTimeout(() => {
              document.body.style.overflowY = "auto";
              setScrollLocked(false);
            }, 1600);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollLocked, alreadyLocked]);

  return (
    <>
      {data?.home?.introducao && <Intro data={data.home?.introducao} />}
      <Header />
      <main ref={mainRef} className="main-home flex flex-wrap relative z-[1]">
        {data?.home?.sobre && (
          <About data={data?.home?.sobre || null} />
        )}
        <div className="sec-bg-home w-full grid grid-cols-1 gap-y-[5rem] pb-[5rem] md:pb-[7.72rem] md:gap-y-[8.75rem]">
          {data?.home?.scroll && <Call data={data?.home?.scroll || null} />}
          {data?.home?.projetos && (
            <Projects data={data?.home?.projetos || null} />
          )}
          <section className="grid grid-cols-1 gap-y-[5rem] md:gap-y-[8.75rem]">
            {data?.home?.tabs && <Skills data={data?.home.tabs} />}
            {data?.home?.tecnologias_atuacoes && (
              <Tecnologias data={data?.home?.tecnologias_atuacoes || null} />
            )}
            {data?.home?.recomendacoes && (
              <Recommendations data={data.home?.recomendacoes} />
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
