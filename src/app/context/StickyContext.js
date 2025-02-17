import { createContext, useContext, useState, useEffect, useRef } from "react";

// Criando o contexto
const StickyContext = createContext();

export const StickyProvider = ({ children }) => {
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);
    const headerRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        if (headerRef.current) {
          const headerTop = headerRef.current.getBoundingClientRect().top;
          setIsHeaderSticky(headerTop === 0); 
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <StickyContext.Provider value={{ isHeaderSticky, headerRef }}>
        {children}
      </StickyContext.Provider>
    );
  };
  

  export const useSticky = () => useContext(StickyContext);
