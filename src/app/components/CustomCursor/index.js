"use client";

import React, { useEffect, useState } from "react";
import "./style.scss";

const CustomCursor = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const [cursorType, setCursorType] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPositions({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest(".cursor-expand")) {
        setCursorType("expand");
      } else if (e.target.closest(".cursor-horizontal")) {
        setCursorType("scroll");
      } else if (e.target.closest("a, button")) {
        setCursorType("link");
      } else {
        setCursorType("default");
      }
    };
    

    const handleMouseOut = () => {
      setCursorType("default");
    };

    let scrollTimeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 300);
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
      className={`custom-cursor cursor-${cursorType} ${isScrolling ? "scrolling" : ""}`}
      style={{
        left: positions.x,
        top: positions.y,
      }}
    />
  );
};

export default CustomCursor;
