import Image from "next/image";
import Accordion from "../../Accordion/Accordion";

const Recomendacoes = ({data}) => {
    let recomendations = [
        {
            id: 1,
            image: "/images/recomendations/image.png",
            text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum.”",
            name: "Nome do autor",
            empresa: "Empresa",
        },
        {
            id: 2,
            image: "/images/recomendations/image.png",
            text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum.”",
            name: "Nome do autor",
            empresa: "Empresa",
        },
        {
            id: 3,
            image: "/images/recomendations/image.png",
            text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum.”",
            name: "Nome do autor",
            empresa: "Empresa",
        },
        {
            id: 4,
            image: "/images/recomendations/image.png",
            text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum.”",
            name: "Nome do autor",
            empresa: "Empresa",
        },
        {
            id: 5,
            image: "/images/recomendations/image.png",
            text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum.”",
            name: "Nome do autor",
            empresa: "Empresa",
        }
    ];

    return (
        <section className={`sec-recomendacoes g-col-12`}>
        <Accordion title={data.titulo}>
            <div className="overflow flex gap-6 items-start shadow-right lg:gap-[3rem]">
                {data.cards.map((item, index) => (
                    <article key={index} className="card-recomendations flex flex-col min-w-[17.3125rem] rounded-2xl lg:min-w-[30rem]">
                        <figure className="relative aspect-[16/9]">
                            <Image className="rounded-lg w-full h-full object-cover" src={item.imagem.url} alt="Nome do autor" fill />
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