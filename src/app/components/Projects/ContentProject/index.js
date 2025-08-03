const ContentProject = ({ content }) => {
  return (
    <section className="w-full mb-[5rem] lg:mb-[7.5rem] w-full max-w-[59.5rem] mx-auto px-6 pt-[3rem]">
      <div
        className="text-white-70 gutenberg overflow-x-visible"
        dangerouslySetInnerHTML={{
          __html: content || "",
        }}
      />
    </section>
  );
};

export default ContentProject;
