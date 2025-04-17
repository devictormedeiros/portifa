const SectionContent = ({data}) => {
    return (
        <section className="section-content w-full mb-[5rem] lg:mb-[7.5rem] w-full max-w-[59.5rem] mx-auto px-6 pt-[3rem]">
            <div className="gutenberg-content text-white-70 feed-excerpt lg:flex-1"   dangerouslySetInnerHTML={{ __html: data?.content?.rendered }} />
        </section>
    )
}

export default SectionContent;