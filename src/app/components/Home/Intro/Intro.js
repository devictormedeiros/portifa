"use client";
import TextAnimate from "../../TextAnimate";
import "./style.scss";

const Intro = ({data}) => {
  const frases = data?.destaque_introducao?.map((item) => item.destaque) || [];
  const texto_introducao = data?.texto_introducao || "";

  return (
    <section className="sec-intro">
      <div className="container">
        <div className="text">
          <h1 className="content-title-h1 text-gray-200">
            {texto_introducao}
            <TextAnimate frases={frases} />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Intro;
