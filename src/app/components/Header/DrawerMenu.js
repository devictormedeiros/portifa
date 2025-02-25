"use client";
import { useState, useRef } from "react";

const DrawerMenu = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState("top right"); // Origem padrão
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    if (buttonRef.current) {
      const { left, top, width, height } =
        buttonRef.current.getBoundingClientRect();
      const x = left + width / 2; // Ponto central X
      const y = top + height / 2; // Ponto central Y

      // Define a origem diretamente antes de abrir
      setOrigin(`${x}px ${y}px`);

      setTimeout(() => {
        setOpen((prev) => !prev);
      }, 10);
    }
  };

  return (
    <>
      {/* Botão Hamburguer */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="fixed z-50 flex items-center justify-center hover:bg-primary rounded-full duration-300 w-12 h-12"
      >
        <div className={`icon-hamburguer ${open ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Menu Overlay */}
      <nav
        style={{
          transformOrigin: origin, // Aplicando inline
        }}
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
