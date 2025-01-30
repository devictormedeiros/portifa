import Image from "next/image";

const CardProjeto = ({ projeto }) => {
    return (
        <article className="sticky top-[7.5rem] card-projeto col-span-12 bg-gradient-primary-c rounded-2xl">
            <div className="p-[4rem] flex flex-col gap-[2.5rem] rounded-lg">
                <div className="flex justify-between pb-[.5rem] border-b border-white-10">
                    <h3 className="content-title-h3 text-gray-200 uppercase">{projeto.nome}</h3>
                    <div className="flex items-center gap-6">
                    {projeto.technologies.map((tech, index) => (
                        <div className="flex cursor-pointer" key={index}>
                            <Image  className="rounded-lg w-full h-full" src={`/icons/${tech}.svg`} alt="Tecnologia X" width={25} height={25}/>
                        </div>
                    ))}
                    </div>
                </div>

                <div className="flex flex-col gap-[2.5rem] lg:flex-row lg:items-center">
                    <figure className="relative aspect-[3/2] max-w-[45rem] w-full">
                        <Image className="rounded-lg w-full h-full" src={projeto.img} alt="Descrição da imagem" fill/>
                    </figure>
                    <div className="flex flex-col gap-6 flex-1">
                        <p className="content-text text-white-70">{projeto.descricao}</p>
                        <a href={projeto.link} className="py-[.75rem] px-6 text-white button-md text-center bg-white-10 duration-300 rounded uppercase w-fit hover:bg-primary">Ver projeto</a>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CardProjeto;