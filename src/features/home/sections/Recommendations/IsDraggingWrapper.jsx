"use client";

import { Accordion } from "@material-tailwind/react";
import { useRef, useState } from "react";

export default function IsDraggingWrapper({ title, condition, children }) {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e) => {
    setIsDragging(true);
    e.preventDefault();
    const pageX = e.touches ? e.touches[0].pageX : e.pageX;
    setStartX(pageX);
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const onDragging = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const pageX = e.touches ? e.touches[0].pageX : e.pageX;
    const walk = (pageX - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <Accordion title={title} condition={condition}>
      <div
        className="flex gap-6 items-start shadow-right md:gap-[3rem] overflow-x-auto md:overflow-x-hidden cursor-horizontal list-recommendations scroll-hide-bar-mobile"
        ref={containerRef}
        onMouseDown={startDragging}
        onMouseMove={onDragging}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onTouchStart={startDragging}
        onTouchMove={onDragging}
        onTouchEnd={stopDragging}
      >
        {children}
      </div>
    </Accordion>
  );
}
