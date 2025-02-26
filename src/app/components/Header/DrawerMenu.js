"use client";
import { useState, useRef } from "react";

const DrawerMenu = ({ data }) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const navRef = useRef(null);

  const toggleMenu = () => {
    if (buttonRef.current && navRef.current) {
      // Captura a posição atual do botão no momento do clique
      const { left, top, width, height } =
        buttonRef.current.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;

      // Define a origem da transformação com base na posição atual do botão
      navRef.current.style.transformOrigin = `${x}px ${y}px`;

      setTimeout (() => {
        // Alterna o estado do menu
      setOpen((prevOpen) => !prevOpen);
      }, 200);
    }
  };

  return (
    <>
      {/* Botão Hambúrguer */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="fixed z-50 flex items-center justify-center hover:bg-primary rounded-full duration-300 w-12 h-12"
      >
        <div className={`icon-hamburguer ${open ? "open" : ""}`}>
          <span></span>
          <span className="path-hamburguer-animate"></span>
          <span></span>
        </div>
      </button>

      {/* Menu Overlay */}
      <nav
        ref={navRef}
        className={`fixed text-white flex items-center justify-center transform z-40 ${
          open
            ? "nav-open"
            : "scale-0"
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
