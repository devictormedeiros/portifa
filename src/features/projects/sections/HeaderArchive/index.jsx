"use client";

import IconsLib from "@/components/Icons";
import HeaderScrollWrapper from "./wrappers/HeaderScrollWrapper";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const HeaderArchive = ({ technologies, title, description, activeTech }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (slug) => {
    const params = new URLSearchParams(searchParams.toString());

    if (activeTech === slug) {
      params.delete("t");
    } else {
      params.set("t", slug);
    }

    router.push(`/projetos?${params.toString()}`);
  };

  return (
    <section className="flex flex-col w-full items-center md:gap-10 gap-8 px-6 py-0 relative container">
      <div className="flex flex-col gap-6 w-full p-0">
        {title !== "" && (
          <h2 className="content-title-h2 text-gray-200">{title}</h2>
        )}

        {technologies?.length > 0 && (
          <HeaderScrollWrapper>
            <Link
              href="/projetos"
              title="Ver todos os projetos"
              className={`pill-category menu-section flex items-center gap-x-2 py-4 px-4 rounded-3xl duration-300 lg:hover:bg-gray-200 lg:hover:text-gray-700 min-w-[max-content] capitalize ${
                !activeTech
                  ? "bg-gray-200 text-gray-700 pill-category-active"
                  : "bg-white-10 text-gray-200"
              }`}
            >
              Todos os projetos
            </Link>

            {technologies.map((tech) => {
              const isActive = activeTech === tech.slug;

              return (
                <button
                  key={tech.id}
                  onClick={() => handleClick(tech.slug)}
                  className={`pill-category menu-section flex items-center gap-x-2   py-2 px-4 rounded-3xl duration-300 lg:hover:bg-gray-200  lg:hover:text-gray-700 min-w-[max-content] ${
                    isActive
                      ? "bg-gray-200 text-gray-700 pill-category-active"
                      : "bg-white-10 text-gray-200"
                  }`}
                >
                  {tech.icon && (
                    <div className="img-tech">
                      <IconsLib name={tech.icon} />
                    </div>
                  )}
                  {tech.name}
                </button>
              );
            })}
          </HeaderScrollWrapper>
        )}
      </div>

      {description !== "" && (
        <p className="relative self-stretch text-white-70">{description}</p>
      )}
    </section>
  );
};

export default HeaderArchive;
