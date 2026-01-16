"use client"

import { StickyProvider } from "@/app/context/StickyContext";

export default function StickyProviderClient({ children }) {
  return <StickyProvider>{children}</StickyProvider>;
}
