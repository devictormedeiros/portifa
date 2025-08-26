import Image from "next/image";
import Accordion from "../../Accordion";
import "./style.scss";
import { memo } from "react";
import { useEffect, useState } from "react";
import ObserverHtml from "../../../hooks/ObserverHtml";
import IconsLib from "../../Icons";

const Tecnologias = ({ data }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const { isVisible, targetRef } = ObserverHtml({ threshold: 0.5 });

  useEffect(() => {
    if (isVisible && !isAnimated) {
      setIsAnimated(true);
    }
  }, [isVisible, isAnimated]);




  return (
    <>
      {data?.map((accordion, index) => {
        return (
          <>
            <section key={index} ref={targetRef} className={`sec-tecnologias g-col-12`} style={accordion?.orderSection ? { order: accordion.orderSection } : undefined}>
              <Accordion
                
                title={accordion.titulo}
                condition={accordion.condicao}
              >
                <ul className={`grid grid-cols-12 gap-y-6 px-6 md:px-0`}>
                  {accordion.itens?.map((items, idx) => (
                    <li
                      key={idx}
                      className="grid grid-cols-12 col-span-12 md:gap-y-0 gap-y-4 rounded items-center py-0"
                    >
                      <div className="md:col-span-3 col-span-12 flex items-center gap-3">
                        {items?.icon_custom ? (
                          <div className="tec-icon">
                            <Image
                              src={items?.icon_custom}
                              alt="Descrição da imagem"
                              className="img-fluid contain"
                              width={34}
                              height={34}
                            />
                          </div>
                        ) : items?.icone ? (
                          <div className="img-tech">
                            <IconsLib name={items?.icone} />
                          </div>
                        ) : null}
                        <div className="tec-text">
                          <p className="content-title-h6 text-white-70">
                            {items.nome}
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-9 col-span-12">
                        <div className="progress-bar bg-gray-700 block w-full">
                          <span
                            className="progress-bar-percent block"
                            style={{
                              width: isAnimated ? `${items.nivel || 0}%` : "0%",
                            }}
                          ></span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Accordion>
            </section>
          </>
        );
      })}
    </>
  );
};

export default memo(Tecnologias);
