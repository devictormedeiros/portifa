import TabsSkill from "./TabsSkill";

const Skills = ({ data }) => {
    return (
        <>
            {data.map(({ titulo, itens }, index) => (
                <TabsSkill key={index} title={titulo} skills={itens} />
            ))}
        </>
    );
};

export default Skills;
