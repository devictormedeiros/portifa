import { getCachedData, setCachedData } from '../utils/cache';

async function getAPI(routes) {
  try {
    // Realiza a requisição para o endpoint do Wordpress API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL + routes}`
    );

    // Se o response não for ok, lança uma exceção com a mensagem de erro
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    // Se o response for ok, retorna os dados em formato JSON
    const wpdata = await response.json();
    return wpdata;
    
  } catch (error) {
    console.error("Erro ao se conectar com o WP REST", error);
    throw error;
  }
}

export default getAPI;
