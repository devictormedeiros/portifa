import getAPI from "@/app/api/getAPI";

export async function getPrivacyData() {
  const data = await getAPI(`/portifa/v1/privacy`, {
    revalidate: 300,
  });

  return data;
}
