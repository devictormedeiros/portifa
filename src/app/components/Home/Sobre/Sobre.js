import Image from "next/image";
import "./style.scss";
const Sobre = () => {
    return(
        <section className="sec-sobre">
        <div className="container">
          <div className="grid grid-cols-12 ">
            <div className="text col-span-7">
              <h2 className="content-title-h2 text-gray-200">Lorem ipsum dolor sit amet</h2>
              <p className="content-text mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                sit amet consequat est, ut semper eros. Duis iaculis sagittis
                lacinia. Nulla tellus arcu, malesuada vel lacus at, interdum
                laoreet metus. Vivamus vel turpis ut nulla volutpat
                ullamcorper. Sed interdum tortor venenatis consectetur dictum.
              </p>
              <p className="content-text mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                sit amet consequat est, ut semper eros. Duis iaculis sagittis
                lacinia. Nulla tellus arcu, malesuada vel lacus at, interdum
                laoreet metus. Vivamus vel turpis ut nulla volutpat
                ullamcorper. Sed interdum tortor venenatis consectetur dictum.
              </p>
              <p className="content-text mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                sit amet consequat est, ut semper eros. Duis iaculis sagittis
                lacinia. Nulla tellus arcu, malesuada vel lacus at, interdum
                laoreet metus. Vivamus vel turpis ut nulla volutpat
                ullamcorper. Sed interdum tortor venenatis consectetur dictum.
              </p>
              <p className="content-text mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                sit amet consequat est, ut semper eros. Duis iaculis sagittis
                lacinia. Nulla tellus arcu, malesuada vel lacus at, interdum
                laoreet metus. Vivamus vel turpis ut nulla volutpat
                ullamcorper. Sed interdum tortor venenatis consectetur dictum.
              </p>
              <p className="content-text mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                sit amet consequat est, ut semper eros. Duis iaculis sagittis
                lacinia. Nulla tellus arcu, malesuada vel lacus at, interdum
                laoreet metus. Vivamus vel turpis ut nulla volutpat
                ullamcorper. Sed interdum tortor venenatis consectetur dictum.
              </p>
            </div>
            <div className="image col-span-5">
              <Image
                src="/images/img-portifa.png"
                alt="Descrição da imagem"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Sobre;