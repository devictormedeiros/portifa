import "./style.scss";

import ContentProject from "@/features/projects/sections/ContentProject";
import HeaderSingle from "@/features/projects/sections/HeaderSingle";
import SectionMoreProjoects from "@/features/projects/sections/SectionMoreProjects";
import TopPage from "@/features/projects/sections/TopPage";
import { getProjectBySlug } from "@/features/projects/services/projects.service";

interface PageProps {
  params: {
    slug: string;
  };
}

interface WPProject {
  title?: {
    rendered: string;
  };
  content?: {
    rendered: string;
  };
  excerpt?: {
    rendered: string;
  };
  yoast_head_json?: {
    description?: string;
    og_image?: { url: string }[];
  };
  acf?: {
    "hero-desktop"?: string;
    "hero-mobile"?: string;
    "more-projects"?: any[];
  };
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;

  const project = await getProjectBySlug(slug);

  const currentProject: WPProject | undefined = project;

  if (!currentProject) {
    return {
      title: "Projeto não encontrado",
    };
  }

  const title = currentProject.title?.rendered;

  const description =
    currentProject.yoast_head_json?.description ||
    currentProject.excerpt?.rendered?.replace(/<[^>]+>/g, "");

  const ogImage =
    currentProject.yoast_head_json?.og_image?.[0]?.url ||
    currentProject.acf?.["hero-desktop"];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogImage ? [ogImage] : [],
      type: "article",
    },
  };
}

const Projeto = async ({ params }: PageProps) => {
  const { slug } = params;

  const currentProject = await getProjectBySlug(slug);

  return (
    <main className="main-single">
      <TopPage
        bgImageDesktop={currentProject?.hero_desktop}
        bgImageMobile={currentProject?.hero_mobile}
      />
      <div className="single-container relative mt-[-3rem]">
        <HeaderSingle currentProject={currentProject} />

        <ContentProject content={currentProject?.content} />
      </div>
      <div className="bg-gradient-primary-d">
        {/* <SectionMoreProjoects moreProjects={currentProject?.more_projects} /> */}
      </div>
    </main>
  );
};

export default Projeto;
