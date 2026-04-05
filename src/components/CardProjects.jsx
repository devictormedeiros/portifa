"use client";

import IconsLib from "@/components/Icons";
import Image from "next/image";
import SmartLink from "@/components/SmartLink";

const CardProject = ({ project, isSwiper = false }) => {
  const handleClick = (e) => {
    if (isSwiper) {
      e.preventDefault();
    }
  };

  return (
    <article className="flex flex-col project-card rounded-[0.625rem] overflow-hidden lg:rounded-[1rem] select-none">
      <SmartLink
        href={`/projetos/${project.slug}`}
        className="block w-full h-full"
        draggable="false"
        onClick={handleClick}
      >
        <div className="w-full h-[14.375rem]">
          <Image
            src={project?.thumb?.url}
            alt={project?.thumb?.alt ?? project?.title}
            className="w-full h-full object-cover img-with-skeleton"
            width={450}
            height={350}
          />
        </div>

        <div className="flex flex-col items-start gap-4 p-6 bg-white-5 relative">
          <div className="absolute top-0 left-0 w-full h-full flex z-50"></div>
          <div className="flex flex-col items-start gap-3">
            <div className="flex flex-col items-start gap-[0.2344rem]">
              <h3 className="mt-[-0.0587rem] content-title-h5  text-gray-200">
                {project.title || "Sem título"}
              </h3>
            </div>
            {project?.technologies?.length > 0 && (
              <div className="flex items-center gap-4">
                {project?.technologies.map((tech) => {
                  return tech?.icon ? (
                    <div className="img-tech" key={tech.id}>
                      <IconsLib name={tech?.icon} />
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
            {(project.excerpt || "")
              .replace(/<[^>]+>/g, "") // remove tags HTML
              .slice(0, 120) // limita os caracteres
              .trim() + "..."}
          </p>
        </div>
      </SmartLink>
    </article>
  );
};

export default CardProject;
