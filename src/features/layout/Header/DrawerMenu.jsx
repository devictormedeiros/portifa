"use client";
import { useState, useRef, useEffect } from "react";
import SmartLink from "@/app/components/SmartLink";

const DrawerMenu = ({ data }) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflowX = "hidden";
    } else {
      const timeout = setTimeout(() => {
        document.body.style.overflowX = "hidden";
      }, 1000);

      return () => clearTimeout(timeout);
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
          <input
            type="checkbox"
            id="burger"
            checked={open}
            onChange={toggleMenu}
          />
          <span></span>
          <span className="path-hamburguer-animate"></span>
          <span></span>
        </label>
      </button>
      <div className={`bg-nav ${open ? "nav-open" : ""}`}></div>
      {/* Menu Overlay */}
      <nav
        ref={navRef}
        className={`fixed text-white flex items-center flex-col gap-5 justify-center z-40 ${
          open ? "nav-open" : ""
        }`}
      >
        <ul className="text-2xl uppercase font-bold text-center space-y-6">
          {data?.map((item, index) => (
            <li key={index}>
              <SmartLink
                href={item.url}
                className="content-title-h2 text-gray-700 hover:text-white-100 hover:underline uppercase mb-10 block"
              >
                {item.title}
              </SmartLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default DrawerMenu;
