"use client";
import { useState, useRef, useEffect } from "react";

const DrawerMenu = ({ data }) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const navRef = useRef(null);
  const [position, setPosition] = useState({ top: 0});

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    const updatePosition = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const newPosition = { top: rect.top };

        // Atualiza o estado apenas se a posição mudou
        setPosition((prevPosition) => {
          if (
            prevPosition.top !== newPosition.top
          ) {
            return newPosition;
          }
          return prevPosition;
        });
      }
    };

    // Observador de redimensionamento
    const resizeObserver = new ResizeObserver(updatePosition);
    if (buttonRef.current) {
      resizeObserver.observe(buttonRef.current);
    }

    // Observador de interseção (detecta movimento na tela)
    const intersectionObserver = new IntersectionObserver(
      () => updatePosition(),
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );
    if (buttonRef.current) {
      intersectionObserver.observe(buttonRef.current);
    }

    // Adiciona eventos para atualizar posição ao rolar a tela ou mover o mouse
    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("scroll", updatePosition);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return (
    <>
      {/* Botão Hambúrguer */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="fixed z-50 flex items-center justify-center md:hover:bg-primary rounded-full duration-300 w-12 h-12"
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
        style={{ transformOrigin: `calc(100% - 2.5rem - 26px) calc(${position.top.toFixed(2)}px + 20px)` }}

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
