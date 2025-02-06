import "./style.scss";
import { memo } from "react";
import Image from "next/image";
const Sobre = ({ data }) => {
  return (
    <section className="sec-sobre g-col-12">
      <div className="container">
        <div className="grid grid-cols-12 md:gap-y-0 gap-y-12">
          <div className="text col-span-12 md:col-span-7">
            <h2 className="content-title-h2 text-gray-200">
              {data?.titulo_sobre}
            </h2>
            <div
              className="content-text"
              dangerouslySetInnerHTML={{ __html: data?.texto_sobre }}
            />
          </div>
          <div className="image col-span-12 md:col-span-5">
            <img
              src={data?.imagem.url}
              title={data?.imagem.title}
              alt={data?.imagem.description}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default memo(Sobre);
