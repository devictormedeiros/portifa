import TabsSkill from "./TabsSkill";

const Skills = ({ data }) => {
  return (
    <>
      {data.map(({ titulo, itens, pill }, index) => (
        <TabsSkill key={index} titlePill={pill} title={titulo} skills={itens} />
      ))}
    </>
  );
};

export default Skills;
