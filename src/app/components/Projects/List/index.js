import IconsLib from "@/app/components/Icons";

const List = ({ filteredProjects, technologies }) => {
  return (
    <section className="w-full mx-auto flex flex-col gap-12 md:mt-[4rem] mt-[2.5rem] container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {filteredProjects.map((project, index) => {
          const imageUrl =
            project._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

          return (
            <article
              key={`project-${index}`}
              className="flex flex-col project-card rounded-2xl"
            >
              <a
                title={project.title?.rendered || "Sem título"}
                href={`/projeto/${project.slug}`}
                className="flex flex-col flex-wrap w-full h-full"
              >
                <div className="w-full h-[14.375rem] rounded-t-2xl">
                  <img
                    className="w-full h-full object-cover rounded-t-2xl"
                    alt="Imagem do projeto"
                    src={imageUrl || "https://placehold.co/600x400"}
                  />
                </div>
                <div className="flex flex-1 flex-col items-start gap-4 p-6 bg-white-5 rounded-b-2xl">
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex flex-col items-start gap-[0.2344rem]">
                      <h3 className="mt-[-0.0587rem] content-title-h5  text-gray-200">
                        {project.title?.rendered || "Sem título"}
                      </h3>
                    </div>
                    {project.tecnologias?.length > 0 && (
                      <div className="flex items-center gap-4">
                        {project.tecnologias.map((techId, techIndex) => {
                          const tech = technologies.find(
                            (t) => t.id === techId,
                          );
                          const iconSlug = tech?.acf?.tecnologias?.icone;

                          return iconSlug ? (
                            <div className="img-tech" key={`tech-${techIndex}`}>
                              <IconsLib name={iconSlug} />
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
                  <p className="w-full text-white-70 feed-excerpt">
                    {(project.excerpt?.rendered || "")
                      .replace(/<[^>]+>/g, "") // remove tags HTML
                      .slice(0, 120) // limita os caracteres
                      .trim() + "..."}
                  </p>
                </div>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default List;
