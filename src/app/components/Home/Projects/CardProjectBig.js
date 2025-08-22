import Image from "next/image";
import IconsLib from "../../Icons";

const CardProjectBig = ({ project, technologies }) => {
  return (
    <article className="project-card-big project-card-container sticky col-span-12 flex items-center justify-center h-[100vh] pinned duration-300 ease-out top-[3.75rem] lg:top-0 w-full">
      <div className="project-card bg-gradient-primary-c w-full rounded-2xl md:mx-0">
        <div className="p-[2rem] flex flex-col gap-6 md:gap-[2.5rem] rounded-lg md:p-[4rem]">
          <div className="flex flex-col gap-[0.5rem] justify-between pb-[.5rem] border-b border-white-10 md:flex-row">
            <h3 className="content-title-h3 text-gray-200 uppercase">
              {project.title?.rendered || "Sem título"}
            </h3>
            {project?.tecnologias?.length > 0 && (
              <div className="flex items-center gap-[1.25rem] md:gap-6">
                {project?.tecnologias?.map((techId, techIndex) => {
                  const tech = technologies.find((t) => t.id === techId);
                  const iconSlug = tech?.acf?.tecnologias?.icone;

                  return iconSlug ? (
                    <div className="img-tech" key={`tech-${techIndex}`}>
                      <IconsLib name={tech.acf?.tecnologias?.icone} />
                    </div>
                  ) : (
                    <span
                      key={`tech-${techIndex}`}
                      className="text-white-70 text-sm"
                    >
                      {tech?.name}
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6 md:gap-[2.5rem] md:flex-row md:items-center">
            <figure className="relative h-[11.25rem] md:h-auto md:aspect-[3/2] md:max-w-[45rem] w-full">
              <img
                className="rounded-lg w-full h-full object-cover"
                src={
                  project._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "/images/image.png"
                }
                alt={project.title?.rendered}
              />
            </figure>
            <div className="flex flex-col gap-6 flex-1">
              <p className="content-text text-white-70 md:line-clamp-none">
                {(() => {
                  const text = project.acf?.resumoCardHome
                    ? project.acf.resumoCardHome
                    : (project.excerpt?.rendered || "").replace(/<[^>]+>/g, "");

                  const sliced = text.slice(0, 120).trim();
                  return project.acf?.resumoCardHome ? sliced : sliced + "...";
                })()}
              </p>
              <a
                href={`/projeto/${project.slug}`}
                title={project.title?.rendered || "Sem título"}
                className="py-[.75rem] px-6 text-white button-md text-center bg-white-10 duration-300 rounded uppercase w-full md:w-fit hover:bg-primary"
              >
                Ver projeto
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardProjectBig;
