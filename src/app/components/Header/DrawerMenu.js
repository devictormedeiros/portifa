"use client";
import { useState, useRef, useEffect } from "react";

const DrawerMenu = ({ data }) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    if (open) {
      // Aplica imediatamente overflow: hidden ao abrir o menu
      document.documentElement.style.overflowX = "hidden";
      document.body.style.overflowX = "hidden";
    } else {
      // Aguarda 3 segundos antes de remover o overflow hidden e aplicar apenas overflow-x
      const timeout = setTimeout(() => {
        document.documentElement.style.overflowX = ""; // Remove completamente o overflow
        document.body.style.overflowX = "hidden"; // Mantém apenas o overflow-x ocultando a rolagem horizontal
      }, 1000);
  
      return () => clearTimeout(timeout); // Cancela o timeout caso `open` mude antes dos 3s
    }
  }, [open]);
  
  

  return (
    <>
      {/* Botão Hambúrguer */}
      <button
        ref={buttonRef}
       
        className="fixed z-50 flex items-center justify-center"
      >
        <label className={`burger`} htmlFor="burger">
          <input type="checkbox" id="burger" checked={open} onChange={toggleMenu}/>
          <span></span>
          <span className="path-hamburguer-animate"></span>
          <span></span>
        </label>
      </button>
      <div
        className={`bg-nav ${open ? "nav-open" : ""}`}
      ></div>
      {/* Menu Overlay */}
      <nav
        ref={navRef}
        className={`fixed text-white flex items-center justify-center z-40 ${
          open ? "nav-open" : ""
        }`}
      >
        <ul className="text-2xl uppercase font-bold text-center space-y-6">
          {data?.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
                className="content-title-h2 text-gray-200 hover:text-white-100 hover:underline uppercase mb-10 block"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default DrawerMenu;
