"use client"; // Necessário para usar hooks no diretório app
import { useState, useEffect, useRef, memo } from "react";
import Nav from "./Nav";
import "./style.scss";
import Link from "next/link";
import DrawerMenu from "./DrawerMenu";
import getPosts from "../../api/getAPI";
const Header = ({ logo }) => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerTop = headerRef.current.getBoundingClientRect().top;
        setIsHeaderSticky(headerTop === 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [itemslink, setItemsLink] = useState([]);
  useEffect(() => {
    const fecthItemsLinks = async () => {
      const data = await getPosts("/menus/menu-principal");
      setItemsLink(data);
    };
    fecthItemsLinks();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`bg-black text-white ${isHeaderSticky ? "sticky-header" : ""}`}
    >
      <div className="mx-auto px-6 md:px-10 py-4">
        <div className="grid grid-cols-12 items-center gap-4">
          <div className="col-span-4 md:col-span-3 flex items-center">
            <Link className="logo" href="/">
              {logo ? (
                <img src={logo.url} title={logo.title} alt={logo.description} />
              ) : (
                <span>Logo</span> // Exibe um texto ou elemento alternativo
              )}
            </Link>
          </div>
          <div className="col-span-6 hidden md:block">
            <Nav data={itemslink} />
          </div>
          <div className="col-span-8 md:col-span-3 flex justify-end items-center md:gap-x-12 gap-x-6">
            <label className="switch-darkmode">
              <input type="checkbox" />
              <span className="slider-darkmode"></span>
            </label>
            <div className="menu-hamburguer">
              <DrawerMenu data={itemslink}/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
