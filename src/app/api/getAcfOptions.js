import getAPI from "./getAPI";
import { getCurrentLang } from "../utils/getCurrentLang";

export const getAcfOptions = async () => {
  try {
    const lang = getCurrentLang(); // reutilizando a função
    const data = await getAPI(`/acf/v3/options/options?lang=${lang}`, false);

    // Retorna apenas os dados necessários ou trata o retorno
    return data && data.acf ? data.acf : null;
  } catch (error) {
    console.error("Erro ao buscar opções do ACF:", error);
    return null;
  }
};
