const CardSkill = ({ titulo, subtitulo, ano, texto }) => {
  return (
    <article className="card-skills flex flex-col gap-6 md:gap-8 duration-300 rounded-2xl p-6 md:p-10">
      <div className="flex justify-between items-start pb-2 border-b border-white-10">
        <div className="flex flex-col gap-1">
          <h3 className="uppercase content-title-h4 text-white-70">{titulo}</h3>
          <small className="content-text text-white-70">{subtitulo}</small>
        </div>
        <h4 className="content-title-h4 text-white-70">{ano}</h4>
      </div>
      <p className="text-white-70 content-text">{texto}</p>
    </article>
  );
};

export default CardSkill;
