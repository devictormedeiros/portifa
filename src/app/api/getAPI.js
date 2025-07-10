async function getAPI(routes) {
  try {
    // Realiza a requisição para o endpoint do Wordpress API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL + routes}`
    );

    // Se o response não for ok, redireciona para 404
    if (!response.ok) {
      // Verifica se já não está na página 404 para evitar loop
      if (window.location.pathname !== '/404') {
        window.location.href = '/404';
      }
      return null;
    }

    // Se o response for ok, retorna os dados em formato JSON
    const wpdata = await response.json();
    return wpdata;
    
  } catch (error) {
    console.error("Erro ao se conectar com o WP REST", error);
    // Verifica se já não está na página 404 para evitar loop
    if (window.location.pathname !== '/404') {
      window.location.href = '/404';
    }
    return null;
  }
}

export default getAPI;
