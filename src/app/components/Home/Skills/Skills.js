import { useState } from "react";
import CardSkill from "./CardSkill";

const Skills = ({sectionTitle}) => {
    let skills = [
        {
            id: 1,
            cargo: "nome do cargo",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum. "
        },
        {
            id: 2,
            cargo: "nome do cargo 2",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum. "
        },
        {
            id: 3,
            cargo: "nome do cargo 3",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum. "
        },
        {
            id: 4,
            cargo: "nome do cargo 4",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum. "
        },
        {
            id: 5,
            cargo: "nome do cargo 5",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum. "
        },
        {
            id: 6,
            cargo: "nome do cargo 6",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum. "
        },
        {
            id: 7,
            cargo: "nome do cargo 7",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum. "
        },
        {
            id: 8,
            cargo: "nome do cargo 8",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum. "
        },
        {
            id: 9,
            cargo: "nome do cargo",
            instituicao: "Nome da instituição",
            ano: "2025",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum. "
        },
    ]

    const [activeSkill, setActiveSkill] = useState(0);

    return (
        <section className="sec-skills">
            <div className="container flex flex-col gap-[3rem] py-[4.375rem] px-6">
                <button className="flex items-center justify-between pb-[1rem] border-b border-white-10 duration-300 hover:text-primary">
                    <h2 className="content-title-h2 text-white uppercase">
                        {sectionTitle}
                    </h2>
                    <div>
                        Arrow
                    </div>
                </button>

                <ul className="flex items-center gap-[2.5rem] w-full overflow-hidden">
                    {skills.map((el, i) => (
                        <li key={el.id}>
                            <button onClick={() => setActiveSkill(i)} className="py-[.5rem] px-6 rounded-2xl bg-gray-700 text-gray-200 flex gap-[.25rem] items-center whitespace-nowrap duration-300 hover:bg-primary hover:text-gray-900">
                                <strong className="content-text-bold">{el.ano}</strong>
                                -
                                <span className="content-text">
                                    {el.cargo}
                                </span>
                            </button>
                        </li>
                    ))}
                    
                </ul>

                <div className="relative">
                    {skills.map((el, i) => (
                        <CardSkill key={el.id} skill={el} index={i} activeSkill={activeSkill}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;