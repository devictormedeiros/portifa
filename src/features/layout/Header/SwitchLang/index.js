"use client";

import { useState, useEffect, useRef } from "react";
import "./style.scss";
import { useDataOptions } from "@/app/context/DataOptionsContext";
import { getCurrentLang } from "@/app/utils/getCurrentLang";

export default function SwitchLang({ onChange }) {
  const { dataOption } = useDataOptions();
  const [languages, setLanguages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  
  // monta os idiomas a partir do ACF Options
  useEffect(() => {
    const acf = (dataOption && (dataOption.acf || dataOption)) || {};
    const acfSlugs = Array.isArray(acf.idiomas_exibidos) ? acf.idiomas_exibidos : [];
    if (acfSlugs.length === 0) return;

    const defaultSlug = acf.idioma_padrao || acf.idiomaDefault || null;

    const langs = acfSlugs
    .map((item) => {
      const raw = typeof item === "string"
        ? item
        : item?.value || item?.slug || null;
  
      if (!raw || typeof raw !== "string") return null;
  
      const cleanSlug = raw.replace(/^pll_/, ""); // remove "pll_"
  
      return {
        slug: cleanSlug, // <-- agora o slug NÃO tem "pll_"
        name: cleanSlug.toUpperCase(),
        is_default: defaultSlug?.replace(/^pll_/, "") === cleanSlug,
      };
    })
    .filter(Boolean);
  
  
    const savedSlug = getCurrentLang();


    const initial =
      langs.find((l) => l.slug === savedSlug) ||
      (defaultSlug ? langs.find((l) => l.slug === defaultSlug) : null) ||
      langs[0];

    setLanguages(langs);
    setSelected(initial || null);
  }, [dataOption]);

  // fecha dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    setSelected(lang);
    setIsOpen(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang.slug);
    }
    if (onChange) onChange(lang.slug);
    window.location.reload();
  };

  if (!selected || languages.length <= 1) return null;

  return (
    <div
      className={`select-lang cursor-link ${isOpen ? "open" : ""}`}
      ref={selectRef}
      onClick={() => setIsOpen(!isOpen)}
      tabIndex={0}
    >
      <div className="option-lang-selected">
        <img
          id={`flag-lang-${selected.slug}`}
          src={`/images/flags/${selected.slug}.svg`}
          alt={selected.name}
        />
        <span>{selected.name}</span>
      </div>

      <ul className="options-lang">
        {languages
          .filter((lang) => lang.slug !== selected.slug)
          .map((lang) => (
            <li key={lang.slug} onClick={() => handleSelect(lang)}>
              <img
                id={`flag-lang-${lang.slug}`}
                src={`/images/flags/${lang.slug}.svg`}
                alt={lang.name}
              />
              <span>{lang.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
