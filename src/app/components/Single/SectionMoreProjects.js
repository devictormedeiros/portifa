import Link from "next/link";
import CardProject from "../CardProjects";
import Slider from "react-slick";
import { useCallback, useEffect, useState } from "react";

const SectionMoreProjoects = ({
  moreProjects = [],
  technologies,
  projects,
}) => {
  const [isSwiper, setIsSwiper] = useState(false);
  const [showedProjects, setShowedProjects] = useState([]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // desktop padrão
    slidesToScroll: 1,
    swipe: true,
    responsive: [
      {
        breakpoint: 768, // mobile e tablets
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };

  useEffect(() => {
    let isMouseDown = false;
    let hasDragged = false;

    document.addEventListener("mousedown", (event) => {
      isMouseDown = true;
      hasDragged = false; // Resetar a cada novo clique
    });

    document.addEventListener("mousemove", (event) => {
      if (isMouseDown) {
        hasDragged = true; // Se o mouse se mover enquanto o botão estiver pressionado, foi um arrastar
      }
    });

    document.addEventListener("mouseup", (event) => {
      if (isMouseDown) {
        if (hasDragged) {
          // O clique foi seguido por um arrastar
          setIsSwiper(true);
        } else {
          // Foi apenas um clique
          setIsSwiper(false);
        }
        isMouseDown = false;
      }
    });
  }, []);

  useEffect(() => {
    let projs = moreProjects || [];
    let missingQuantity = 5 - projs?.length;
    let otherProjs = [];

    if (missingQuantity !== 0 && projects?.length > 0) {
      otherProjs = projects
        ?.filter((p, i) => (i + 1 <= missingQuantity) && (projs?.find((s) => s === p.id) === undefined) )
        .map((p) => p.id);
    }
    projs?.push(...otherProjs);

    setShowedProjects(projs);
  }, [moreProjects, projects]);

  return (
    showedProjects?.length > 0 && (
      <section className="pt-[5rem] pb-[8.75rem] lg:pt-[7.5rem]">
        <div className="container">
          <div className="py-4 antialiased font-sans text-xl text-left font-semibold leading-snug select-none transition-colors flex items-center justify-between w-full mb-[2rem] pb-[1rem] pt-0 text-gray-200 hover:text-gray-200 uppercase border-b border-white-10 lg:mb-[2.5rem]">
            <h2 className="content-title-h2 text-gray-200 uppercase">
              Mais Projetos
            </h2>
            <a
              href={"/projetos"}
              className="content-title-h6 capitalize"
              title="Ver todos os projetos"
            >
              Ver todos
            </a>
          </div>
          <Slider
            {...settings}
            className="mx-[-1.5rem] cursor-horizontal lg:mx-0"
          >
            {showedProjects
              .map((project) => project)
              .map((projectId) => projects.find((p) => p.id === projectId))
              .filter(Boolean)
              .map((project) => (
                <div className="px-[0.75rem]" key={`project-${project.ID}`}>
                  <CardProject
                    project={project}
                    technologies={technologies}
                    isSwiper={isSwiper}
                  />
                </div>
              ))}
          </Slider>
        </div>
      </section>
    )
  );
};

export default SectionMoreProjoects;
