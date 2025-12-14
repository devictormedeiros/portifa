"use client";

import { StickyProvider } from "../context/StickyContext";
import { useDataOptions } from "../context/DataOptionsContext";
import { useProjects } from "../context/ProjectsContext";
import LoadingPage from "./LoadingPage";
import Styleguide from "../hooks/Styleguide";
import CustomCursor from "./CustomCursor";
import FloatSocial from "./FloatSocial";
import ScrollToTop from "./ScrollTop";
import { useRouter, usePathname } from "next/navigation"; // App Router (use next/router se for Pages Router)


export default function LayoutWrapper({ children }) {
  const { dataOption, isLoading } = useDataOptions();
  
  const { isLoadingProjects } = useProjects();

  const isPageLoading = isLoading || isLoadingProjects;
  const router = useRouter();
  const pathname = usePathname();

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
