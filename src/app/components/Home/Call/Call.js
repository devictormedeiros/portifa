const Call = ({data}) => {

    return (
        <section className="sec-call md:h-[300vh]">  
            <div className="container flex justify-center items-center h-[100vh] sticky top-0">
                <p className="motion-2 text-white text-center uppercase max-w-[77.5rem] w-full">
                   {data.texto}
                </p>
            </div>
        </section>
    )
}

export default Call;