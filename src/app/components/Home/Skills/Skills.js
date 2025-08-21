import TabsSkill from "./TabsSkill";
const Skills = ({ data }) => {
  return (
    <>
      {data.map(({ titulo, itens, pill, condicao }, index) => (
        <TabsSkill key={index} condition={condicao} titlePill={pill} title={titulo} skills={itens} />
      ))}
    </>
  );
};

export default Skills;
