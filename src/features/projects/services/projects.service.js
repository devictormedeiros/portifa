import getAPI from "@/app/api/getAPI";

export function getProjects() {
  return getAPI("/wp/v2/projetos?per_page=100", {
    revalidate: 120,
  });
}

export function getProjectBySlug(slug) {
  return getAPI(`/wp/v2/projetos?slug=${slug}`, {
    revalidate: 300,
  });
}