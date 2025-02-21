"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "./style.scss";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "./unlink.json";

const CustomCursor = () => {
  const [positions, setPositions] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [modifiedAnimationData, setModifiedAnimationData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);

      // Obtém a cor da variável CSS
      const primaryRgb = getComputedStyle(document.documentElement).getPropertyValue("--primary-rgb");
      const valuesRgb = primaryRgb.match(/\d+/g).slice(0, 3); // Extrai apenas os valores R, G e B
      const vRgb = valuesRgb.map(value => (value / 255).toFixed(3)); // Normaliza os valores

      console.log("Valores Normalizados:", vRgb);

      // Faz uma cópia do JSON para evitar mutação do original
      const newAnimationData = JSON.parse(JSON.stringify(animationData));

      // Substitui os valores no JSON para os dois caminhos
      if (
        newAnimationData.layers &&
        newAnimationData.layers[0]?.ef &&
        newAnimationData.layers[0].ef[0]?.ef &&
        newAnimationData.layers[0].ef[0].ef[0]?.v &&
        newAnimationData.layers[0].ef[0].ef[0].v.k
      ) {
        newAnimationData.layers[0].ef[0].ef[0].v.k[0] = parseFloat(vRgb[0]);
        newAnimationData.layers[0].ef[0].ef[0].v.k[1] = parseFloat(vRgb[1]);
        newAnimationData.layers[0].ef[0].ef[0].v.k[2] = parseFloat(vRgb[2]);
      }

      if (
        newAnimationData.layers &&
        newAnimationData.layers[0]?.ef &&
        newAnimationData.layers[0].ef[1]?.ef &&
        newAnimationData.layers[0].ef[1].ef[0]?.v &&
        newAnimationData.layers[0].ef[1].ef[0].v.k
      ) {
        newAnimationData.layers[0].ef[1].ef[0].v.k[0] = parseFloat(vRgb[0]);
        newAnimationData.layers[0].ef[1].ef[0].v.k[1] = parseFloat(vRgb[1]);
        newAnimationData.layers[0].ef[1].ef[0].v.k[2] = parseFloat(vRgb[2]);
      }

      console.log("JSON atualizado:", newAnimationData);

      // Atualiza o estado com o JSON modificado
      setModifiedAnimationData(newAnimationData);
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e) => {
      setPositions((prev) => [...prev, { x: e.clientX, y: e.clientY }].slice(-10));
    };

    const handleMouseOver = (e) => {
      if (e.target.classList.contains("cursor-pointer")) {
        setHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.classList.contains("cursor-pointer")) {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div
      className={`custom-cursor ${hovered ? "hovered" : ""}`}
      style={{
        left: positions.length ? positions[positions.length - 1].x : 0,
        top: positions.length ? positions[positions.length - 1].y : 0,
      }}
    >
      {hovered && modifiedAnimationData && (
        <Lottie
          animationData={modifiedAnimationData} // Usa o JSON modificado
          loop
          autoplay
          style={{ width: "40px", height: "40px" }}
        />
      )}
    </div>
  );
};

export default CustomCursor;
