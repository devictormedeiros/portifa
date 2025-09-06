import IconsLib from "@/app/components/Icons";
import { useLayoutEffect, useRef, useState } from "react";

const HeaderSingle = ({ currentProject, projectTechnologies, scrollRef }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isPillsScrolled, setIsPillsScrolled] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const startDragging = (e) => {
    setIsDragging(true);
    const pageX = e.touches ? e.touches[0].pageX : e.pageX;
    setStartX(pageX);
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const onDragging = (e) => {
    if (!isDragging || !containerRef.current) return;
    //e.preventDefault();
    const pageX = e.touches ? e.touches[0].pageX : e.pageX;
    const walk = (pageX - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsPillsScrolled(
        containerRef.current.scrollWidth > containerRef.current.clientWidth
      );
    }, 4000);
  }, [containerRef]);

  return (
    <section className="flex flex-col w-full items-center md:gap-10 gap-8 px-6 py-0 relative container">
      <div className="w-full flex flex-col gap-[1.5rem] pb-[3rem] border-b border-[#FFFFFF33] lg:flex-row lg:items-center lg:gap-[5rem]">
        <div className="lg:max-w-[41.4375rem]">
          <small className="content-text-bold text-white-70">
            {currentProject?.acf?.hat || "Projeto"}
          </small>
          <div className="flex items-center gap-[2.0625rem] mb-[1rem] lg:gap-[4rem]">
            <h1 className="content-title-h2 text-gray-200 uppercase">
              {currentProject.title?.rendered || "Sem título"}
            </h1>
            {currentProject?.acf?.link !== "" && (
              <a
                href={currentProject.link}
                className="text-gray-200 bg-white-10 hover:bg-primary menu-section flex items-center py-2 px-4 rounded-3xl gap-x-2 flex-none duration-500"
                target="_blank"
                rel="noopener noreferrer"
                title="Acessar projeto"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8 12C7.95913 12 8.11174 11.9368 8.22426 11.8243C8.33679 11.7117 8.4 11.5591 8.4 11.4C8.4 11.2409 8.33679 11.0883 8.22426 10.9757C8.11174 10.8632 7.95913 10.8 7.8 10.8H2.8C2.37565 10.8 1.96869 10.6314 1.66863 10.3314C1.36857 10.0313 1.2 9.62435 1.2 9.2V2.8C1.2 2.37565 1.36857 1.96869 1.66863 1.66863C1.96869 1.36857 2.37565 1.2 2.8 1.2H7.8C7.95913 1.2 8.11174 1.13679 8.22426 1.02426C8.33679 0.911742 8.4 0.75913 8.4 0.6C8.4 0.44087 8.33679 0.288258 8.22426 0.175736C8.11174 0.063214 7.95913 0 7.8 0H2.8C2.05739 0 1.3452 0.294999 0.820101 0.820101C0.294999 1.3452 0 2.05739 0 2.8V9.2C0 9.94261 0.294999 10.6548 0.820101 11.1799C1.3452 11.705 2.05739 12 2.8 12H7.8ZM8.5928 2.9592C8.65068 2.90571 8.71853 2.86415 8.79248 2.8369C8.86642 2.80964 8.94501 2.79721 9.02376 2.80033C9.10251 2.80345 9.17987 2.82206 9.25143 2.85508C9.32298 2.8881 9.38733 2.9349 9.4408 2.9928L11.8408 5.5928C11.9432 5.70366 12.0001 5.84906 12.0001 6C12.0001 6.15094 11.9432 6.29634 11.8408 6.4072L9.4408 9.0072C9.3327 9.124 9.18262 9.19308 9.02359 9.19923C8.86456 9.20538 8.7096 9.1481 8.5928 9.04C8.476 8.9319 8.40693 8.78182 8.40077 8.62279C8.39462 8.46376 8.4519 8.3088 8.56 8.192L10.0304 6.5992H3.8C3.64087 6.5992 3.48826 6.53599 3.37574 6.42346C3.26321 6.31094 3.2 6.15833 3.2 5.9992C3.2 5.84007 3.26321 5.68746 3.37574 5.57494C3.48826 5.46241 3.64087 5.3992 3.8 5.3992H10.0296L8.5592 3.8064C8.50571 3.74852 8.46415 3.68067 8.4369 3.60672C8.40964 3.53278 8.39721 3.45419 8.40033 3.37544C8.40345 3.29669 8.42206 3.21933 8.45508 3.14777C8.4881 3.07622 8.5349 3.01267 8.5928 2.9592Z"
                    fill="#DEDEDE"
                  />
                </svg>
                Acessar
              </a>
            )}
          </div>
          <div
            ref={containerRef}
            className={`${
              isPillsScrolled ? "cursor-horizontal" : ""
            } scroll-drag flex items-center gap-8 relative self-stretch overflow-x-auto list-categories scroll-hide-bar-mobile px-6 w-[100vw] mx-[-1.5rem] lg:mx-0 lg:w-full lg:max-w-[41.125rem] lg:gap-4 lg:px-0`}
            onMouseDown={startDragging}
            onMouseMove={onDragging}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onTouchStart={startDragging}
            onTouchMove={onDragging}
            onTouchEnd={stopDragging}
          >
            {projectTechnologies.map((tech) => (
              <a
                key={tech.id}
                href={`/projetos?t=${tech.slug}`}
                className="pill-category menu-section flex items-center gap-x-2  py-2 px-4 rounded-3xl duration-300 flex-none group lg:hover:bg-gray-200 lg:hover:text-gray-700 bg-white-10 text-gray-200"
                title={tech.name}
                draggable="false"
              >
                {tech.acf?.tecnologias?.icone && (
                  <div className="img-tech">
                    <IconsLib name={tech.acf?.tecnologias?.icone} />
                  </div>
                )}
                {tech.name}
              </a>
            ))}
          </div>
        </div>
        <div className="text-white-70 feed-excerpt lg:flex-1">
          <div
            dangerouslySetInnerHTML={{
              __html:
                currentProject.excerpt?.rendered || "Sem descrição disponível",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderSingle;
