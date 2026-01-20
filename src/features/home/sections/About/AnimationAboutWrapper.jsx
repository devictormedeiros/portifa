"use client";

import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function AnimetionAboutWrapper({ children, ...props }) {
  const [offsetValue, setOffsetValue] = useState(100); // Valor padrão

  const { height, width } = useWindowDimensions();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(width < 768);
    setOffsetValue(height * 1); // Calcula 50vh
  }, [width, height]);

  return isMobile ? (
    <div className={props.className}>{children}</div>
  ) : (
    <ScrollAnimation {...props} offset={height * 0.3}>
      {children}
    </ScrollAnimation>
  );
}
