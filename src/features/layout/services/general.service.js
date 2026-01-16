import getAPI from "@/app/api/getAPI";
import { getOptions } from "@/services/options.service";

export async function getGeneralData(menuSlug = 'menu-principal') {
  const options = await getOptions();
  const menu = await getAPI(`/menus/${menuSlug}?lang=pt-br`, {
    revalidate: 300,
  });

  return {
    menu: menu ?? null,
    logo: options?.logo_principal ?? null,
    texto_scroll: options?.acf?.texto_scroll ?? null,
    secao_contato: options?.acf?.secao_contato ?? null,
    configuracao_do_formulario: options?.acf?.configuracao_do_formulario ?? null,
    code_editor: options?.acf?.code_editor,
    styleguide: options?.acf?.styleguide,
  };
}