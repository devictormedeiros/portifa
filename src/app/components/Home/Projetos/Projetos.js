import CardProjeto from "./CardProjeto";

const Projetos = () => {
    let projetos = [
        {
            id: 1,
            nome: "Lorem ipsum dolor sit amet",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum.  ",
            img: "/images/projeto.png",
            link: "https://github.com",
            technologies: ["html", "css", "js", "react"]
        },
        {
            id: 2,
            nome: "Lorem ipsum dolor sit amet",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum.  ",
            img: "/images/projeto.png",
            link: "https://github.com",
            technologies: ["html", "css", "js", "react"]
        },
        {
            id: 1,
            nome: "Lorem ipsum dolor sit amet",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum.  ",
            img: "/images/projeto.png",
            link: "https://github.com",
            technologies: ["html", "css", "js", "react"]
        },
    ]

    return (
        <section className="sec-projetos g-col-12">
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    {projetos.map((projeto) => (
                        <CardProjeto key={projeto.id} projeto={projeto} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projetos;