import getAPI from "@/services/api";

export async function getPrivacyData() {
  const data = await getAPI(`/portifa/v1/privacy`, {
    revalidate: 300,
  });

  return data;
}
