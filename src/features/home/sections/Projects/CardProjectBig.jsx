import Image from "next/image";
import IconsLib from "@/components/Icons";
import SmartLink from "@/components/SmartLink";
import Link from "next/link";

const CardProjectBig = ({ project }) => {
  return (
    <article className="project-card-big project-card-container sticky col-span-12 flex items-center justify-center h-[100vh] pinned duration-300 ease-out top-[3.75rem] lg:top-0 w-full">
      <div className="project-card bg-gradient-primary-c w-full rounded-2xl md:mx-0">
        <div className="p-[2rem] flex flex-col gap-6 md:gap-[2.5rem] rounded-lg md:p-[4rem]">
          <div className="flex flex-col gap-[0.5rem] justify-between pb-[.5rem] border-b border-white-10 md:flex-row">
            <h3 className="content-title-h3 text-gray-200 uppercase">
              {project.title || "Sem título"}
            </h3>
            {project?.technologies?.length > 0 && (
              <div className="flex items-center gap-[1.25rem] md:gap-6">
                {project?.technologies?.map((tech) => {
                  const iconSlug = tech?.slug;

                  return iconSlug ? (
                    <Link
                      href={`projetos?t=${iconSlug}`}
                      className="img-tech"
                      key={tech.id}
                      title={`Abrir listagem de ${tech.name}`}
                    >
                      <IconsLib name={tech?.icon} />
                    </Link>
                  ) : (
                    <span key={tech.id} className="text-white-70 text-sm">
                      {tech?.name}
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6 md:gap-[2.5rem] md:flex-row md:items-center">
            <figure className="relative h-[11.25rem] md:h-auto md:aspect-[3/2] md:max-w-[45rem] w-full">
              <Image
                src={project?.thumb?.url}
                alt={project?.thumb?.alt ?? project?.title}
                width={800}
                height={800}
                sizes="(min-width:1024px) 720px, 100vw"
                className="rounded-lg object-cover img-with-skeleton"
              />
            </figure>
            <div className="flex flex-col gap-6 flex-1">
              <div
                className="content-text text-white-70 md:line-clamp-none"
                dangerouslySetInnerHTML={{
                  __html: (() => {
                    const resumo = project.excerpt_home;
                    const excerpt = project.excerpt || "";

                    if (resumo) return resumo;

                    const sliced = excerpt.slice(0, 120).trim();
                    return excerpt.length > 120 ? sliced + "..." : sliced;
                  })(),
                }}
              />
              <SmartLink
                href={`/projetos/${project.slug}`}
                title={project.title || "Sem título"}
                className="py-[.75rem] px-6 text-white button-md text-center bg-white-10 duration-300 rounded uppercase w-full md:w-fit hover:bg-primary"
              >
                Ver projeto
              </SmartLink>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardProjectBig;
