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
  } = await getGeneralData();

  return (
    <>
      <Header logo={logo || null} menu={menu || null} />
      {children}
      <Footer
        scrollText={texto_scroll}
        data={secao_contato}
        dataForm={configuracao_do_formulario}
      />
    </>
  );
}
