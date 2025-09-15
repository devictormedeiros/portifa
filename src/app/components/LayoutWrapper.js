"use client";

import { StickyProvider } from "../context/StickyContext";
import { useDataOptions } from "../context/DataOptionsContext";
import { useProjects } from "../context/ProjectsContext";
import LoadingPage from "./LoadingPage";
import Styleguide from "../hooks/Styleguide";
import CustomCursor from "./CustomCursor";
import FloatSocial from "./FloatSocial";
import ScrollToTop from "./ScrollTop";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation"; // App Router (use next/router se for Pages Router)


export default function LayoutWrapper({ children }) {
  const { dataOption, isLoading } = useDataOptions();
  
  const { isLoadingProjects } = useProjects();

  const isPageLoading = isLoading || isLoadingProjects;
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    console.log("Página trocada");
    // Você pode iniciar o loading aqui se quiser
    document.body.setAttribute("data-page-load", "true");

    // Simula fim do carregamento
    setTimeout(() => {
      document.body.setAttribute("data-page-load", "false");
    }, 1500);
  }, [pathname]);

  useEffect(() => {
    console.log("Página visitada:", pathname);
  }, [pathname]);

  useEffect(() => {
    document.body.setAttribute("data-page-load", isPageLoading.toString());
  }, [isPageLoading]);

  return (
    <>
      <ScrollToTop />
      <body
        data-page-load={isPageLoading.toString()}
        className="antialiased text-white-100"
      >
        <style>{dataOption?.code_editor?.custom_code_css}</style>
        {dataOption?.styleguide && (
          <Styleguide styleguide={dataOption.styleguide} />
        )}
        <CustomCursor />
        <LoadingPage />
        <StickyProvider>
          {children}
          {dataOption?.secao_contato && (
            <FloatSocial data={dataOption?.secao_contato} />
          )}
        </StickyProvider>
      </body>
    </>
  );
}
