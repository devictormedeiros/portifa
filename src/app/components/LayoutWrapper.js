import LoadingPage from "./LoadingPage";
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
    <body className="antialiased text-white-100" data-page-load="false">
      <ScrollToTop />
      <style>{code_editor?.custom_code_css}</style>
      {styleguide && <Styleguide styleguide={styleguide} />}
      <CustomCursor />
      <StickyProviderClient>
        {/* <LoadingPage /> */}
        {children}
        {secao_contato && <FloatSocial data={secao_contato} />}
      </StickyProviderClient>
    </body>
  );
}
