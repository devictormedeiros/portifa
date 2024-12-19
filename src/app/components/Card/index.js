"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Card = (props) => {
  const { post } = props;
  const { title, excerpt, tecnologias, acf } = post;

  const [tecnologiasAttr, setTecnologiasAttr] = useState([]);

  const getTerms = async () => {
    if (!tecnologias || tecnologias.length === 0) return;
    try {
      const tecnologiaIds = tecnologias.join(',');
      const response = await fetch(
        `http://localhost/portifa-wp/wp-json/wp/v2/tecnologias?include=${tecnologiaIds}`
      );
      const termsData = await response.json();
      setTecnologiasAttr(termsData);
    } catch (error) {
      console.error("Erro ao buscar tecnologias:", error);
    }
  };

  useEffect(() => {
    getTerms();

  }, [tecnologias]);

  useEffect(() => {
    console.log(post)
  }, []);
  // useEffect(() => {
  //   console.log(tecnologiasAttr); 
  // }, [tecnologiasAttr]);

  return (
    <article className="card col-span-4">
      <figure className="card-image mb-4">
        <img
          src="https://via.placeholder.com/300"
          alt="Placeholder"
          className="w-full"
        />
      </figure>
      <div className="card-content">
        <h1 className="uppercase">{title.rendered}</h1>
        <p className="ano">{acf.ano}</p>
        <div className="categories">
          <ul>
            {/* Renderiza as tecnologias obtidas */}
            {tecnologiasAttr.length > 0 ? (
              tecnologiasAttr.map((tecnologia) => (
                <li key={tecnologia.id}><Link href={tecnologia.link}>{tecnologia.name}</Link></li>
              ))
            ) : (
              <li>Carregando tecnologias...</li>
            )}
          </ul>
        </div>
        <p>{excerpt.rendered.replace(/(<([^>]+)>)/ig, "")}</p>
      </div>
    </article>
  );
};

export default Card;
