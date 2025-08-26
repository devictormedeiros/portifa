import TabsSkill from "./TabsSkill";
const Skills = ({ data }) => {
  return (
    <>
      {data.map(({ titulo, itens, pill, condicao, orderSection }, index) => (
        <div key={index} style={orderSection ? { order: orderSection } : undefined}
>
          <TabsSkill key={index} condition={condicao} titlePill={pill} title={titulo} skills={itens} />
        </div>
      ))}
    </>
  );
};

export default Skills;
