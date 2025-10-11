import Image from "next/image";
import Accordion from "../../Accordion";
import { useRef, useState, useEffect } from "react";


const Recommendations = ({ data }) => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e) => {
    setIsDragging(true);
    e.preventDefault();
    const pageX = e.touches ? e.touches[0].pageX : e.pageX;
    setStartX(pageX);
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const onDragging = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const pageX = e.touches ? e.touches[0].pageX : e.pageX;
    const walk = (pageX - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <>
    {typeof data?.titulo === "string" && data.titulo.trim() !== "" && (
    <section
      className={`sec-recommendations g-col-12`}
      style={data?.orderSection ? { order: data.orderSection } : undefined}
    >
      <Accordion title={data.titulo} condition={data.condicao}>
        <div
          className="flex gap-6 items-start shadow-right md:gap-[3rem] overflow-x-auto md:overflow-x-hidden cursor-horizontal list-recommendations scroll-hide-bar-mobile"
          ref={containerRef}
          onMouseDown={startDragging}
          onMouseMove={onDragging}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onTouchStart={startDragging}
          onTouchMove={onDragging}
          onTouchEnd={stopDragging}
        >
          {Array.isArray(data?.cards) &&
            data.cards.map((item, index) => (
              <article
                key={index}
                className={`card-recommendations flex flex-col min-w-[17.3125rem] rounded-2xl overflow-hidden md:min-w-[30rem]${
                  index === 0 ? " ms-6 md:ms-0" : ""
                }`}
              >
                <figure className="relative aspect-[16/9]">
                  <Image
                    className="w-full h-full object-cover img-with-skeleton"
                    src={item.imagem.url}
                    alt="Nome do autor"
                    width={550}
                    height={350}
                    sizes="(min-width:1024px) 33vw, 100vw"
                    loading="eager"
                  />
                </figure>
                <div className="p-6">
                  <p
                    className="content-text text-white-70 pb-6 border-b border-white-10 italic"
                    dangerouslySetInnerHTML={{ __html: item.texto }}
                  />
                  <div className="flex pt-6 gap-2 items-center text-white-70">
                    <p className="content-text">{item.nome}</p>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </Accordion>
    </section>
      )}
    </>
  );
};

export default Recommendations;
