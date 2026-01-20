import Intro from "@/features/home/sections/Intro";
import Header from "@/features/layout/Header";
import ScrollLockWrapper from "@/features/home/wrappers/ScrollLockWrapper";
import About from "@/features/home/sections/About";
import Call from "@/features/home/sections/Call";
import Projects from "@/features/home/sections/Projects";
import Skills from "@/features/home/sections/Skills/Skills";
import Tecnologias from "@/features/home/sections/Tecnologias";
import Recommendations from "@/features/home/sections/Recommendations";
import Footer from "../features/layout/Footer";

import { getHomeData } from "@/features/home/services/home.service";

export default async function Home() {
  const data = await getHomeData();

  return (
    <>
      {data?.introducao && <Intro data={data.introducao} />}
      <Header />
      <ScrollLockWrapper>
        <main className="main-home flex flex-wrap relative z-[1]">
          {data?.sobre && <About data={data?.sobre || null} />}
          <div className="sec-bg-home w-full grid grid-cols-1 gap-y-[5rem] pb-[5rem] md:pb-[7.72rem] md:gap-y-[8.75rem]">
            {data?.scroll && <Call data={data?.scroll || null} />}
            {data?.projetos && <Projects projects={data?.projetos || null} />}
            <section className="grid grid-cols-1 gap-y-[5rem] md:gap-y-[8.75rem]">
              {data?.tabs && <Skills data={data?.tabs} />}
              {data?.tecnologias_atuacoes && (
                <Tecnologias data={data?.tecnologias_atuacoes || null} />
              )}
              {data?.recomendacoes && (
                <Recommendations data={data.recomendacoes} />
              )}
            </section>
          </div>
          <Footer />
        </main>
      </ScrollLockWrapper>
    </>
  );
}
