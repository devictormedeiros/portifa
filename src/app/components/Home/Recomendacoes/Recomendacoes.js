import Image from "next/image";
import Accordion from "../../Accordion/Accordion";

const Recomendacoes = () => {
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
        <Accordion title={"Recomendações"}>
            <div className="overflow flex gap-6 items-start shadow-right lg:gap-[3rem]">
                {recomendations.map((recomendation) => (
                    <article key={recomendation.id} className="card-recomendations flex flex-col min-w-[17.3125rem] rounded-2xl lg:min-w-[30rem]">
                        <figure className="relative aspect-[16/9]">
                            <Image className="rounded-lg w-full h-full object-cover" src={recomendation.image} alt="Nome do autor" fill />
                        </figure>
                        <div className="p-6">
                            <p className="content-text text-white-70 pb-6 border-b border-white-10 italic">{recomendation.text}</p>
                            <div className="flex pt-6 gap-2 items-center text-white-70">
                                <p className="content-text">{recomendation.name}</p>
                                -
                                <p className="content-text">{recomendation.empresa}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </Accordion>
    )
}

export default Recomendacoes;