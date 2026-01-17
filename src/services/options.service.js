import getAPI from "@/app/api/getAPI";
import { getCurrentLang } from "@/libs/utils/getCurrentLang";

const lang = getCurrentLang(); // reutilizando a função

export async function getOptions() {
  return getAPI(`/acf/v3/options/options?lang=${lang}`, {
    revalidate: 300,
  });
}
