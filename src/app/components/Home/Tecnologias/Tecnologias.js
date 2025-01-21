import Image from "next/image";
import Accordion from "../../Accordion/Accordion";
import "./style.scss";

const Tecnologias = ({ data }) => {
  return (
    <section className={`sec-tecnologias`}>
      <Accordion title="Tecnologias">
        <ul className="grid grid-cols-12 gap-4">
          {data?.map((accordion) => {
            return (
              <li className="grid grid-cols-12 col-span-12 py-3 rounded items-center">
                <div className="col-span-3 flex items-center gap-3">
                  {accordion?.icone && (
                    <div className="tec-icon">
                      <Image
                        src={accordion?.icone.url}
                        alt="Descrição da imagem"
                        width={34}
                        height={34}
                      />
                    </div>
                  )}
                  <div className="tec-text">
                    <p className="content-title-h6 text-white-70">
                      {accordion.nome}
                    </p>
                  </div>
                </div>
                <div className="col-span-9">
                  <div className="progress-bar bg-gray-700 block w-full">
                    <span
                      className="progress-bar-percent block"
                      style={{ width: `${accordion.nivel || 0}%` }}
                    ></span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Accordion>
    </section>
  );
};

export default Tecnologias;
