"use client"; // Necessário para usar hooks no diretório app
import { useState, useEffect, useRef } from "react";
import Nav from "./Nav";
import "./style.scss";
import Link from 'next/link'

const Header = ({logo}) =>{

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

    return(
        <header
        ref={headerRef}
        className={`bg-black text-white ${
          isHeaderSticky ? "sticky-header" : ""
        }`}
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
            <Nav/>
            </div>
            <div className="col-span-8 md:col-span-3 flex justify-end">
              <label className="switch-darkmode mr-6">
                <input type="checkbox" />
                <span className="slider-darkmode"></span>
              </label>
              <div className="menu-hamburguer flex items-center gap-2">
                <svg
                  width="28"
                  height="24"
                  viewBox="0 0 33 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 1.84615C0 0.826551 0.619913 0 1.38462 0H30.9231C31.6878 0 32.3077 0.826551 32.3077 1.84615C32.3077 2.86576 31.6878 3.69231 30.9231 3.69231H1.38462C0.619913 3.69231 0 2.86576 0 1.84615Z"
                    fill="#EDEDED"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 12C0 10.9804 0.619913 10.1538 1.38462 10.1538H30.9231C31.6878 10.1538 32.3077 10.9804 32.3077 12C32.3077 13.0196 31.6878 13.8461 30.9231 13.8461H1.38462C0.619913 13.8461 0 13.0196 0 12Z"
                    fill="#EDEDED"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 22.1539C0 21.1343 0.619913 20.3077 1.38462 20.3077H30.9231C31.6878 20.3077 32.3077 21.1343 32.3077 22.1539C32.3077 23.1735 31.6878 24 30.9231 24H1.38462C0.619913 24 0 23.1735 0 22.1539Z"
                    fill="#EDEDED"
                  />
                </svg>
                <span>Menu</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header