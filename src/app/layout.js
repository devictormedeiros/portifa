"use client";
import "./globals.scss";
import "animate.css/animate.compat.css";
import { StickyProvider } from "./context/StickyContext";
import { DataOptionsProvider, useDataOptions } from "./context/DataOptionsContext";
import { ProjectsProvider } from "./context/ProjectsContext"; // ajuste o caminho
import LoadingPage from "./components/LoadingPage";
import Styleguide from "./hooks/Styleguide";
import CustomCursor from "./components/CustomCursor";
import FloatSocial from "./components/FloatSocial";
import Footer from "./components/Footer";

// Componente auxiliar para aplicar o styleguide e loading
function LayoutWrapper({ children }) {
  const { dataOption, isLoading } = useDataOptions();

  return (
    <body data-page-load={isLoading.toString()} className="antialiased text-white-100">
      {dataOption?.styleguide && <Styleguide styleguide={dataOption.styleguide} />}
      <CustomCursor />
      <LoadingPage />
      <StickyProvider>
        {children}
        {dataOption?.secao_contato && <FloatSocial data={dataOption?.secao_contato} />}
      </StickyProvider>
    </body>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <ProjectsProvider>
      <DataOptionsProvider>
        <LayoutWrapper>{children}
        <Footer />
        </LayoutWrapper>
      </DataOptionsProvider>
      </ProjectsProvider>
    </html>
  );
}
