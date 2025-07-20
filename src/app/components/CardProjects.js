import Link from "next/link";

const CardProject = ({ project, technologies }) => {
  return (
    <article className="flex flex-col project-card rounded-[0.625rem] overflow-hidden lg:rounded-[1rem]">
      <Link
        href={`/projeto/${project.slug}`}
        className="block w-full h-full"
      >
        <div className="w-full h-[14.375rem]">
          <img
            src={
              project._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "/images/image.png"
            }
            alt={project.title?.rendered}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-start gap-4 p-6 bg-white-5">
          <div className="flex flex-col items-start gap-3">
            <div className="flex flex-col items-start gap-[0.2344rem]">
              <h3 className="mt-[-0.0587rem] content-title-h5  text-gray-200">
                {project.title?.rendered || "Sem título"}
              </h3>
            </div>
            {project.tecnologias?.length > 0 && (
              <div className="flex items-center gap-4">
                {project.tecnologias.map((techId, techIndex) => {
                  const tech = technologies.find((t) => t.id === techId);
                  const iconUrl = tech?.acf?.tecnologias?.icone?.link;

                  return iconUrl ? (
                    <img
                      key={`tech-${techIndex}`}
                      className="w-6 img-tech"
                      alt={tech?.name || "Tecnologia"}
                      src={iconUrl}
                    />
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
          <p className="w-full text-white-70 feed-excerpt">
            {(project.excerpt?.rendered || "")
              .replace(/<[^>]+>/g, "") // remove tags HTML
              .slice(0, 120) // limita os caracteres
              .trim() + "..."}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default CardProject;
