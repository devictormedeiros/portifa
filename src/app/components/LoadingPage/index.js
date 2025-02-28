"use client";
import { useState, useEffect } from "react";
import "./style.scss"; // Importa os estilos

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bgFull, setBgFull] = useState(false);

  useEffect(() => {
    const body = document.body;
    // Observa quando o atributo "data-page-load" muda
    const observer = new MutationObserver(() => {
      const pageLoad = body.getAttribute("data-page-load") === "true";
      setIsLoading(pageLoad);

      if (!pageLoad) {
        setTimeout(() => setBgFull(true), 300); // O fundo sobe depois de 0.3s
      }
    });

    observer.observe(body, { attributes: true, attributeFilter: ["data-page-load"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`loading-screen ${!isLoading && bgFull ? "hide" : ""}`}>
      <div className="loading-content">
        <img src="https://devictormedeiros.com/portifa-wp/wp-content/uploads/2025/02/Logo.svg" data-preload="" className="loading-logo" />
      </div>
      <div className={`loading-bg ${!isLoading ? "expand" : ""}`}></div>
    </div>
  );
};

export default LoadingPage;
