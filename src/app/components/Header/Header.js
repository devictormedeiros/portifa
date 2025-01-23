"use client"; // Necessário para usar hooks no diretório app
import { useState, useEffect, useRef } from "react";
import Nav from "./Nav";
import "./style.scss";
import Link from "next/link";
import DrawerMenu from "./DrawerMenu";

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

  return (
    <header
      ref={headerRef}
      className={`bg-black text-white ${isHeaderSticky ? "sticky-header" : ""}`}
    >
      <div className="mx-auto px-10 py-4">
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
            <Nav />
          </div>
          <div className="col-span-8 md:col-span-3 flex justify-end items-center">
            <label className="switch-darkmode mr-6">
              <input type="checkbox" />
              <span className="slider-darkmode"></span>
            </label>
            <div className="menu-hamburguer">
              <DrawerMenu/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
