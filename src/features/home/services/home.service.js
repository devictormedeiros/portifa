import getAPI from "@/app/api/getAPI";

export async function getHomeData() {
  const data = await getAPI(`/portifa/v1/home`, {
    revalidate: 300,
  });

  return data;
}
