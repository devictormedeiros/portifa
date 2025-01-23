const Recomendacoes = ({sectionTitle}) => {
    return (
        <section className="sec-recomendacoes">
            <div className="container flex flex-col gap-[3rem] py-[4.375rem] px-6">
                <button className="flex items-center justify-between pb-[1rem] border-b border-white-10 duration-300 hover:text-primary">
                    <h2 className="content-title-h2 text-white uppercase">
                        {sectionTitle}
                    </h2>
                    <div>
                        Arrow
                    </div>
                </button>

                <div className="flex gap-12">
                    <article className="p-10 flex flex-col gap-8">
                        
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Recomendacoes;