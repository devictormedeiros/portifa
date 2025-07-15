"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { getAcfOptions } from "../api/getAcfOptions";

const DataOptionsContext = createContext();

export const DataOptionsProvider = ({ children }) => {
  const [dataOption, setDataOption] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const options = await getAcfOptions();
        setDataOption(options);
        setTimeout(() => {
          setIsLoading(false);
        }, 900);
      } catch (error) {
        console.error("Erro ao buscar opções ACF:", error);
      }
    };

    fetchOptions();
  }, []);

  return (
    <DataOptionsContext.Provider value={{ dataOption, isLoading }}>
      {children}
    </DataOptionsContext.Provider>
  );
};

export const useDataOptions = () => useContext(DataOptionsContext);
