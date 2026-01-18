import { getOptions } from "@/services/options.service";

export async function getNotFoundData() {
  const options = await getOptions();

  return {
    data: options?.acf?.pagina_404,
  };
}
