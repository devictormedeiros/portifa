"use client";

import React, { useEffect, useState } from "react";
import "./style.scss";

const CustomCursor = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHoveringScrollHorizontal, setIsHoveringScrollHorizontal] = useState(false);

  useEffect(() => {
    // Atualiza a posição do cursor
    const handleMouseMove = (e) => {
      setPositions({ x: e.clientX, y: e.clientY });
    };

    // Detecta quando o cursor está sobre um elemento com classe "scroll-horizontal"
    const handleMouseOver = (e) => {
      if (e.target.closest(".scroll-horizontal")) {
        setIsHoveringScrollHorizontal(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest(".scroll-horizontal")) {
        setIsHoveringScrollHorizontal(false);
      }
    };

    // Detecta scroll vertical na página inteira
    let scrollTimeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 300); // Remove após 300ms sem scroll
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isScrolling ? "scrolling" : ""} ${isHoveringScrollHorizontal ? "scroll-horizontal" : ""}`}
      style={{
        left: positions.x,
        top: positions.y,
      }}
    />
  );
};

export default CustomCursor;
