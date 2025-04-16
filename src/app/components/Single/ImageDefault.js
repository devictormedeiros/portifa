const ImageDefault = ({data}) => {
    return (
        <section className="section-single-main flex flex-col w-full items-center">
          <div className="relative w-full h-[22.5rem] md:h-[28.125rem]">
            <div
              className="w-full h-[22.5rem] md:h-[28.125rem]"
              aria-hidden="true"
            >
              <img
                className="w-full h-full flex object-cover"
                alt="Imaem Destacada"
                src={data.image}
              />
            </div>
            <div
              className="absolute inset-0 w-full h-full [background:linear-gradient(180deg,rgba(13,13,13,1)_0%,rgba(13,13,13,0.6)_33%,rgba(13,13,13,0.6)_67%,rgba(13,13,13,1)_100%)]"
              aria-hidden="true"
            ></div>
          </div>
        </section>
    )
}

export default ImageDefault;