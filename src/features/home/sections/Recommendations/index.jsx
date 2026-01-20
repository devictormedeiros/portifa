import Image from "next/image";
import IsDraggingWrapper from "./IsDraggingWrapper";

export default function Recommendations({ data }) {
  return (
    <>
      {typeof data?.titulo === "string" && data.titulo.trim() !== "" && (
        <section
          className={`sec-recommendations g-col-12`}
          style={data?.orderSection ? { order: data.orderSection } : undefined}
        >
          <div className="container">
            <IsDraggingWrapper title={data.title} condition={data.condicao}>
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
                        alt={item?.imagem?.title ?? item.nome}
                        width={550}
                        height={350}
                        sizes="(min-width:1024px) 33vw, 100vw"
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
            </IsDraggingWrapper>
          </div>
        </section>
      )}
    </>
  );
}
