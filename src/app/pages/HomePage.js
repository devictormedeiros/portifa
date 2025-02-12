"use client"; // Necessário para usar hooks no diretório app
import Header from "../components/Header/Header";
import Sobre from "../components/Home/Sobre/Sobre";
import Intro from "../components/Home/Intro/Intro";
import Tecnologias from "../components/Home/Tecnologias/Tecnologias";
import Contato from "../components/Contato/Contato";
import FloatSocial from "../components/FloatSocial";
import Footer from "../components/Footer";
import Projetos from "../components/Home/Projetos/Projetos";
import Call from "../components/Home/Call/Call";
import Skills from "../components/Home/Skills/Skills";
import Recomendacoes from "../components/Home/Recomendacoes/Recomendacoes";
import ScrollingTexts from "../components/Home/ScrollText/ScrollText";
const HomePage = ({ data }) => {
  return (
    <>
      {data?.introducao && <Intro data={data.introducao} />}
    
      <main className="main-home flex flex-wrap relative z-[1]">
      <Header logo={data?.logo_principal || null} />
        {data?.sobre && <Sobre data={data?.sobre || null} />}
        <div className="sec-bg-home w-full grid grid-cols-1 gap-y-[5rem] pb-[5rem] md:pb-[7.72rem] md:gap-y-[8.75rem]">
          {data?.highlight && <Call data={data?.highlight || null} />}
          <Projetos />
          <section className="grid flex-wrap gap-y-[10rem]">
          {data?.tabs && <Skills data={data?.tabs} />}
          {data?.tecnologias_atuacoes && (
            <Tecnologias data={data?.tecnologias_atuacoes || null} />
          )}
          {data?.recomendacoes && (
          <Recomendacoes data={data.recomendacoes} />
          )}
             </section>
        </div>
        {data?.texto_scroll && (
        <ScrollingTexts data={data?.texto_scroll || null}/>
        )}
        {data?.tecnologias_atuacoes && (
          <Contato
            data={data?.secao_contato || null}
            dataForm={data?.configuracao_do_formulario || null}
          />
        )}
      </main>
      {data?.tecnologias_atuacoes && <FloatSocial data={data?.secao_contato} />}
      <Footer />
    </>
  );
};

export default HomePage;
