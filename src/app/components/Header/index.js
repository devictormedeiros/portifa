"use client"; // Necessário para usar hooks no diretório app
import { useState, useEffect, memo } from "react";
import Nav from "./Nav";
import "./style.scss";
import DrawerMenu from "./DrawerMenu";
import getPosts from "../../api/getAPI";
import { useSticky } from "../../context/StickyContext";
import SwitchLang from "./SwitchLang";
import LogoPrincipal from "../Icons/Logos/LogoPrincipal";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
  const { isHeaderSticky, headerRef } = useSticky(); // Pegando o estado global

  const [itemslink, setItemsLink] = useState([]);

  useEffect(() => {
    const fetchItemsLinks = async () => {
      const data = await getPosts("/menus/menu-principal");
      setItemsLink(data);
    };
    fetchItemsLinks();

    const bodyElement = document.body;
    let res;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === bodyElement) {
          clearTimeout(res);

          res = setTimeout(() => {
            ScrollTrigger.update();
            console.log("ScrollTrigger atualizado")
          }, [500]);
        }
      }
    });

    resizeObserver.observe(bodyElement);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`text-white ${isHeaderSticky ? "sticky-header" : ""}`}
    >
      <div className="mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 items-center gap-4">
          <div className="col-span-4 md:col-span-3 flex items-center">
            <a className="logo" href="/" title="Voltar para a página inicial">
              <LogoPrincipal />
            </a>
          </div>
          <div className="col-span-6 hidden md:block">
            <Nav data={itemslink} />
          </div>
          <div className="col-span-8 md:col-span-3 flex justify-end items-center md:gap-x-[2rem] gap-x-[1.25rem]">
            <SwitchLang />
            <div className="menu-hamburguer">
              <DrawerMenu data={itemslink} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
