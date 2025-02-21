"use client"; // Necessário para usar hooks no diretório app
import HomePage from "./pages/HomePage";
import { useState, useEffect } from "react";
import { getAcfOptions } from "./api/getAcfOptions";
import LoadingPage from "./components/LoadingPage";
import Styleguide from "./hooks/Styleguide";
import "animate.css/animate.compat.css";
import { StickyProvider } from "./context/StickyContext";
import CustomCursor from "./components/CustomCursor";
export default function Page() {
  const [dataOption, setDataOptions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // Fetch dos dados ao montar o componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = await getAcfOptions();
        setDataOptions(options);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <body data-page-load={isLoading.toString()} className={`antialiased text-white-100 bg-gray-900`}>
      <CustomCursor/>
      <LoadingPage />
      <StickyProvider>
        {dataOption?.styleguide && (
          <Styleguide styleguide={dataOption.styleguide} />
        )}
      <HomePage data={dataOption} />
      </StickyProvider>
    </body>
  );
}
