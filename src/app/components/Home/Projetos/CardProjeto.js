import Image from "next/image";
import Html from "../../Icons/Html";
import Css from "../../Icons/Css";
import Js from "../../Icons/Js";
import ReactIcon from "../../Icons/React";
import Link from 'next/link';

const CardProjeto = ({ projeto }) => {
    return (
        <div className="card-projeto bg-gradient-primary-c rounded-2xl md:mx-0">
            <div className="p-[2rem] flex flex-col gap-6 md:gap-[2.5rem] rounded-lg md:p-[4rem]">
                <div className="flex flex-col gap-[0.5rem] justify-between pb-[.5rem] border-b border-white-10 md:flex-row">
                    <h3 className="content-title-h3 text-gray-200 uppercase">{projeto.nome}</h3>
                    <div className="flex items-center gap-[1.25rem] md:gap-6">
                    {projeto.technologies.map((tech, index) => (
                        <a href="/" className="flex cursor-pointer group" key={index} title={tech}>
                            {tech === "html" && <Html />}
                            {tech === "css" && <Css />}
                            {tech === "js" && <Js />}
                            {tech === "react" && <ReactIcon />}
                        </a>
                    ))}
                    </div>
                </div>

                <div className="flex flex-col gap-6 md:gap-[2.5rem] md:flex-row md:items-center">
                    <figure className="relative h-[11.25rem] md:h-auto md:aspect-[3/2] md:max-w-[45rem] w-full">
                        <Image className="rounded-lg w-full h-full object-cover" src={projeto.img} alt="Descrição da imagem" fill/>
                    </figure>
                    <div className="flex flex-col gap-6 flex-1">
                        <p className="content-text text-white-70 md:line-clamp-none">{projeto.descricao}</p>
                        <Link 
                            href={`/projeto/${projeto.slug}`} 
                            className="py-[.75rem] px-6 text-white button-md text-center bg-white-10 duration-300 rounded uppercase w-full md:w-fit hover:bg-primary"
                        >
                            Ver projeto
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProjeto;