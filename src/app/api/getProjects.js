import getAPI from "./getAPI";

export const getProjects = async () => {
  try {
        // Recupera o lang do localStorage se estiver disponível, senão usa 'pt'
        let lang = 'pt';

        if (typeof window !== 'undefined') {
          const storedLang = localStorage.getItem('lang');
          if (storedLang) {
            lang = storedLang;
          }
        }
    const projects = await getAPI(`/wp/v2/projeto?_embed&lang=${lang}`);
    const technologies = await getAPI("/wp/v2/tecnologias?hide_empty=true");

    return { projects, technologies };
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return { projects: [], technologies: [] };
  }
};