import Image from "next/image";

const TopPage = ({ bgImageDesktop, bgImageMobile }) => {
  return (
    <section className="flex flex-col w-full items-center header-projects">
      <div className="relative w-full h-[22.5rem] md:h-[28.125rem]">
        {bgImageDesktop && (
          <Image
            src={bgImageDesktop?.url}
            alt={bgImageDesktop?.title}
            fill
            priority
            className="object-cover object-center z-0 img-with-skeleton hidden lg:block"
          />
        )}
        {bgImageMobile && (
          <Image
            src={bgImageMobile?.url}
            alt={bgImageMobile?.title}
            fill
            priority
            className="object-cover object-center z-0 img-with-skeleton lg:hidden"
          />
        )}
        <div
          className="absolute inset-0 w-full h-full [background:linear-gradient(180deg,rgba(13,13,13,1)_0%,rgba(13,13,13,0.6)_33%,rgba(13,13,13,0.6)_67%,rgba(13,13,13,1)_100%)]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default TopPage;
