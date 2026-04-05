"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenisInstanceRef } from "@/providers/SmoothScrollProvider.client";

function scrollTopZero(lenisRef) {
  const lenis = lenisRef?.current;
  if (lenis?.scrollTo) {
    lenis.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo(0, 0);
  }
}

export default function ScrollToTop() {
  const pathname = usePathname();
  const lenisRef = useLenisInstanceRef();

  useEffect(() => {
    scrollTopZero(lenisRef);

    const onPopState = () => {
      setTimeout(() => scrollTopZero(lenisRef), 0);
    };

    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, [pathname, lenisRef]);

  return null;
}
