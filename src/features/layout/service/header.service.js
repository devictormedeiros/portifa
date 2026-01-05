import getAPI from "@/app/api/getAPI";
import { getOptions } from "@/services/options.service";

export async function getHeaderData(menuSlug = 'menu-principal') {
  const options = await getOptions();
  const menu = await getAPI(`/menus/${menuSlug}?lang=pt-br`, {
    revalidate: 300,
  });

  return {
    menu: menu ?? null,
    logo: options?.logo_principal ?? null,
  };
}