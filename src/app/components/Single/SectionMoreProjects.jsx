import Link from "next/link";
import CardProject from "../CardProjects";
import Slider from "react-slick";

const SectionMoreProjoects = ({
  moreProjects = [],
  technologies,
  projects,
}) => {
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
  return (
    moreProjects?.length > 0 && (
      <section className="pt-[5rem] pb-[8.75rem] lg:pt-[7.5rem]">
        <div className="container">
          <div className="py-4 antialiased font-sans text-xl text-left font-semibold leading-snug select-none transition-colors flex items-center justify-between w-full mb-[2rem] pb-[1rem] pt-0 text-gray-200 hover:text-gray-200 uppercase border-b border-white-10 lg:mb-[2.5rem]">
            <h2 className="content-title-h2 text-gray-200 uppercase">
              Mais Projetos
            </h2>
            <Link href={"/projetos"} className="content-title-h6 capitalize">
                Ver todos
            </Link>
          </div>
          <Slider {...settings} className="mx-[-1.5rem] cursor-horizontal lg:mx-0">
            {Object.values(moreProjects)
              .map((project) => project.ID)
              .map((projectId) => projects.find((p) => p.id === projectId))
              .filter(Boolean)
              .map((project) => (
                <div className="px-[0.75rem]" key={`project-${project.ID}`}>
                  <CardProject project={project} technologies={technologies} />
                </div>
              ))}
          </Slider>
        </div>
      </section>
    )
  );
};

export default SectionMoreProjoects;
