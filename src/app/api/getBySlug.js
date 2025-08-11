// app/api/getBySlug.js
import getAPI from "./getAPI";

export async function getBySlug(type, slug, opts = {}) {
  try {
    if (!type || !slug) throw new Error("type e slug são obrigatórios");
    const { fields, embed = false, lang, revalidate } = opts;

    const params = new URLSearchParams({ slug, per_page: "1" });
    if (fields?.length) params.set("_fields", fields.join(","));
    if (embed) params.set("_embed", "1");
    if (lang) params.set("lang", lang);

    const url = `/wp/v2/${type}?${params.toString()}`;
    const data = await getAPI(url, revalidate ? { revalidate } : undefined);
    return Array.isArray(data) && data.length ? data[0] : null;
  } catch (e) {
    console.error("Erro ao buscar por slug:", e);
    return null;
  }
}
