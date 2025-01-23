const CardSkill = ({skill, index, activeSkill}) => {
    return (
        <article key={skill.id} className={`card-skills p-10 flex flex-col gap-8 duration-300 rounded-2xl ${index === activeSkill ? " visible" : " invisible absolute"}`}>
            <div className="flex justify-between items-start pb-[.5rem] border-b border-white-10">
                <div className="flex flex-col gap-[.25rem]">
                    <h3 className="uppercase content-title-h4 text-white-70">
                        {skill.cargo}
                    </h3>
                    <small className="content-text text-white-70">
                        {skill.instituicao}
                    </small>
                </div>

                <h4 className="content-title-h4 text-white-70">
                    {skill.ano}
                </h4>
            </div>
            <div>
                <p className="text-white-70 content-text">
                    {skill.descricao}
                </p>
            </div>
        </article>
    )
}

export default CardSkill;