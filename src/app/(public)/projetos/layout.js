import LayoutWrapper from "@/app/components/LayoutWrapper";
import Footer from "@/features/layout/Footer";
import Header from "@/features/layout/Header";
import { getGeneralData } from "@/services/general.service";

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
    <LayoutWrapper code_editor={code_editor} styleguide={styleguide}>
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
    </LayoutWrapper>
  );
}
