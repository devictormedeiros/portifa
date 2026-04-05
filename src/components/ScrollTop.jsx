"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Ao trocar de rota normalmente
    window.scrollTo(0, 0);

    // Quando clicar no botão "voltar" ou "avançar" do navegador
    const onPopState = () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    };

    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, [pathname]);

  return null;
}
