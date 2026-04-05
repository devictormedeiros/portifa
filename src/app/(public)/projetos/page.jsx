import "./style.scss";
import { getProjectsPageData } from "@/features/projects/services/projects.service";
import TopPage from "@/features/projects/sections/TopPage";
import HeaderArchive from "@/features/projects/sections/HeaderArchive";
import List from "@/features/projects/sections/List";

export async function generateMetadata({ searchParams }) {
  const techSlug = searchParams?.t || null;

  const data = await getProjectsPageData({ techSlug });

  // SEO base do archive (ACF / Options)
  const archiveSEO = data?.archive?.seo;
  const archiveHeader = data?.archive?.cabecalho;

  // Caso NÃO tenha filtro
  if (!techSlug) {
    return {
      title: archiveSEO?.title || "Projetos",
      description: archiveSEO?.description || "",
      openGraph: {
        title: archiveSEO?.title || "Projetos",
        description: archiveSEO?.description || "",
        images: archiveHeader?.["hero-desktop"]
          ? [archiveHeader["hero-desktop"]]
          : [],
        type: "website",
      },
    };
  }

  // Caso TENHA filtro por tecnologia
  const currentTech = data?.technologies?.find(
    (tech) => tech.slug === techSlug,
  );

  const title =
    currentTech?.yoast_head_json?.title || `Projetos com ${currentTech?.name}`;

  const description =
    currentTech?.yoast_head_json?.description ||
    `Veja projetos desenvolvidos utilizando ${currentTech?.name}.`;

  const ogImage =
    currentTech?.yoast_head_json?.og_image?.[0]?.url ||
    archiveHeader?.["hero-desktop"];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogImage ? [ogImage] : [],
      type: "website",
    },
  };
}

export default async function Projetos({ searchParams }) {
  const techSlug = searchParams?.t || null;

  const data = await getProjectsPageData({ techSlug });

  const currentTech = data?.technologies?.find(
    (tech) => tech.slug === techSlug,
  );

  return (
    <main className="main-archive">
      <TopPage
        bgImageMobile={data?.hero_mobile}
        bgImageDesktop={data?.hero_desktop}
      />
      <div className="archive-container w-full mt-[-3rem]">
        <HeaderArchive
          technologies={data?.technologies}
          activeTech={techSlug}
          title={currentTech?.name || data?.title}
          description={currentTech?.description || data?.description}
        />
        <List projects={data?.list} />
      </div>
    </main>
  );
}
