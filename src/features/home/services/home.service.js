import { getOptions } from "@/services/options.service";

export async function getHomeData() {
  const options = await getOptions();

  return {
    data: options?.acf?.home,
  };
}
