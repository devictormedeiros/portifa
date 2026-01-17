import getAPI from "@/app/api/getAPI";
import { getCurrentLang } from "@/libs/utils/getCurrentLang";
import { getOptions } from "@/services/options.service";

const lang = getCurrentLang(); // reutilizando a função

export async function getGeneralData(menuSlug = "menu-principal") {
  const options = await getOptions();
  const menu = await getAPI(`/menus/${menuSlug}?lang=${lang}`, {
    revalidate: 300,
  });

  return {
    menu: menu ?? null,
    logo: options?.logo_principal ?? null,
    texto_scroll: options?.acf?.texto_scroll ?? null,
    secao_contato: options?.acf?.secao_contato ?? null,
    configuracao_do_formulario:
      options?.acf?.configuracao_do_formulario ?? null,
    code_editor: options?.acf?.code_editor,
    styleguide: options?.acf?.styleguide,
    code_editor: options?.acf?.code_editor,
    idiomas_exibidos: options?.acf?.idiomas_exibidos,
    idiomaDefault: options?.acf?.idiomaDefault,
    idioma_padrao: options?.acf?.idioma_padrao,
  };
}
