import getAPI from "./getAPI";

export const getAcfOptions = async () => {
  try {
    // Recupera o lang do localStorage se estiver disponível, senão usa 'pt'
    let lang = "pt";

    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("lang");
      if (storedLang) {
        lang = storedLang;
      }
    }
    // Faz a requisição específica para o endpoint do ACF
    const data = await getAPI(`/acf/v3/options/options?lang=${lang}`);

    // Retorna apenas os dados necessários ou trata o retorno
    return data && data.acf ? data.acf : null;
  } catch (error) {
    console.error("Erro ao buscar opções do ACF:", error);
    return null;
  }
};
