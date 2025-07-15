import { createContext, useContext, useState, useEffect, useRef } from "react";

// Criando o contexto
const StickyContext = createContext();

export const StickyProvider = ({ children }) => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [startsAtTop, setStartsAtTop] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      const headerTop = headerRef.current.getBoundingClientRect().top;

      // Verifica dinamicamente se o header começa no topo da página
      const isAtTop = Math.abs(headerTop) <= 2; // margem de tolerância

      if (isAtTop) {
        setIsHeaderSticky(window.scrollY > 0);
      } else {
        setIsHeaderSticky(headerTop <= 0);
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
