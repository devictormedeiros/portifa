"use client"; // Este componente será renderizado no cliente
import { useEffect, useState } from "react";

export default function Styleguide({ styleguide }) {
  const [cssVariables, setCssVariables] = useState("");

  useEffect(() => {
    if (!styleguide) return;

    const isValidGradient = (gradient) => gradient?.cor_1 && gradient?.cor_2;

    const gradients = {
      "--gradient-primary-a": isValidGradient(
        styleguide?.gradients?.gradient_primary_a,
      )
        ? `radial-gradient(
            50% 50% at 50% 50%,
            ${styleguide.gradients.gradient_primary_a.cor_1} 0%,
            ${styleguide.gradients.gradient_primary_a.cor_2} 100%
          )`
        : null,
      "--gradient-primary-b": isValidGradient(
        styleguide?.gradients?.gradient_primary_b,
      )
        ? `linear-gradient(
            90deg,
            ${styleguide.gradients.gradient_primary_b.cor_1} 0%,
            ${styleguide.gradients.gradient_primary_b.cor_2} 100%
          )`
        : null,
      "--gradient-primary-c": isValidGradient(
        styleguide?.gradients?.gradient_primary_c,
      )
        ? `linear-gradient(
            109.79deg,
            ${styleguide.gradients.gradient_primary_c.cor_1} 0%,
            ${styleguide.gradients.gradient_primary_c.cor_2} 101.78%
          )`
        : null,
      "--gradient-primary-d": isValidGradient(
        styleguide?.gradients?.gradient_primary_d,
      )
        ? `linear-gradient(
            180.07deg,
            ${styleguide.gradients.gradient_primary_d.cor_1} 0.06%,
            ${styleguide.gradients.gradient_primary_d.cor_2} 19.26%,
            ${styleguide.gradients.gradient_primary_d.cor_1} 48.17%
          )`
        : null,
      "--gradient-primary-e": isValidGradient(
        styleguide?.gradients?.gradient_primary_e,
      )
        ? `radial-gradient(
            50% 50% at 50% 50%,
            ${styleguide.gradients.gradient_primary_e.cor_1} 0%,
            ${styleguide.gradients.gradient_primary_e.cor_2} 100%
          )`
        : null,
      "--gradient-primary-f": isValidGradient(
        styleguide?.gradients?.gradient_primary_f,
      )
        ? `linear-gradient(
            90deg,
            ${styleguide.gradients.gradient_primary_f.cor_1} 0%,
            ${styleguide.gradients.gradient_primary_f.cor_2} 100%
          )`
        : null,
      "--gradient-primary-g": isValidGradient(
        styleguide?.gradients?.gradient_primary_g,
      )
        ? `linear-gradient(
            109.79deg,
            ${styleguide.gradients.gradient_primary_g.cor_1} 0%,
            ${styleguide.gradients.gradient_primary_g.cor_2} 101.78%
          )`
        : null,
      "--gradient-primary-h": isValidGradient(
        styleguide?.gradients?.gradient_primary_h,
      )
        ? `linear-gradient(
            180.07deg,
            ${styleguide.gradients.gradient_primary_h.cor_1} 0.06%,
            ${styleguide.gradients.gradient_primary_h.cor_2} 19.26%,
            ${styleguide.gradients.gradient_primary_h.cor_1} 48.17%
          )`
        : null,
      "--gray-gradient-a": isValidGradient(
        styleguide?.gradients?.gradient_gray_a,
      )
        ? `linear-gradient(
            180deg,
            ${styleguide.gradients.gradient_gray_a.cor_1} 0%,
            ${styleguide.gradients.gradient_gray_a.cor_2} 100%
          )`
        : null,
      "--gray-gradient-b": isValidGradient(
        styleguide?.gradients?.gradient_gray_b,
      )
        ? `linear-gradient(
            109.79deg,
            ${styleguide.gradients.gradient_gray_b.cor_1} 0%,
            ${styleguide.gradients.gradient_gray_b.cor_2} 101.78%
          )`
        : null,
      "--gray-gradient-c": isValidGradient(
        styleguide?.gradients?.gradient_gray_c,
      )
        ? `linear-gradient(
            180deg,
            ${styleguide.gradients.gradient_gray_c.cor_1} 0%,
            ${styleguide.gradients.gradient_gray_c.cor_2} 100%
          )`
        : null,
      "--gray-gradient-d": isValidGradient(
        styleguide?.gradients?.gradient_gray_d,
      )
        ? `linear-gradient(109.79deg, #${styleguide.gradients.gradient_gray_d.cor_1} 0%, ${styleguide.gradients.gradient_gray_d.cor_2} 101.78%)`
        : null,
    };

    const solidColor = {
      "--primary": styleguide?.primary || null,
      "--primary-light": styleguide?.primary_light || null,
      "--primary-rgb": "rgba(78,201,176,1)" || null,
    };

    const mergedStyles = { ...solidColor, ...gradients };

    const cssVars = Object.entries(mergedStyles)
      .filter(([_, value]) => value)
      .map(([key, value]) => `${key}: ${value};`)
      .join("\n");

    setCssVariables(cssVars);
  }, [styleguide]);

  return <style>{`:root {\n${cssVariables}\n}`}</style>;
}
