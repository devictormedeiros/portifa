import { createContext, useContext, useState, useEffect, useRef } from "react";

// Criando o contexto
const StickyContext = createContext();

export const StickyProvider = ({ children }) => {
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);
    const [startsAtTop, setStartsAtTop] = useState(false);

    const headerRef = useRef(null);
  
    useEffect(() => {

      if (headerRef.current) {
        const initialTop = headerRef.current.getBoundingClientRect().top;
        setStartsAtTop(initialTop === 0);
      }

      const handleScroll = () => {
        if (headerRef.current) {
          const headerTop = headerRef.current.getBoundingClientRect().top;
      if (startsAtTop) {
        setIsHeaderSticky(window.scrollY > 0);
      } else {
        setIsHeaderSticky(headerTop <= 0);
      }
        }
      };
      
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [startsAtTop]);
  
    return (
      <StickyContext.Provider value={{ isHeaderSticky, headerRef }}>
        {children}
      </StickyContext.Provider>
    );
  };
  

  export const useSticky = () => useContext(StickyContext);
