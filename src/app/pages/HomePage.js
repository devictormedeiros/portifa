"use client"; // Necessário para usar hooks no diretório app
import Header from "../components/Header";
import Sobre from "../components/Home/Sobre";
import Intro from "../components/Home/Intro";
import Tecnologias from "../components/Home/Tecnologias";
import Contato from "../components/Contato/Contato";
import FloatSocial from "../components/FloatSocial";
import Footer from "../components/Footer";
import Projetos from "../components/Home/Projetos/Projetos";
import Call from "../components/Home/Call/Call";
import Skills from "../components/Home/Skills/Skills";
import Recomendacoes from "../components/Home/Recomendacoes/Recomendacoes";
import ScrollingTexts from "../components/Home/ScrollText/ScrollText";
import { useEffect, useState } from "react";
const HomePage = ({ data }) => {
  const [dataProjetcs, setDataProjects] = useState(null);

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

  return (
    <>
      {data?.introducao && <Intro data={data.introducao} />}

      <Header logo={data?.logo_principal || null} />
      <main className="main-home flex flex-wrap relative z-[1]">
        {data?.sobre && <Sobre data={data?.sobre || null} />}
        <div className="sec-bg-home w-full grid grid-cols-1 gap-y-[5rem] pb-[5rem] md:pb-[7.72rem] md:gap-y-[8.75rem]">
          {data?.highlight && <Call data={data?.highlight || null} />}
            {dataProjetcs && <Projetos data={dataProjetcs} />}
            <section className="grid grid-cols-1 gap-y-[5rem] md:gap-y-[8.75rem] overflow-x-hidden">
              {data?.tabs && (
                <Skills data={data?.tabs} />
              )}
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
