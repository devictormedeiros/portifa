"use client"; // Necessário para usar hooks no diretório app
import { useState, useEffect, useRef } from "react";

import Header from "../components/Header/Header";
import Sobre from "../components/Home/Sobre/Sobre";
import Intro from "../components/Home/Intro/Intro";
import Tecnologias from "../components/Home/Tecnologias/Tecnologias";
import Contato from "../components/Home/Contato/Contato";
import FloatSocial from "../components/FloatSocial";
import { getAcfOptions } from "../api/getAcfOptions";

const HomePage = () => {
  const [dataOption, setDataOptions] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const options = await getAcfOptions();
      setDataOptions(options);
      console.log("Options: ", options);
    };

    fetchData(); // Executa a busca quando o componente é montado

  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <>
      <Intro data={dataOption?.introducao || null}/>
      <Header logo={dataOption?.logo_principal || null}/>
      <main className="grid gap-[64px] relative">
        <Sobre data={dataOption?.sobre || null}/>
        <Tecnologias data={dataOption?.tecnologias_atuacoes?.itens}/>
        <Contato data={dataOption?.secao_contato} dataForm={dataOption?.configuracao_do_formulario}/>
        <FloatSocial/>
      </main>
  
    </>
  );
};

export default HomePage;
