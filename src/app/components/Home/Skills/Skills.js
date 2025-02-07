import TabsSkill from "./TabsSkill";

const Skills = () => {
    let experience = [
        {
            value: 1,
            cargo: "nome do cargo",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie value sapien in, aliquam consequat enim. Nam value ipsum ultricies ex vulputate condimentum. "
        },
        {
            value: 2,
            cargo: "nome do cargo 2",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie value sapien in, aliquam consequat enim. Nam value ipsum ultricies ex vulputate condimentum. "
        },
        {
            value: 3,
            cargo: "nome do cargo 3",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie value sapien in, aliquam consequat enim. Nam value ipsum ultricies ex vulputate condimentum. "
        },
        {
            value: 4,
            cargo: "nome do cargo 4",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie value sapien in, aliquam consequat enim. Nam value ipsum ultricies ex vulputate condimentum. "
        },
        {
            value: 5,
            cargo: "nome do cargo 5",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie value sapien in, aliquam consequat enim. Nam value ipsum ultricies ex vulputate condimentum. "
        },
        {
            value: 6,
            cargo: "nome do cargo 6",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie value sapien in, aliquam consequat enim. Nam value ipsum ultricies ex vulputate condimentum. "
        },
        {
            value: 7,
            cargo: "nome do cargo 7",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie value sapien in, aliquam consequat enim. Nam value ipsum ultricies ex vulputate condimentum. "
        },
        {
            value: 8,
            cargo: "nome do cargo 8",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie value sapien in, aliquam consequat enim. Nam value ipsum ultricies ex vulputate condimentum. "
        },
        {
            value: 9,
            cargo: "nome do cargo",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie value sapien in, aliquam consequat enim. Nam value ipsum ultricies ex vulputate condimentum. "
        },
    ]

    let formation = [
        {
            value: 1,
            cargo: "nome do cargo",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie value sapien in, aliquam consequat enim. Nam value ipsum ultricies ex vulputate condimentum. "
        },
        {
            value: 2,
            cargo: "nome do cargo 2",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie value sapien in, aliquam consequat enim. Nam value ipsum ultricies ex vulputate condimentum. "
        },
        {
            value: 3,
            cargo: "nome do cargo 3",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie value sapien in, aliquam consequat enim. Nam value ipsum ultricies ex vulputate condimentum. "
        },
        {
            value: 4,
            cargo: "nome do cargo 4",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie value sapien in, aliquam consequat enim. Nam value ipsum ultricies ex vulputate condimentum. "
        },
        {
            value: 5,
            cargo: "nome do cargo 5",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie value sapien in, aliquam consequat enim. Nam value ipsum ultricies ex vulputate condimentum. "
        },
        {
            value: 6,
            cargo: "nome do cargo 6",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie value sapien in, aliquam consequat enim. Nam value ipsum ultricies ex vulputate condimentum. "
        },
        {
            value: 7,
            cargo: "nome do cargo 7",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie value sapien in, aliquam consequat enim. Nam value ipsum ultricies ex vulputate condimentum. "
        },
        {
            value: 8,
            cargo: "nome do cargo 8",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie value sapien in, aliquam consequat enim. Nam value ipsum ultricies ex vulputate condimentum. "
        },
        {
            value: 9,
            cargo: "nome do cargo",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie value sapien in, aliquam consequat enim. Nam value ipsum ultricies ex vulputate condimentum. "
        },
    ]

    return (
        <>
            <TabsSkill skills={experience} title={"Experiência"} />
            <TabsSkill skills={formation} title={"Tecnologias"} />
        </>
    )
}

export default Skills;