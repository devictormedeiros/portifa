"use client";

import { useSticky } from "@/app/context/StickyContext";

const HeaderStickyWrapper = ({ children }) => {
  const { isHeaderSticky, headerRef } = useSticky(); // Pegando o estado global

  return (
    <header
      ref={headerRef}
      className={`text-white ${isHeaderSticky ? "sticky-header" : ""}`}
    >
      {children}
    </header>
  );
}

export default HeaderStickyWrapper;
