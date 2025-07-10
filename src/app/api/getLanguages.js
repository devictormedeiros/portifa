import getAPI from "./getAPI";

export const getLanguages = async () => {
  try {
    const data = await getAPI("/pll/v1/languages");
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Erro ao buscar idiomas:", error);
    return [];
  }
};
