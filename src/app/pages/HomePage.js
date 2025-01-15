"use client"; // Necessário para usar hooks no diretório app
import { useState, useEffect, useRef } from "react";

import Header from "../components/Header/Header";
import Sobre from "../components/Home/Sobre/Sobre";
import Intro from "../components/Home/Intro/Intro";
import Tecnologias from "../components/Home/Tecnologias/Tecnologias";
import Contato from "../components/Home/Contato/Contato";
import getPosts from "../api/getPosts";

const HomePage = () => {
  const [dataOption, setDataOptions] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts('/acf/v2/options'); // Chama a função getPosts
      setDataOptions(data); // Salva o retorno no estado
      console.log(data); 
    };

    fetchPosts(); // Executa a busca quando o componente monta

  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <>
      <Intro data={dataOption?.acf?.introducao || null}/>
      <Header logo={dataOption?.acf?.logo_principal || null}/>
      <main className="grid gap-[64px]">
        <Sobre data={dataOption?.acf?.sobre || null}/>
        <Tecnologias/>
        <Contato/>
      </main>
    </>
  );
};

export default HomePage;
