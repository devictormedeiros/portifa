import { useEffect, useLayoutEffect, useRef, useState } from "react";

const HeaderScrollWrapper = ({ children }) => {
  const [isPillsScrolled, setIsPillsScrolled] = useState(false);

  const scrollRef = useRef(null);

  useEffect(() => {
    const slider = scrollRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.classList.add("dragging");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove("dragging");
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove("dragging");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5; // multiplicador de velocidade
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsPillsScrolled(
        scrollRef?.current?.scrollWidth > scrollRef.current.clientWidth
      );
    }, 4000);
  }, [scrollRef]);

  return (
    <div
      ref={scrollRef}
      className={`${
        isPillsScrolled ? "cursor-horizontal" : ""
      } flex items-center gap-8 lg:gap-4 relative self-stretch px-6 w-[100vw] mx-[-1.5rem] lg:mx-0 lg:w-full overflow-x-auto list-categories scroll-hide-bar-mobile lg:px-0`}
    >
      {children}
    </div>
  );
};

export default HeaderScrollWrapper;
