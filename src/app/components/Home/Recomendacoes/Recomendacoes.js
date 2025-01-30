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
            <div className="flex gap-[3rem] items-start overflow-x-hidden">
                {recomendations.map((recomendation) => (
                    <article key={recomendation.id} className="card-recomendations min-w-[30rem] flex flex-col gap-6 p-6 rounded-2xl">
                        <figure className="relative aspect-[16/9]">
                            <Image className="rounded-lg w-full h-full object-cover" src={recomendation.image} alt="Nome do autor" fill />
                        </figure>
                        <div>
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