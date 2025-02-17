import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FadeInSection = ({ children, direction = "up", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = document.documentElement.scrollTop;
      if (top > 100) setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, delay },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
