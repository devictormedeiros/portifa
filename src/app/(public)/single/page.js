"use client";
import React from "react";
import { useRef, useEffect } from "react";
import { useDataOptions } from "@/app/context/DataOptionsContext";
import Contato from "@/app/components/Contato/Contato";
import Header from "@/app/components/Header";
import "./style.scss";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import Html from "@/app/components/Icons/Html";
import { Link } from "react-router-dom";

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
        <section className="flex flex-col w-full items-center">
          <div className="relative w-full h-[22.5rem] md:h-[28.125rem]">
            <div
              className="w-full h-[360px] md:h-[450px] bg-[url(/images/image.png)] bg-cover bg-center"
              aria-hidden="true"
            ></div>
            <div
              className="absolute inset-0 w-full h-full [background:linear-gradient(180deg,rgba(13,13,13,1)_0%,rgba(13,13,13,0.6)_33%,rgba(13,13,13,0.6)_67%,rgba(13,13,13,1)_100%)]"
              aria-hidden="true"
            ></div>
          </div>
        </section>

        <div className="single-container container relative mt-[-3rem]">
          <div className="flex flex-col gap-[1.5rem] pb-[3rem] border-b border-[#FFFFFF33] lg:flex-row lg:items-end lg:gap-[5rem]">
            <div className="lg:min-w-[41.125rem]">
              <small className="content-text-bold text-white-70">
                Guia de Viagens
              </small>
              <div className="flex items-center gap-[2.0625rem] mb-[1rem] lg:gap-[4rem]">
                <h1 className="content-title-h2 text-gray-200 uppercase">
                  Sistema FAROL
                </h1>
                <a href="/" className="text-gray-200 bg-white-10 hover:bg-primary menu-section flex items-center py-2 px-4 rounded-3xl gap-x-2 flex-none duration-500" title="Acessar">
                  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.75 15.5C9.94891 15.5 10.1397 15.421 10.2803 15.2803C10.421 15.1397 10.5 14.9489 10.5 14.75C10.5 14.5511 10.421 14.3603 10.2803 14.2197C10.1397 14.079 9.94891 14 9.75 14H3.5C2.96957 14 2.46086 13.7893 2.08579 13.4142C1.71071 13.0391 1.5 12.5304 1.5 12V4C1.5 3.46957 1.71071 2.96086 2.08579 2.58579C2.46086 2.21071 2.96957 2 3.5 2H9.75C9.94891 2 10.1397 1.92098 10.2803 1.78033C10.421 1.63968 10.5 1.44891 10.5 1.25C10.5 1.05109 10.421 0.860322 10.2803 0.71967C10.1397 0.579018 9.94891 0.5 9.75 0.5H3.5C2.57174 0.5 1.6815 0.868749 1.02513 1.52513C0.368749 2.1815 0 3.07174 0 4V12C0 12.9283 0.368749 13.8185 1.02513 14.4749C1.6815 15.1313 2.57174 15.5 3.5 15.5H9.75ZM10.741 4.199C10.8134 4.13214 10.8982 4.08019 10.9906 4.04612C11.083 4.01205 11.1813 3.99652 11.2797 4.00042C11.3781 4.00432 11.4748 4.02757 11.5643 4.06885C11.6537 4.11013 11.7342 4.16863 11.801 4.241L14.801 7.491C14.9291 7.62957 15.0002 7.81132 15.0002 8C15.0002 8.18868 14.9291 8.37043 14.801 8.509L11.801 11.759C11.6659 11.905 11.4783 11.9913 11.2795 11.999C11.0807 12.0067 10.887 11.9351 10.741 11.8C10.595 11.6649 10.5087 11.4773 10.501 11.2785C10.4933 11.0797 10.5649 10.886 10.7 10.74L12.538 8.749H4.75C4.55109 8.749 4.36032 8.66998 4.21967 8.52933C4.07902 8.38868 4 8.19791 4 7.999C4 7.80009 4.07902 7.60932 4.21967 7.46867C4.36032 7.32802 4.55109 7.249 4.75 7.249H12.537L10.699 5.258C10.6321 5.18565 10.5802 5.10084 10.5461 5.0084C10.512 4.91597 10.4965 4.81773 10.5004 4.7193C10.5043 4.62086 10.5276 4.52416 10.5689 4.43472C10.6101 4.34527 10.6686 4.26583 10.741 4.199Z" fill="#DEDEDE"/>
                  </svg>
                  Acessar
                </a>
              </div>
              <div 
                ref={scrollRef}
                className="scroll-drag flex items-center gap-8 relative self-stretch w-full overflow-x-auto list-categories w-full lg:max-w-[41.125rem] lg:gap-4">
                <button
                  className="border border-white-70 text-white-70 hover:bg-primary hover:border-primary menu-section flex items-center py-[0.375rem] px-4 rounded-3xl gap-x-2 flex-none duration-500"
                >
                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.636719 0L2.24172 18L9.44422 20L16.6655 17.9975L18.273 0H0.636719ZM14.7792 5.8875H6.33172L6.53297 8.14875H14.5792L13.973 14.9263L9.44422 16.1812L4.92172 14.9263L4.61297 11.4587H6.82922L6.98672 13.2212L9.44547 13.8838L9.45047 13.8825L11.9105 13.2188L12.1655 10.3562H4.51422L3.91922 3.68H14.978L14.7792 5.8875Z" fill="white" fill-opacity="0.7"/>
                  </svg>
                  Nome Tecnologia
                </button>
                <button
                  className="border border-white-70 text-white-70 hover:bg-primary hover:border-primary menu-section flex items-center py-[0.375rem] px-4 rounded-3xl gap-x-2 flex-none duration-500"
                >
                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.636719 0L2.24172 18L9.44422 20L16.6655 17.9975L18.273 0H0.636719ZM14.7792 5.8875H6.33172L6.53297 8.14875H14.5792L13.973 14.9263L9.44422 16.1812L4.92172 14.9263L4.61297 11.4587H6.82922L6.98672 13.2212L9.44547 13.8838L9.45047 13.8825L11.9105 13.2188L12.1655 10.3562H4.51422L3.91922 3.68H14.978L14.7792 5.8875Z" fill="white" fill-opacity="0.7"/>
                  </svg>
                  Nome Tecnologia
                </button>
                <button
                  className="border border-white-70 text-white-70 hover:bg-primary hover:border-primary menu-section flex items-center py-[0.375rem] px-4 rounded-3xl gap-x-2 flex-none duration-500"
                >
                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.636719 0L2.24172 18L9.44422 20L16.6655 17.9975L18.273 0H0.636719ZM14.7792 5.8875H6.33172L6.53297 8.14875H14.5792L13.973 14.9263L9.44422 16.1812L4.92172 14.9263L4.61297 11.4587H6.82922L6.98672 13.2212L9.44547 13.8838L9.45047 13.8825L11.9105 13.2188L12.1655 10.3562H4.51422L3.91922 3.68H14.978L14.7792 5.8875Z" fill="white" fill-opacity="0.7"/>
                  </svg>
                  Nome Tecnologia
                </button>
                <button
                  className="border border-white-70 text-white-70 hover:bg-primary hover:border-primary menu-section flex items-center py-[0.375rem] px-4 rounded-3xl gap-x-2 flex-none duration-500"
                >
                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.636719 0L2.24172 18L9.44422 20L16.6655 17.9975L18.273 0H0.636719ZM14.7792 5.8875H6.33172L6.53297 8.14875H14.5792L13.973 14.9263L9.44422 16.1812L4.92172 14.9263L4.61297 11.4587H6.82922L6.98672 13.2212L9.44547 13.8838L9.45047 13.8825L11.9105 13.2188L12.1655 10.3562H4.51422L3.91922 3.68H14.978L14.7792 5.8875Z" fill="white" fill-opacity="0.7"/>
                  </svg>
                  Nome Tecnologia
                </button>
                <button
                  className="border border-white-70 text-white-70 hover:bg-primary hover:border-primary menu-section flex items-center py-[0.375rem] px-4 rounded-3xl gap-x-2 flex-none duration-500"
                >
                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.636719 0L2.24172 18L9.44422 20L16.6655 17.9975L18.273 0H0.636719ZM14.7792 5.8875H6.33172L6.53297 8.14875H14.5792L13.973 14.9263L9.44422 16.1812L4.92172 14.9263L4.61297 11.4587H6.82922L6.98672 13.2212L9.44547 13.8838L9.45047 13.8825L11.9105 13.2188L12.1655 10.3562H4.51422L3.91922 3.68H14.978L14.7792 5.8875Z" fill="white" fill-opacity="0.7"/>
                  </svg>
                  Nome Tecnologia
                </button>
                <button
                  className="border border-white-70 text-white-70 hover:bg-primary hover:border-primary menu-section flex items-center py-[0.375rem] px-4 rounded-3xl gap-x-2 flex-none duration-500"
                >
                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.636719 0L2.24172 18L9.44422 20L16.6655 17.9975L18.273 0H0.636719ZM14.7792 5.8875H6.33172L6.53297 8.14875H14.5792L13.973 14.9263L9.44422 16.1812L4.92172 14.9263L4.61297 11.4587H6.82922L6.98672 13.2212L9.44547 13.8838L9.45047 13.8825L11.9105 13.2188L12.1655 10.3562H4.51422L3.91922 3.68H14.978L14.7792 5.8875Z" fill="white" fill-opacity="0.7"/>
                  </svg>
                  Nome Tecnologia
                </button>
              </div>
            </div>
            <p className="text-white-70 feed-excerpt lg:flex-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              non diam sit amet enim euismod blandit luctus lacinia lorem.
              Vestibulum ultricies est turpis, ut pulvinar lorem tempor a.
              Fusce eros nisl, molestie id sapien in, aliquam consequat enim.
              Nam id ipsum ultricies ex vulputate condimentum.
            </p>
          </div>
        </div>

        <section className="single-container w-full mb-[5rem] lg:mb-[7.5rem]">
          <div className="w-full max-w-[59.5rem] mx-auto">
            <p className="content-text text-white-70">
              O Farol é um sistema interativo que tem desde a concepção o
              objetivo de proporcionar uma nova experiência na hora de você
              viajar, maximizando a sua vivência ao conhecer um local. Esse
              diferencial se dá através de uma nova abordagem, explorando e
              oferecendo ao usuário as características impares que aquela cidade
              possui. Dentro do sistema, o usuário tem a possibilidade de
              contado com as atrações, comércios, aspectos naturais, história,
              cultura entre tantos outros elementos característicos de uma
              cidade, feito de maneira organicamente singular, integrando
              aspectos e experiências dos habitantes ao sistema.
            </p>
          </div>
        </section>

        <section className="bg-gradient-primary-d pt-[5rem] lg:pt-[7.5rem]">
          <div className="container">
            <div className="py-4 antialiased font-sans text-xl text-left font-semibold leading-snug select-none transition-colors flex items-center justify-between w-full pb-2 pt-0 text-gray-200 hover:text-gray-200 uppercase border-b border-white-10">
              <h2 className="content-title-h2 text-gray-200 mb-[1rem] uppercase md:mb-6">
                Mais Projetos
              </h2>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Single;
