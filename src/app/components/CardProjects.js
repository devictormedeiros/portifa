import Link from "next/link";
import IconsLib from "@/app/components/Icons";
import Image from "next/image";

const CardProject = ({ project, technologies, isSwiper = false }) => {
  const handleClick = (e) => {
    if (isSwiper) {
      e.preventDefault();
    }
  };

  return (
    <article className="flex flex-col project-card rounded-[0.625rem] overflow-hidden lg:rounded-[1rem] select-none">
      <Link
        href={`/projeto/${project.slug}`}
        className="block w-full h-full"
        draggable="false"
        onClick={handleClick}
      >
        <div className="w-full h-[14.375rem]">
          {/* <img
            src={
              project._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "/images/image.png"
            }
            alt={project.title?.rendered}
            className="w-full h-full object-cover"
          /> */}
          <Image
            src={
              project._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "/images/image.png"
            }
            alt={project.title?.rendered}
            className="w-full h-full object-cover img-with-skeleton"
            width={450}
            height={350}
            loading="eager"
          />
        </div>

        <div className="flex flex-col items-start gap-4 p-6 bg-white-5 relative">
          <div className="absolute top-0 left-0 w-full h-full flex z-50"></div>
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
      </Link>
    </article>
  );
};

export default CardProject;
