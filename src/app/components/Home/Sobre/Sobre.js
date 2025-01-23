import Image from "next/image";
import "./style.scss";
const Sobre = ({ data }) => {
  return (
    <section className="sec-sobre">
      <div className="container">
        <div className="grid grid-cols-12 ">
          <div className="text col-span-7">
            <h2 className="content-title-h2 text-gray-200">
              {data?.titulo_sobre}
            </h2>
            <div
              className="content-text"
              dangerouslySetInnerHTML={{ __html: data?.texto_sobre }}
            />
          </div>
          <div className="image col-span-5">
            <Image
              src={data?.imagem.url}
              alt="Descrição da imagem"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sobre;
