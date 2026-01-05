async function getAPI(routes, options = {}) {
  try {
    // Realiza a requisição para o endpoint do Wordpress API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL +`/wp-json`+ routes}`,
      {
        ...options,
        next: {
          revalidate: options?.revalidate ?? 60
        }
      }
    );

    // Se o response não for ok, redireciona para 404
    if (!response.ok) {
      // Verifica se já não está na página 404 para evitar loop
      /* if (redirectOnFail && typeof window !== "undefined" && window.location.pathname !== "/404") {
        window.location.href = "/404";
      }
      return null; */
      throw new Error(`API error: ${response.status}`);
    }

    // Se o response for ok, retorna os dados em formato JSON
    const wpdata = await response.json();
    return wpdata;
    
  } catch (error) {
   /*  if (redirectOnFail && typeof window !== "undefined" && window.location.pathname !== "/404") {
      window.location.href = "/404";
    }
    return null; */
  }
}

export default getAPI;
