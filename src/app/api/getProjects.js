import getAPI from "./getAPI";

export const getProjects = async () => {
  try {
    const projects = await getAPI('/wp/v2/projeto?_embed');
    const technologies = await getAPI("/wp/v2/tecnologias?hide_empty=true");

    return { projects, technologies };
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return { projects: [], technologies: [] };
  }
};