import IconsLib from "@/app/components/Icons";

const HeaderArchive = ({
  dataOption,
  technologies,
  selectedTech,
  setSelectedTech,
  scrollRef,
}) => {
  return (
    <section className="flex flex-col w-full items-center md:gap-10 gap-8 px-6 py-0 relative container">
      <div className="flex flex-col gap-6 w-full p-0">
        <h2 className="content-title-h2 text-gray-200 ">
          {dataOption?.archive?.cabecalho.titulo}
        </h2>

        <div
          ref={scrollRef}
          className={`${
            technologies.length > 6 ? "cursor-horizontal" : ""
          } flex items-center gap-8 lg:gap-4 relative self-stretch px-6 w-[100vw] mx-[-1.5rem] lg:mx-0 lg:w-full overflow-x-auto list-categories lg:px-0`}
        >
          {technologies.map((tech) => {
            const isActive = selectedTech === tech.id;
            return (
              <button
                key={tech.id}
                onClick={() => setSelectedTech(isActive ? null : tech.id)}
                className={`pill-category menu-section flex items-center gap-x-2   py-2 px-4 rounded-3xl duration-300 lg:hover:bg-gray-200  lg:hover:text-gray-700 min-w-[max-content] ${
                  isActive
                    ? "bg-gray-200 text-gray-700 pill-category-active"
                    : "bg-white-10 text-gray-200"
                }`}
              >
                {tech.acf?.tecnologias?.icone && (
                  <div className="img-tech">
                    <IconsLib name={tech.acf?.tecnologias?.icone} />
                  </div>
                )}
                {tech.name}
              </button>
            );
          })}
        </div>
      </div>

      <p className="relative self-stretch text-white-70">
        {dataOption?.archive?.cabecalho.descricao}
      </p>
    </section>
  );
};

export default HeaderArchive;
