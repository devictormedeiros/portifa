import "./style.scss";
import { memo } from "react";
import ScrollAnimation from "react-animate-on-scroll";
const Sobre = ({ data }) => {
  return (
    <section className="sec-sobre g-col-12 pt-6 pb-[5rem] md:pt-[7.5rem] md:pb-[10rem]">
      <div className="container">
        <div className="flex flex-col-reverse md:grid grid-cols-12 gap-y-[2rem] md:gap-x-[2rem]">
            <ScrollAnimation className="text col-span-12 md:col-span-7" animateIn="fadeInUp" animateOnce={true} duration={3}>
 
              <h2 className="content-title-h2 text-gray-200 mb-[1rem] uppercase md:mb-6">
                {data?.titulo_sobre}
              </h2>
              <div
                className="content-text"
                dangerouslySetInnerHTML={{ __html: data?.texto_sobre }}
              />

            </ScrollAnimation>
            <ScrollAnimation className="image col-span-12 md:col-span-5" animateIn="zoomIn" animateOnce={true} duration={2}>
              <img
                src={data?.imagem.url}
                title={data?.imagem.title}
                alt={data?.imagem.description}
              />
            </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};
export default memo(Sobre);
