import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function AnimetionAboutWrapper({ children, ...props }) {
  const [offsetValue, setOffsetValue] = useState(100); // Valor padrão

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window?.innerWidth < 768);
    setOffsetValue(window?.innerHeight * 1); // Calcula 50vh
  }, []);

  return isMobile ? (
    <div className={props.className}>{children}</div>
  ) : (
    <ScrollAnimation {...props}>{children}</ScrollAnimation>
  );
}
