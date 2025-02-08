async function getAPI(routes) {
  try {
    // realiza a requisição para o endpoint do Wordpress API e um await para aguardar a respostav
    const response = await fetch(
      `${'https://devictormedeiros.com/portifa-wp/wp-json' + routes}`
    );

    // se o response não for ok, lança(throw) uma exceção com a mensagem de erro
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    // se o response for ok, retorna os dados do post em formato JSON e usa um await para aguardar a resposta do JSON
    const wpdata = await response.json();
    return wpdata;
  } catch (error) {
    console.error("Erro se conectar com o WP REST", error);
    throw error;
  }
}

export default getAPI;
