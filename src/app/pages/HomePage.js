"use client"; // Necessário para usar hooks no diretório app
import { useState, useEffect, useRef } from "react";

import Header from "../components/Header/Header";
import Sobre from "../components/Home/Sobre/Sobre";
import Intro from "../components/Home/Intro/Intro";
import Tecnologias from "../components/Home/Tecnologias/Tecnologias";
import Contato from "../components/Home/Contato/Contato";
const HomePage = () => {
  return (
    <>
      <Intro/>
      <Header/>
      <main className="grid gap-[64px]">
        <Sobre/>
        <Tecnologias/>
        <Contato/>
      </main>
    </>
  );
};

export default HomePage;
