import { ProjectsProvider } from "../context/ProjectsContext";
import { DataOptionsProvider } from "../context/DataOptionsContext";
import LayoutWrapper from "../components/LayoutWrapper";
import Intro from "../components/Home/Intro";
import Header from "@/features/layout/Header";
import ScrollLockWrapper from "@/features/home/wrappers/ScrollLockWrapper";
import About from "../components/Home/About";
import Call from "../components/Home/Call/Call";
import Projects from "../components/Home/Projects";
import Skills from "../components/Home/Skills/Skills";
import Tecnologias from "../components/Home/Tecnologias";
import Recommendations from "../components/Home/Recommendations";
import Contact from "../components/Contact";
import { getHomeData } from "@/features/home/services/home.service";
import { getGeneralData } from "@/services/general.service";

export default async function Home() {
  const {
    menu,
    logo,
    texto_scroll,
    secao_contato,
    configuracao_do_formulario,
    code_editor,
    styleguide,
    idiomas_exibidos,
    idiomaDefault,
    idioma_padrao,
  } = await getGeneralData();

  const { data } = await getHomeData();

  return (
    <ProjectsProvider>
      <DataOptionsProvider>
        <LayoutWrapper code_editor={code_editor} styleguide={styleguide}>
          {data?.introducao && <Intro data={data.introducao} />}
          <Header
            logo={logo || null}
            menu={menu || null}
            idiomas={{
              idiomas_exibidos,
              idiomaDefault,
              idioma_padrao,
            }}
          />
          <ScrollLockWrapper>
            <main className="main-home flex flex-wrap relative z-[1]">
              {data?.sobre && <About data={data?.sobre || null} />}
              <div className="sec-bg-home w-full grid grid-cols-1 gap-y-[5rem] pb-[5rem] md:pb-[7.72rem] md:gap-y-[8.75rem]">
                {data?.scroll && <Call data={data?.scroll || null} />}
                {data?.projetos && <Projects data={data?.projetos || null} />}
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
              {secao_contato && (
                <Contact
                  scrollText={texto_scroll}
                  data={secao_contato}
                  dataForm={configuracao_do_formulario}
                />
              )}
            </main>
          </ScrollLockWrapper>
        </LayoutWrapper>
      </DataOptionsProvider>
    </ProjectsProvider>
  );
}
