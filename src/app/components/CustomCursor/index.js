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
      } else if (e.target.closest("a, button, .cursor-link")) {
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

  const renderSVG = () => {
    const color = "var(--primary)";
    switch (cursorType) {
      case "link":
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" style={{ color }}>
            <circle cx="20" cy="20" r="18" fill="currentColor" opacity="0.3" />
            <circle
              cx="20"
              cy="20"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        );
      case "expand":
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" style={{ color }}>
            <path
              d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
              fill="currentColor"
              opacity="0.8"
            />
            <path
              d="M37.8391 20C37.8391 29.8523 29.8523 37.8391 20 37.8391C10.1477 37.8391 2.16091 29.8523 2.16091 20C2.16091 10.1477 10.1477 2.16091 20 2.16091C29.8523 2.16091 37.8391 10.1477 37.8391 20Z"
              stroke="currentColor"
              strokeOpacity="0.4"
              strokeWidth="4.32183"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "scroll":
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" style={{ color }}>
            <rect width="40" height="40" rx="20" fill="currentColor" opacity="0.3" />
            <path
              d="M20 12L20 28"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M16 24L20 28L24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M16 16L20 12L24 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      default:
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" style={{ color }}>
            <circle cx="10" cy="10" r="5" fill="currentColor" />
          </svg>
        );
    }
  };

  return (
    <div
      className={`custom-cursor ${isScrolling ? "scrolling" : ""}`}
      style={{
        left: positions.x,
        top: positions.y,
        color: "var(--primary)",
      }}
    >
      {renderSVG()}
    </div>
  );
};

export default CustomCursor;
