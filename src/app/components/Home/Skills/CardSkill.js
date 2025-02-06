const CardSkill = ({index, cargo, instituicao, ano, descricao}) => {
    return (
        <article key={index} className="card-skills flex flex-col gap-6 lg:gap-8 duration-300 rounded-2xl p-6 lg:p-10">
            <div className="flex justify-between items-start pb-[.5rem] border-b border-white-10">
                <div className="flex flex-col gap-[.25rem]">
                    <h3 className="uppercase content-title-h4 text-white-70">
                        {cargo}
                    </h3>
                    <small className="content-text text-white-70">
                        {instituicao}
                    </small>
                </div>

                <h4 className="content-title-h4 text-white-70">
                    {ano}
                </h4>
            </div>
            <div>
                <p className="text-white-70 content-text">
                    {descricao}
                </p>
            </div>
        </article>
    )
}

export default CardSkill;