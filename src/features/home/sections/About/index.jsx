import "./style.scss";
import Image from "next/image";
import AnimetionAboutWrapper from "./AnimationAboutWrapper";

const About = ({ data }) => {
  return (
    <section
      className="sec-about g-col-12 pt-6 pb-[5rem] md:pt-[7.5rem] md:pb-[10rem]"
      id="quem-sou-eu"
    >
      <div className="container">
        <div className="flex flex-col-reverse md:grid grid-cols-12 gap-y-[2rem] md:gap-x-[2rem]">
          <AnimetionAboutWrapper
            className="text col-span-12 md:col-span-7"
            animateIn="fadeInUp"
            duration={3}
            animateOnce={true}
          >
            <h2 className="content-title-h2 text-gray-200 mb-[1rem] uppercase md:mb-6">
              {data?.titulo_sobre}
            </h2>
            <div
              className="content-text"
              dangerouslySetInnerHTML={{ __html: data?.texto_sobre }}
            />
          </AnimetionAboutWrapper>

          <AnimetionAboutWrapper
            className="image col-span-12 md:col-span-5"
            animateIn="fadeIn"
            duration={3}
            delay={600}
            animateOnce={true}
          >
            <Image
              src={data?.imagem.url}
              alt={data?.imagem.title}
              className="distorted-image"
              width={479} // Proporção
              height={533}
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 40vw"
            />
          </AnimetionAboutWrapper>
        </div>
      </div>
    </section>
  );
};
export default About;
