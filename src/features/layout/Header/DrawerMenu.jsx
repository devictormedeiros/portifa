"use client";

import { useState, useRef, useEffect } from "react";
import SmartLink from "@/components/SmartLink";
import { useLenisInstanceRef } from "@/providers/SmoothScrollProvider.client";
import { resolveMenuHref } from "@/libs/utils/resolveMenuHref";

const DrawerMenu = ({ data, siteOrigin = "" }) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const navRef = useRef(null);
  const lenisRef = useLenisInstanceRef();

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    const lenis = lenisRef?.current;
    const html = document.documentElement;

    const setScrollbarLockVar = () => {
      const w = window.innerWidth - document.documentElement.clientWidth;
      html.style.setProperty("--scrollbar-lock", w > 0 ? `${w}px` : "0px");
    };

    const unlock = () => {
      lenis?.start();
      html.classList.remove("menu-scroll-lock");
      html.style.removeProperty("--scrollbar-lock");
    };

    if (!open) {
      unlock();
      return unlock;
    }

    lenis?.stop();
    setScrollbarLockVar();
    html.classList.add("menu-scroll-lock");
    window.addEventListener("resize", setScrollbarLockVar);

    return () => {
      window.removeEventListener("resize", setScrollbarLockVar);
      unlock();
    };
  }, [open, lenisRef]);

  return (
    <>
      {/* Botão Hambúrguer */}
      <button
        ref={buttonRef}
        className="fixed z-50 flex items-center justify-center"
        title="Menu Burger"
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
                href={resolveMenuHref(item.url, siteOrigin)}
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
