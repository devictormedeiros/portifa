import Styleguide from "../hooks/Styleguide";
import CustomCursor from "./CustomCursor";
import FloatSocial from "./FloatSocial";
import ScrollToTop from "./ScrollTop";
import StickyProviderClient from "../providers/StickyProvider.client";
import { getStyleguideData } from "@/features/layout/services/layout.service";

export default async function LayoutWrapper({ children, secao_contato }) {
  const { code_editor, styleguide } = await getStyleguideData();

  return (
    <>
      <ScrollToTop />
      <style>{code_editor?.custom_code_css}</style>
      {styleguide && <Styleguide styleguide={styleguide} />}
      <CustomCursor />
      <StickyProviderClient>
        {children}
        {secao_contato && <FloatSocial data={secao_contato} />}
      </StickyProviderClient>
    </>
  );
}
