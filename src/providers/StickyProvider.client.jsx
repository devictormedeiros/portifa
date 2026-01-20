import { StickyProvider } from "@/context/StickyContext";

export default function StickyProviderClient({ children }) {
  return <StickyProvider>{children}</StickyProvider>;
}
