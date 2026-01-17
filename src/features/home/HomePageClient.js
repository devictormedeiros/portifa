"use client";

import Intro from "@/app/components/Home/Intro";
import Header from "../layout/Header";
import About from "@/app/components/Home/About";
import Projects from "@/app/components/Home/Projects";
import Call from "@/app/components/Home/Call/Call";
import Skills from "@/app/components/Home/Skills/Skills";
import Tecnologias from "@/app/components/Home/Tecnologias";
import Recommendations from "@/app/components/Home/Recommendations";
import Contact from "@/app/components/Contact";
import { useDataOptions } from "@/app/context/DataOptionsContext";
import ScrollLockWrapper from "./wrappers/ScrollLockWrapper";

const HomePageClient = () => {
  const { dataOption: data } = useDataOptions();

  return (
    <>
      {data?.home?.introducao && <Intro data={data.home?.introducao} />}
      <Header />
      <ScrollLockWrapper>
        <main className="main-home flex flex-wrap relative z-[1]">
          {data?.home?.sobre && <About data={data?.home?.sobre || null} />}
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
      </ScrollLockWrapper>
    </>
  );
};

export default HomePageClient;
