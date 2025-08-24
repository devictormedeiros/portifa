import "./style.scss";
import { memo, useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
const About = ({ data }) => {
  const [offsetValue, setOffsetValue] = useState(150); // Valor padrão

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    setOffsetValue(window.innerHeight * 1); // Calcula 50vh
  }, []);

  const AnimationWrapper = ({ children, ...props }) => {
    return isMobile ? (
      <div className={props.className}>{children}</div>
    ) : (
      <ScrollAnimation {...props}>{children}</ScrollAnimation>
    );
  };

  return (
    <section className="sec-about g-col-12 pt-6 pb-[5rem] md:pt-[7.5rem] md:pb-[10rem]">
      <div className="container">
        <div className="flex flex-col-reverse md:grid grid-cols-12 gap-y-[2rem] md:gap-x-[2rem]">
          <AnimationWrapper
            className="text col-span-12 md:col-span-7"
            animateIn="fadeInUp"
            duration={3}
            offset={offsetValue}
            animateOnce={true}
          >
            <h2 className="content-title-h2 text-gray-200 mb-[1rem] uppercase md:mb-6">
              {data?.titulo_sobre}
            </h2>
            <div
              className="content-text"
              dangerouslySetInnerHTML={{ __html: data?.texto_sobre }}
            />
          </AnimationWrapper>

          <AnimationWrapper
            className="image col-span-12 md:col-span-5"
            animateIn="fadeIn"
            duration={2}
            delay={500}
            animateOnce={true}
          >
            <img
              src={data?.imagem.url}
              alt={data?.imagem.description}
              title={data?.imagem.title}
              className="distorted-image"
            />
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};
export default memo(About);
