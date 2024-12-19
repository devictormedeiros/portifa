"use client"; // Necessário para usar hooks no diretório app
import { useState, useEffect, useRef } from "react";

import Header from "../components/Header/Header";
import Sobre from "../components/Home/Sobre/Sobre";
import Intro from "../components/Home/Intro/Intro";
import Tecnologias from "../components/Home/Tecnologias/Tecnologias";
const HomePage = () => {
  return (
    <>
      <Intro/>
      <Header/>
      <main>
        <Sobre/>
        <Tecnologias/>
      </main>
    </>
  );
};

export default HomePage;
