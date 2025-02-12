"use client";
import TextAnimate from "../../TextAnimate";
import "./style.scss";
import { memo } from "react";
const Intro = ({ data }) => {
  const frases = data?.destaque_introducao?.map((item) => item.destaque) || [];
  const texto_introducao = data?.texto_introducao || "";

  return (
    <section className="sec-intro overflow-hidden  bg-gray-900">
      <div className="container-text">
        <div className="text container">
          <h1 className="content-title-h1 text-gray-200">
            {texto_introducao}
            <TextAnimate frases={frases} />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default memo(Intro);
