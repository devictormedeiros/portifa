import Styleguide from "../hooks/Styleguide";
import CustomCursor from "./CustomCursor";
import FloatSocial from "./FloatSocial";
import ScrollToTop from "./ScrollTop";
import StickyProviderClient from "../providers/StickyProvider.client";

export default function LayoutWrapper({
  children,
  code_editor,
  styleguide,
  secao_contato,
}) {
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
