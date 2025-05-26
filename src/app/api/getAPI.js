import { getCachedData, setCachedData } from '../utils/cache';

async function getAPI(routes) {
  try {
    // Gera uma chave de cache baseada na rota
    const cacheKey = `wp_api_${routes}`;
    
    // Verifica se temos dados no cache
    const cachedData = getCachedData(cacheKey);
    if (cachedData) {
      return cachedData;
    }

    // se o cache estiver vazio, realiza a requisição para o endpoint do Wordpress API e um await para aguardar a resposta
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL + routes}`
    );

    // se o response não for ok, lança(throw) uma exceção com a mensagem de erro
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    // se o response for ok, retorna os dados do post em formato JSON e usa um await para aguardar a resposta do JSON
    const wpdata = await response.json();
    
    // Armazena os dados no cache
    setCachedData(cacheKey, wpdata);
    
    return wpdata;
  } catch (error) {
    console.error("Erro se conectar com o WP REST", error);
    throw error;
  }
}

export default getAPI;
