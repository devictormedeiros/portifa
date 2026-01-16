import getAPI from "@/app/api/getAPI";
import { getOptions } from "@/services/options.service";

export async function getProjects({ techId }) {
  const params = new URLSearchParams({
    per_page: 100,
    _embed: "true",
    ...(techId && { tecnologias: techId }),
  });

  const data = await getAPI(`/wp/v2/projeto?${params.toString()}`, {
    cache: "no-store",
  });

  return data;
}

export async function getTechnologies() {
  return getAPI("/wp/v2/tecnologias?hide_empty=true", {
    revalidate: 300,
  });
}

export async function getProjectsPageData({ techSlug } = {}) {
  const [options, technologies] = await Promise.all([
    getOptions(),
    getTechnologies(),
  ]);

  const activeTech = technologies.find((tech) => tech.slug === techSlug);

  const projects = await getProjects({
    techId: activeTech?.id,
  });

  return {
    archive: options?.acf?.archive ?? null,
    projects: projects ?? [],
    technologies: technologies ?? [],
    activeTech: activeTech ?? null,
  };
}

export async function getProjectBySlug(slug) {
  const params = new URLSearchParams({
    _embed: "true",
    ...(slug && { slug: slug }),
  });

  const data = await getAPI(`/wp/v2/projeto?slug=?${params.toString()}`, {
    revalidate: 300,
  });

  return data;
}
