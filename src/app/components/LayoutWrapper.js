"use client";

import { StickyProvider } from "../context/StickyContext";
import { useDataOptions } from "../context/DataOptionsContext";
import LoadingPage from "./LoadingPage";
import Styleguide from "../hooks/Styleguide";
import CustomCursor from "./CustomCursor";
import FloatSocial from "./FloatSocial";
import { useEffect } from "react";
import ScrollToTop from "./ScrollTop";

export default function LayoutWrapper({ children }) {
  const { dataOption, isLoading } = useDataOptions();

  return (
    <>
      <ScrollToTop />
      <body
        data-page-load={isLoading.toString()}
        className="antialiased text-white-100"
      >
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
