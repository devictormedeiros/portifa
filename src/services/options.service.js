// lib/services/options.service.ts

import getAPI from "@/app/api/getAPI";

export async function getOptions() {
  return getAPI("/acf/v3/options/options?lang=pt", {
    revalidate: 300,
  });
}