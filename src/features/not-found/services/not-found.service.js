import getAPI from "@/app/api/getAPI";

export async function getNotFoundData() {
  const data = await getAPI(`/portifa/v1/not-found`, {
    revalidate: 300,
  });

  return data;
}
