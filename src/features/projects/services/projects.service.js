import getAPI from "@/services/api";

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

export async function getProjectsPageData({ techSlug }) {
  const data = await getAPI(
    `/portifa/v1/projects/${techSlug ? `?t=${techSlug}` : ""}`,
    {
      revalidate: 300,
    },
  );

  return data;
}

export async function getProjectBySlug(slug) {
  const data = await getAPI(`/portifa/v1/projects/${slug}`, {
    revalidate: 300,
  });

  return data;
}
