"use client";

import { useState, useEffect, useRef } from "react";
import { getLanguages } from "@/app/api/getLanguages";
import "./style.scss";

export default function SwitchLang({ onChange }) {
  const [languages, setLanguages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const loadLanguages = async () => {
      try {
        const langs = await getLanguages();

        if (!Array.isArray(langs) || langs.length === 0) return;

        const savedLang = localStorage.getItem("lang");
        const defaultLang = langs.find((lang) => lang.is_default);
        const initialLang =
          langs.find((lang) => lang.slug === savedLang) ||
          defaultLang ||
          langs[0];

        setLanguages(langs);
        setSelected(initialLang);
      } catch (err) {
        console.error("Erro ao carregar idiomas:", err);
      }
    };

    loadLanguages();
  }, []);

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
    localStorage.setItem("lang", lang.slug);
    if (onChange) onChange(lang.slug);
    window.location.reload();
  };

  if (!selected || languages.length === 0) return null;

  return (
    <div
      className={`select-lang ${isOpen ? "open" : ""}`}
      ref={selectRef}
      onClick={() => setIsOpen(!isOpen)}
      tabIndex={0}
    >
      <div className="option-selected-lang">
        <img
          id={`flag-lang-${selected.slug}`}
          src={`/images/flags/${selected.slug}.svg`}
          alt={selected.name}
        />
        <span>{selected.slug.toUpperCase()}</span>
      </div>
      <ul className="options-lang">
        {languages
          .filter((lang) => lang.slug !== selected.slug)
          .map((lang) => (
            <li key={lang.slug} onClick={() => handleSelect(lang)}>
              <img src={lang.flag_url} alt={lang.name} />
              {lang.slug.toUpperCase()}
            </li>
          ))}
      </ul>
    </div>
  );
}
