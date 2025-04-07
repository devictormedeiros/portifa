"use client";
import React from "react";
import { useRef, useEffect } from "react";
import { useDataOptions } from "@/app/context/DataOptionsContext";
import Contato from "@/app/components/Contato/Contato";
import Header from "@/app/components/Header";
import "./style.scss";

const Single = () => {
  const { dataOption } = useDataOptions();
  const technologies = [
    { id: 1, name: "Nome Tecnologia", icon: "/images/vector.svg" },
    { id: 2, name: "Nome Tecnologia", icon: "/images/vector.svg" },
    { id: 3, name: "Nome Tecnologia", icon: "/images/vector.svg" },
    { id: 4, name: "Nome Tecnologia", icon: "/images/vector.svg" },
    { id: 5, name: "Nome Tecnologia", icon: "/images/vector.svg" },
    { id: 6, name: "Nome Tecnologia", icon: "/images/vector.svg" },
    { id: 7, name: "Nome Tecnologia", icon: "/images/vector.svg" },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const slider = scrollRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.classList.add("dragging");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove("dragging");
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove("dragging");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5; // multiplicador de velocidade
      slider.scrollLeft = scrollLeft - walk;
    };

    slider?.addEventListener("mousedown", handleMouseDown);
    slider?.addEventListener("mouseleave", handleMouseLeave);
    slider?.addEventListener("mouseup", handleMouseUp);
    slider?.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider?.removeEventListener("mousedown", handleMouseDown);
      slider?.removeEventListener("mouseleave", handleMouseLeave);
      slider?.removeEventListener("mouseup", handleMouseUp);
      slider?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Project data array
  const projects = Array(15).fill({
    title: "LOREM IPSUM DOLOR",
    image: "/images/image-15.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus, tortor id cursus scelerisque, quam.Lorem ipsum dolor amet [...]",
    icons: Array(4).fill("images/frame-13563.svg"),
  });

  return (
    <>
      <Header logo={dataOption?.logo_principal || null} />
      <main className="main-archive">
        {/* Content Wrapper Section */}
        <section className="flex flex-col w-full items-center mb-[3rem] lg:mb-[4rem]">
          <div className="relative w-full h-[360px] md:h-[450px]">
            <div
              className="w-full h-[360px] md:h-[450px] bg-[url(/images/image.png)] bg-cover bg-center"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 w-full h-full [background:linear-gradient(180deg,rgba(13,13,13,1)_0%,rgba(13,13,13,0.6)_33%,rgba(13,13,13,0.6)_67%,rgba(13,13,13,1)_100%)]"
              aria-hidden="true"
            />
          </div>
            <div className="container relative lg:mt-[-4rem]">
                <div className="flex flex-col gap-[1.5rem] pb-[3rem] border-b border-[#FFFFFF33] lg:flex-row lg:items-end lg:gap-[5rem]">
                    <div className="lg:min-w-[41.125rem]">
                        <small className="content-text-bold text-white-70">
                            Guia de Viagens
                        </small>
                        <div className="flex items-center gap-[2.0625rem] mb-[1rem] lg:gap-[4rem]">
                            <h1 className="content-title-h2 text-gray-200 uppercase">
                                Sistema FAROL
                            </h1>
                            <a>
                            Acessar
                            </a>
                        </div>
                        <div
                            className="scroll-drag flex items-center gap-8 relative self-stretch w-full overflow-x-auto list-categories"
                        >
                            <button
                            className="text-white-70 border border-white-20 hover:border-primary hover:bg-primary hover:text-gray-900 menu-section flex items-center py-2 px-6 rounded-3xl gap-x-2 flex-none duration-500"> 
                                Nome Tecnologia
                            </button>
                        </div>
                    </div>
                    <p className="text-white-70 feed-excerpt lg:flex-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum. 
                    </p>
                </div>
            </div>
        </section>

        <section className="single-container w-full mb-[5rem] lg:mb-[7.5rem]">
            <div className="w-full max-w-[59.5rem] mx-auto">
                <p className="content-text text-white-70">
                    O Farol é um sistema interativo que tem desde a concepção o objetivo de proporcionar uma nova experiência na hora de você viajar, maximizando a sua vivência ao conhecer um local. Esse diferencial se dá através de uma nova abordagem, explorando e oferecendo ao usuário as características impares que aquela cidade possui.  Dentro do sistema, o usuário tem a possibilidade de contado com as atrações, comércios, aspectos naturais, história, cultura entre tantos outros elementos característicos de uma cidade, feito de maneira organicamente singular, integrando aspectos e experiências dos habitantes ao sistema.
                </p>
            </div>
        </section>

        <section className="bg-gradient-primary-d pt-[5rem] lg:pt-[7.5rem]">
          <div className="container">
            <div className="py-4 antialiased font-sans text-xl text-left font-semibold leading-snug select-none transition-colors flex items-center justify-between w-full pb-2 pt-0 text-gray-200 hover:text-gray-200 uppercase border-b border-white-10">
              <h2 className="content-title-h2 text-gray-200 mb-[1rem] uppercase md:mb-6">
              MAIS projetos
              </h2>
            </div>
          </div>
        </section>

        {dataOption && dataOption.secao_contato && (
          <Contato
            scrollText={dataOption.texto_scroll || null}
            data={dataOption.secao_contato}
            dataForm={dataOption.configuracao_do_formulario || null}
          /> 
        )}
        </main>
    </>
  );
};

export default Single;