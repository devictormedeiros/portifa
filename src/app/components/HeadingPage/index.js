import Filter from "./Filter";
import Pills from "./Pills";
import "./style.scss";


const HeadingPage = () => {
  
  return (
    <div className="col-span-12">
      <section className="heading-page-bg">
      </section>
      <section className="heading-page">
        <div className="container">
          <div className="grid grid-cols-4 gap-y-10">
            <div className="col-span-12 flex items-center">
              <div className="heading-title w-11/12">
                <h1 className="uppercase text-[#BFBFBF]">Projetos</h1>
              </div>
              <Filter />
            </div>

            <Pills />
            <div className="heading-content col-span-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                faucibus, tortor id cursus scelerisque, quam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeadingPage;
