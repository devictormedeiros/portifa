import { useEffect, useState, useRef } from "react";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import Accordion from "../../Accordion/Accordion";
import CardSkill from "./CardSkill";

const TabsSkill = ({ skills, title }) => {
    const [activeTab, setActiveTab] = useState(0);
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        if (skills.length > 0) setActiveTab(0); // Define o primeiro item como ativo
    }, [skills]);

    const startDragging = (e) => {
        setIsDragging(true);
        e.preventDefault();
        const pageX = e.touches ? e.touches[0].pageX : e.pageX;
        setStartX(pageX - (containerRef.current?.scrollLeft || 0));
        setScrollLeft(containerRef.current?.scrollLeft || 0);
        console.log("startDragging", pageX, startX, scrollLeft);
    }

    const onDragging = (e) => {
        if (!isDragging || !containerRef.current) return;
        e.preventDefault();
        const pageX = e.touches ? e.touches[0].pageX : e.pageX;
        const walk = (pageX - startX) * 1.5;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const stopDragging = () => {
        setIsDragging(false);
    }

    return (
        <Accordion title={title}>
            <Tabs 
                value={activeTab} 
                className="tabs-skill flex flex-col gap-8 md:gap-12"
                
            >
                <TabsHeader 
                    className="bg-transparent flex gap-6 md:gap-10 md:pb-0 md:py-0 overflow-x-auto md:overflow-x-[inherit] cursor-grab active:cursor-grabbing"
                >
                    {skills.map(({ ano, titulo }, index) => (
                        <Tab
                            key={index}
                            value={index}
                            className={`w-auto md:min-w-[190px] whitespace-nowrap py-2 px-4 text-gray-200 bg-gray-700 rounded-lg duration-300 hover:bg-primary hover:text-gray-900 ${activeTab === index ? "bg-primary text-gray-900" : ""}`}
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
                    className="px-6 md:px-0"
                >
                    {skills.map((skill, index) => (
                        <TabPanel className="px-0 py-0" key={index} value={index}>
                            <CardSkill {...skill} />
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </Accordion>
    );
};

export default TabsSkill;
