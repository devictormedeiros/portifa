import HeadingDefault from "@/app/components/Headings/HeadingDefault";
import Link from "next/link";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SectionMoreProjects = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 60,
    },
  };

  if(!data || Object.values(data).length == 0) {
    return;
  }

  return (
    <>
      {data?.moreProjects?.length > 0 && (
        <section className="section-more-projects gradient-main-d pt-[5rem] pb-[5rem] lg:pb-[6.25rem] lg:pt-[7.5rem]">
          <div className="container grid grid-cols-1 mb-8 lg:mb-10">
            <HeadingDefault
              data={{
                title: "Mais projetos",
                link: "/",
                linkText: "Ver todos",
              }}
            />
          </div>
          <div className="max-w-[82.8125rem] w-full mx-auto">
            <Carousel
              swipeable={true}
              responsive={responsive}
              draggable={true}
              showDots={true}
              partialVisible={true}
              arrows={false}
              containerClass="pb-[3.25rem] cursor-horizontal lg:pb-[3.75rem]"
            >
              {Object.values(data?.moreProjects)
                .map((project) => project.ID)
                .map((projectId) =>
                  data?.projects.find((p) => p.id === projectId)
                )
                .filter(Boolean)
                .map((project, index) => (
                  <article
                    key={index}
                    className={`overflow-hidden border-none bg-transparent mx-[0.75rem] lg:mx-[1.5rem]`}
                  >
                    <Link className="flex flex-col" href={`/projeto/${project.slug}`}>
                        <div className="relative w-full h-[230px] rounded-t-2xl overflow-hidden">
                            <img
                            className="absolute w-full h-full object-cover"
                            alt="Project thumbnail"
                            src={project._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/image.png"}
                            />
                        </div>

                        <div className="flex flex-col items-start gap-4 p-6 bg-white-5 rounded-b-2xl">
                        <div className="flex flex-col items-start gap-3 w-full">
                            <div className="flex flex-col items-start gap-[3.75px] w-full">
                            <h3 className="w-full mt-[-0.94px] content-title-h5  text-gray-200">
                                {project.title?.rendered}
                            </h3>
                            </div>

                            <div className="flex items-center gap-4">
                            {project?.icons?.map((icon, iconIndex) => (
                                <img
                                key={`icon-${iconIndex}`}
                                className="w-7"
                                alt="Category icon"
                                src={icon}
                                />
                            ))}
                            </div>
                        </div>
                        <p className="w-full text-white-70 feed-excerpt">
                                {project.excerpt?.rendered && (
                                    <div dangerouslySetInnerHTML={{ __html: project.excerpt.rendered }} />
                                )}
                            </p>
                        </div>
                    </Link>
                  </article>
                ))}
            </Carousel>
          </div>
        </section>
      )}
    </>
  );
};

export default SectionMoreProjects;
