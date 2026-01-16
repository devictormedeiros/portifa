"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollLockWrapper({
  children,
  lockAfter = 100,
  unlockDelay = 1600,
  desktopOnly = true,
}) {
  const containerRef = useRef(null);
  const [scrollLocked, setScrollLocked] = useState(false);
  const [alreadyLocked, setAlreadyLocked] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (
        scrollLocked ||
        alreadyLocked ||
        !containerRef.current ||
        (desktopOnly && window.innerWidth < 1024)
      ) {
        return;
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = containerRef.current.getBoundingClientRect();

          if (rect.top <= 0 && window.scrollY > lockAfter) {
            setScrollLocked(true);
            setAlreadyLocked(true);
            document.body.style.overflowY = "hidden";

            setTimeout(() => {
              document.body.style.overflowY = "auto";
              setScrollLocked(false);
            }, unlockDelay);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollLocked, alreadyLocked, lockAfter, unlockDelay, desktopOnly]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}
