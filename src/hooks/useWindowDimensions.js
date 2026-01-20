// hooks/useWindowDimensions.js or useWindowSize.js
"use client"; // Required for App Router components

import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // This code runs only on the client side
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    // Set initial size after component mounts
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this runs once after initial render

  return windowDimensions;
}
