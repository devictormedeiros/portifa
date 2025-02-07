import { useEffect, useState } from "react";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import Accordion from "../../Accordion/Accordion";
import CardSkill from "./CardSkill";

const TabsSkill = ({ skills, title }) => {
    const [activeTab, setActiveTab] = useState();

    useEffect(() => {
        setActiveTab(skills[0].value);
    }, [skills]);

    return (
        <Accordion title={title}>
            <Tabs value={skills[0].value} className="tabs-skill flex flex-col gap-[2rem] lg:gap-12">
                <TabsHeader
                    className="bg-transparent flex gap-6 lg:gap-[2.5rem]"
                    indicatorProps={{
                    }}
                >
                    {skills.map(({ value, ano, cargo }) => (
                        <Tab 
                            key={value} 
                            value={value} 
                            className={`whitespace-nowrap py-2 px-4 text-gray-200 bg-gray-700 rounded-[0.5rem] lg:rounded-2xl duration-300 hover:bg-primary hover:text-gray-900${activeTab === value ? " bg-primary text-gray-900" : ""}`}
                            onClick={() => setActiveTab(value)}
                        >
                            <strong>
                                {ano}
                            </strong>
                            {` - ${cargo}`}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody
                    animate={{
                        initial: { y: 250 },
                        mount: { y: 0 },
                        unmount: { y: 250 },
                    }}
                >
                    {skills.map(({ value, ano, cargo, instituicao, descricao}) => (
                        <TabPanel key={value} value={value}>
                            <CardSkill key={value} ano={ano} cargo={cargo} instituicao={instituicao} descricao={descricao} index={value} />
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </Accordion>
    )
}

export default TabsSkill;