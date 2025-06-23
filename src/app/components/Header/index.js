"use client"; // Necessário para usar hooks no diretório app
import { useState, useEffect, useRef, memo } from "react";
import Nav from "./Nav";
import "./style.scss";
import Link from "next/link";
import DrawerMenu from "./DrawerMenu";
import getPosts from "../../api/getAPI";
import { useSticky } from "../../context/StickyContext";
import SwitchDarkmode from "./SwitchDarkmode";
import SwitchLang from "./SwitchLang";
const Header = ({ logo }) => {
  const { isHeaderSticky, headerRef } = useSticky(); // Pegando o estado global

  const [itemslink, setItemsLink] = useState([]);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  useEffect(() => {
    const fetchItemsLinks = async () => {
      const data = await getPosts("/menus/menu-principal");
      setItemsLink(data);
    };
    fetchItemsLinks();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`text-white ${isHeaderSticky ? "sticky-header" : ""}`}
    >
      <div className="mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 items-center gap-4">
          <div className="col-span-4 md:col-span-3 flex items-center">
            <Link className="logo" href="/">
              {logo ? (
                <img src={logo.url} title={logo.title} alt={logo.description} />
              ) : (
                <span>Logo</span>
              )}
            </Link>
          </div>
          <div className="col-span-6 hidden md:block">
            <Nav data={itemslink} />
          </div>
          <div className="col-span-8 md:col-span-3 flex justify-end items-center md:gap-x-[2rem] gap-x-[1.25rem]">
            <SwitchDarkmode />
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