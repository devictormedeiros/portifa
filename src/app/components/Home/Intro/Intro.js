"use client";
import TextAnimate from "../../TextAnimate";
import "./style.scss";

const Intro = () => {
  const frases = [
    "Olá, bem-vindo!",
    "Conheça nossos produtos.",
    "Aproveite as ofertas.",
  ];
  return (
    <section className="sec-intro">
      <div className="container">
        <div className="text">
          <h1 className="content-title-h1 text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Etiam at
            placerat justo
            <TextAnimate frases={frases} />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Intro;
