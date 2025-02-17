import Image from "next/image";
import Accordion from "../../Accordion/Accordion";
import "./style.scss";
import { useEffect, memo } from "react";
import ObserverHtml from "../../../hooks/ObserverHtml";

const Tecnologias = ({ data }) => {
  return (
    <section className="sec-tecnologias g-col-12">
      {data?.map((accordion, index) => {
        // Criar um ObserverHtml separado para cada Accordion
        const { isVisible, targetRef } = ObserverHtml({ threshold: 0.5 });

        useEffect(() => {
          console.log(`Accordion ${index} isVisible:`, isVisible);
        }, [isVisible]);

        return (
          <Accordion key={index} title={accordion.titulo}>
            <ul
              ref={targetRef} // Agora cada <ul> tem um ref único
              className={`grid grid-cols-12 gap-y-6 md:px-0 ${isVisible ? "sec-visible" : ""}`}
            >
              {accordion.itens?.map((items, idx) => (
                <li key={idx} className="grid grid-cols-12 col-span-12 md:gap-y-0 gap-y-4 rounded items-center py-0">
                  <div className="md:col-span-3 col-span-12 flex items-center gap-3">
                    {items?.icone && (
                      <div className="tec-icon">
                        <Image
                          src={items?.icone.url}
                          alt="Descrição da imagem"
                          className="img-fluid contain"
                          width={34}
                          height={34}
                        />
                      </div>
                    )}
                    <div className="tec-text">
                      <p className="content-title-h6 text-white-70">{items.nome}</p>
                    </div>
                  </div>
                  <div className="md:col-span-9 col-span-12">
                    <div className="progress-bar bg-gray-700 block w-full">
                      <span className="progress-bar-percent block" style={{ width: `${items.nivel || 0}%` }}></span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Accordion>
        );
      })}
    </section>
  );
};

export default memo(Tecnologias);
