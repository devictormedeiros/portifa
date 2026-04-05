async function getAPI(routes, options = {}) {
  try {
    // Realiza a requisição para o endpoint do Wordpress API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL + `/wp-json` + routes}`,
      {
        ...options,
        next: {
          revalidate: options?.revalidate ?? 60,
        },
      },
    );

    const wpdata = await response.json();

    return wpdata;
  } catch (error) {
    console.log(error);
  }
}

export default getAPI;
