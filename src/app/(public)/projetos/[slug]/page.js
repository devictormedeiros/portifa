import "./style.scss";

import ContentProject from "@/features/projects/sections/ContentProject";
import HeaderSingle from "@/features/projects/sections/HeaderSingle";
import SectionMoreProjoects from "@/features/projects/sections/SectionMoreProjects";
import TopPage from "@/features/projects/sections/TopPage";
import { getProjectBySlug } from "@/features/projects/services/projects.service";

export async function generateMetadata({ params }) {
  const { slug } = params;

  const project = await getProjectBySlug(slug);
  const currentProject = project?.[0];

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

const Projeto = async ({ params }) => {
  const { slug } = params;

  const currentProject = await getProjectBySlug(slug);

  return (
    <>
      <main className="main-single">
        <TopPage bgImageDesktop={currentProject[0]?.acf?.["hero-desktop"]} bgImageMobile={currentProject[0]?.acf?.["hero-mobile"]} />
        <div className="single-container relative mt-[-3rem]">
          <HeaderSingle
            currentProject={currentProject[0]}
          />

          <ContentProject content={currentProject[0]?.content?.rendered} />
        </div>
        <div className="bg-gradient-primary-d">
          <SectionMoreProjoects
            moreProjects={currentProject[0]?.acf["more-projects"]}
            projects={[]}
          />
        </div>
      </main>
    </>
  );
};

export default Projeto;
