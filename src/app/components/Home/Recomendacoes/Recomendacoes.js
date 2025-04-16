import Image from "next/image";
import Accordion from "../../Accordion/Accordion";
import { useRef, useState } from "react";

const Recomendacoes = ({data}) => {
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
        <section className={`sec-recomendacoes g-col-12`}>
            <Accordion title={data.titulo}>
            <div 
                className="flex gap-6 items-start shadow-right md:gap-[3rem] overflow-x-auto md:overflow-x-hidden cursor-horizontal"
                ref={containerRef}
                onMouseDown={startDragging}
                onMouseMove={onDragging}
                onMouseUp={stopDragging}
                onMouseLeave={stopDragging}
                onTouchStart={startDragging}
                onTouchMove={onDragging}
                onTouchEnd={stopDragging}
            >
                {data.cards.map((item, index) => (
                    <article key={index} className={`card-recomendations flex flex-col min-w-[17.3125rem] rounded-2xl overflow-hidden md:min-w-[30rem]${index === 0 ? " ms-6 md:ms-0" : ""}`}>
                        <figure className="relative aspect-[16/9]">
                            <Image className="w-full h-full object-cover" src={item.imagem.url} alt="Nome do autor" fill />
                        </figure>
                        <div className="p-6">
                            <p className="content-text text-white-70 pb-6 border-b border-white-10 italic">{item.texto}</p>
                            <div className="flex pt-6 gap-2 items-center text-white-70">
                                <p className="content-text">{item.nome}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            </Accordion>
        </section>
    )
}

export default Recomendacoes;