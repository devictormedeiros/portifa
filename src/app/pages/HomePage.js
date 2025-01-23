"use client"; // Necessário para usar hooks no diretório app
import { useState, useEffect, useRef } from "react";

import Header from "../components/Header/Header";
import Sobre from "../components/Home/Sobre/Sobre";
import Intro from "../components/Home/Intro/Intro";
import Tecnologias from "../components/Home/Tecnologias/Tecnologias";
import Projetos from "../components/Home/Projetos/Projetos";
import Call from "../components/Home/Call/Call";
import Skills from "../components/Home/Skills/Skills";
import Recomendacoes from "../components/Home/Recomendacoes/Recomendacoes";
const HomePage = () => {
  return (
    <>
      <Intro/>
      <Header/>
      <main>
        <Sobre/>
        <Call />
        <Projetos />
        <Tecnologias/>
        <Skills 
          sectionTitle={"Experiência"}
        />
        <Skills 
          sectionTitle={"Formação"}
        />
        <Recomendacoes 
          sectionTitle={"Recomendações"}
        />
      </main>
    </>
  );
};

export default HomePage;
