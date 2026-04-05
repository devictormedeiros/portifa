import Styleguide from "@/hooks/Styleguide";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollTop";
import StickyProviderClient from "@/providers/StickyProvider.client";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider.client";
import { getStyleguideData } from "@/features/layout/services/layout.service";

export default async function LayoutWrapper({ children }) {
  const { code_editor, styleguide } = await getStyleguideData();

  return (
    <SmoothScrollProvider>
      <ScrollToTop />
      <style>{code_editor?.custom_code_css}</style>
      {styleguide && <Styleguide styleguide={styleguide} />}
      <CustomCursor />
      <StickyProviderClient>{children}</StickyProviderClient>
    </SmoothScrollProvider>
  );
}
