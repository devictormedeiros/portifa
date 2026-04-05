import CardProject from "@/components/CardProjects";

const List = ({ projects }) => {
  return (
    <section className="w-full mx-auto flex flex-col gap-12 md:mt-[4rem] mt-[2.5rem] container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {projects?.length > 0 ? (
          <>
            {projects?.map((project) => (
              <CardProject project={project} key={project?.id} />
            ))}
          </>
        ) : (
          <div>Nenhum projeto encontrado</div>
        )}
      </div>
    </section>
  );
};

export default List;
