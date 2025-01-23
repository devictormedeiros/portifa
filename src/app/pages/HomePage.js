"use client"; // Necessário para usar hooks no diretório app
import { useState, useEffect, useRef } from "react";

import Header from "../components/Header/Header";
import Sobre from "../components/Home/Sobre/Sobre";
import Intro from "../components/Home/Intro/Intro";
import Tecnologias from "../components/Home/Tecnologias/Tecnologias";
import Contato from "../components/Home/Contato/Contato";
import FloatSocial from "../components/FloatSocial";
import { getAcfOptions } from "../api/getAcfOptions";
import { getPosts } from "../api/getPosts";
import LoadingPage from "../components/LoadingPage";

const HomePage = () => {
  const [dataOption, setDataOptions] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const options = await getAcfOptions();
      const posts = await getPosts();
      setDataOptions(options);
      console.log("Options: ", options);
      console.log("posts: ", posts);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    fetchData();
  }, []);

  return (
    isLoading === false ? ( 
      <>
        <Intro data={dataOption?.introducao || null} />
        <Header logo={dataOption?.logo_principal || null} />
        <main className="grid gap-[64px] relative">
          <Sobre data={dataOption?.sobre || null} />
          <Tecnologias data={dataOption?.tecnologias_atuacoes?.itens || null} />
          <Contato
            data={dataOption?.secao_contato || null}
            dataForm={dataOption?.configuracao_do_formulario || null}
          />
        </main>
        <FloatSocial />
      </>
    ) : <LoadingPage />
  ); 
}

export default HomePage;
