import CustomCursor from "@/app/components/CustomCursor";
import FloatSocial from "@/app/components/FloatSocial";
import ScrollToTop from "@/app/components/ScrollTop";
import Styleguide from "@/app/hooks/Styleguide";
import StickyProviderClient from "@/app/providers/StickyProvider.client";
import Footer from "@/features/layout/Footer";
import Header from "@/features/layout/Header";
import { getGeneralData } from "@/features/layout/services/general.service";

export default async function RootLayoutProjects({ children }) {
  const {
    menu,
    logo,
    texto_scroll,
    secao_contato,
    configuracao_do_formulario,
    code_editor,
    styleguide,
    idiomas_exibidos,
    idiomaDefault,
    idioma_padrao,
  } = await getGeneralData();

  return (
    <body className="antialiased text-white-100" data-page-load="false">
      <ScrollToTop />
      <style>{code_editor?.custom_code_css}</style>
      {styleguide && <Styleguide styleguide={styleguide} />}
      <CustomCursor />
      <StickyProviderClient>
        <Header
          logo={logo || null}
          menu={menu || null}
          idiomas={{
            idiomas_exibidos,
            idiomaDefault,
            idioma_padrao,
          }}
        />
        {children}
        <Footer
          scrollText={texto_scroll}
          data={secao_contato}
          dataForm={configuracao_do_formulario}
        />
        {secao_contato && <FloatSocial data={secao_contato} />}
      </StickyProviderClient>
    </body>
  );
}
