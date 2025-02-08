import { useEffect, useState } from "react";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import Accordion from "../../Accordion/Accordion";
import CardSkill from "./CardSkill";

const TabsSkill = ({ skills, title }) => {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        if (skills.length > 0) setActiveTab(0); // Define o primeiro item como ativo
    }, [skills]);

    return (
        <Accordion title={title}>
            <Tabs value={activeTab} className="tabs-skill flex flex-col gap-8 md:gap-12">
                <TabsHeader className="bg-transparent flex gap-6 md:gap-10">
                    {skills.map(({ ano, titulo }, index) => (
                        <Tab
                            key={index}
                            value={index} // Usando o índice como valor único
                            className={`w-auto md:min-w-[190px] whitespace-nowrap py-2 px-4 text-gray-200 bg-gray-700 rounded-lg duration-300 hover:bg-primary hover:text-gray-900${activeTab === index ? " bg-primary text-gray-900" : ""}`}
                            onClick={() => setActiveTab(index)}
                        >
                            <strong>{ano}</strong> - {titulo}
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
                    {skills.map((skill, index) => (
                        <TabPanel className="px-0" key={index} value={index}>
                            <CardSkill {...skill} />
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </Accordion>
    );
};

export default TabsSkill;
