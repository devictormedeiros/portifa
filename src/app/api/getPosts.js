import getAPI from './getAPI';

export const getPosts = async () => {
  try {
    // Faz a requisição específica para o endpoint do ACF
    const data = await getAPI('/wp/v2/posts/');
    
    // Retorna apenas os dados necessários ou trata o retorno
    return data || null;
  } catch (error) {
    console.error("Erro ao buscar opções do ACF:", error);
    return null;
  }
};
