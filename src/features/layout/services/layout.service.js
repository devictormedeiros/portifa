import getAPI from "@/services/api";

export async function getHeaderData() {
  const data = await getAPI(`/portifa/v1/header`, {
    revalidate: 300,
  });

  return data;
}

export async function getFooterData() {
  const data = await getAPI(`/portifa/v1/footer`, {
    revalidate: 300,
  });

  return data;
}

export async function getStyleguideData() {
  const data = await getAPI(`/portifa/v1/styleguide`, {
    revalidate: 300,
  });

  return data;
}
