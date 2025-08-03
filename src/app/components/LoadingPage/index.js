"use client";
import { useState, useEffect } from "react";
import "./style.scss"; // Importa os estilos
import LogoPrincipal from "../Icons/Logos/LogoPrincipal";

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bgFull, setBgFull] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  useEffect(() => {
    const body = document.body;
    // Observa quando o atributo "data-page-load" muda
    const observer = new MutationObserver(() => {
      const pageLoad = body.getAttribute("data-page-load") === "true";
      setIsLoading(pageLoad);

      if (!pageLoad) {
        setTimeout(() => setBgFull(true), 300); // O fundo sobe depois de 0.3s
        setTimeout(() => setShowIcon(true), 2000); // O icon aparece depois de 2s
      }
    });

    observer.observe(body, {
      attributes: true,
      attributeFilter: ["data-page-load"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`loading-screen ${!isLoading ? "expand" : ""}  ${
        !isLoading && bgFull ? "hide" : ""
      }`}
    >
      <div className="loading-content">
        <div className="flex flex-wrap flex-col items-center gap-2">
          <LogoPrincipal />
          <div
            className={`icon-loading ${showIcon ? "visible" : "invisible"}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
