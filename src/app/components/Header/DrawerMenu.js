"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DrawerMenu = ({ data }) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({
    x: "50%",
    y: "50%",
    width: 0,
    height: 0,
  });

  // Captura a posição do botão antes de abrir o menu
  const updateButtonPosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        width: rect.width,
        height: rect.height,
      });
    }
  };

  // Função que atualiza a posição e abre o menu
  const toggleMenu = () => {
    updateButtonPosition(); // Captura a posição ANTES de mudar o estado
    setTimeout(() => {
      setOpen(!open)
    }, 1);
     // Pequeno delay para garantir atualização antes da animação
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="flex items-center justify-center hover:bg-primary rounded-full duration-300 w-10 h-10"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 27 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.0770264 1.53846C0.0770264 0.688793 0.593621 0 1.23087 0H25.8463C26.4835 0 27.0001 0.688793 27.0001 1.53846C27.0001 2.38813 26.4835 3.07692 25.8463 3.07692H1.23087C0.593621 3.07692 0.0770264 2.38813 0.0770264 1.53846Z"
            fill="#EDEDED"
            
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.0769043 9.9994C0.0769043 9.14973 0.593499 8.46094 1.23075 8.46094H25.8461C26.4834 8.46094 27 9.14973 27 9.9994C27 10.8491 26.4834 11.5379 25.8461 11.5379H1.23075C0.593499 11.5379 0.0769043 10.8491 0.0769043 9.9994Z"
            fill="#EDEDED"
            className="path-hamburguer-animate"
            strokeWidth={"10px"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.0769043 18.4613C0.0769043 17.6116 0.593499 16.9229 1.23075 16.9229H25.8461C26.4834 16.9229 27 17.6116 27 18.4613C27 19.311 26.4834 19.9998 25.8461 19.9998H1.23075C0.593499 19.9998 0.0769043 19.311 0.0769043 18.4613Z"
            fill="#EDEDED"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key={open ? "menu-open" : "menu-closed"}
            initial={{
              opacity: 0,
              x: position.x,
              y: position.y,
              width: position.width,
              height: position.height,
            }}
            animate={{
              opacity: 1,
              x: "0%",
              y: "0%",
              width: "100vw",
              height: "100vh",
            }}
            exit={{
              opacity: 0,
              x: position.x,
              y: position.y,
              width: position.width,
              height: position.height,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-40 bg-primary ${open ? "menu-open" : ""}`}
          >
            <button
              onClick={toggleMenu}
              className="absolute top-10 right-10 text-white text-7xl z-10"
            >
              &times;
            </button>

            <nav className="text-center">
              <ul className="space-y-6 text-white text-2xl uppercase font-bold">
                {data?.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.url}
                      className="content-title-h2 text-gray-200 hover:text-white-100 hover:underline uppercase mb-10 block"
                      
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DrawerMenu;
