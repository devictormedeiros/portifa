import { useEffect, useState, useRef } from "react";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
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
    setStartX(pageX);
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const onDragging = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const pageX = e.touches ? e.touches[0].pageX : e.pageX;
    const walk = (pageX - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    skills?.length > 0 && (
      <Accordion title={title}>
        <Tabs value={activeTab} className="tabs-skill flex flex-col gap-6">
          <TabsHeader
            ref={containerRef}
            className="bg-transparent flex gap-6 md:gap-10 p-0 duration-300 overflow-x-scroll cursor-horizontal rounded-[0] scroll-hide-bar-mobile"
            onMouseDown={startDragging}
            onMouseMove={onDragging}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onTouchStart={startDragging}
            onTouchMove={onDragging}
            onTouchEnd={stopDragging}
          >
            {skills?.map(({ ano, titulo }, index) => (
              <Tab
                key={index}
                value={index}
                className={`w-auto md:min-w-[11.875rem] whitespace-nowrap rounded-lg py-2 px-4 text-gray-200 bg-gray-700 duration-500 ${
                  !isDragging
                    ? "hover:bg-primary hover:text-gray-900"
                    : "cursor-grab active:cursor-grabbing"
                } ${activeTab === index ? "bg-primary text-gray-900" : ""} ${
                  index === 0 ? "ms-6 md:ms-0" : ""
                }`}
                onClick={() => !isDragging && setActiveTab(index)}
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
            className="md:px-0"
          >
            {skills?.map((skill, index) => (
              <TabPanel
                className="duration-[1500ms] ease-in-out px-6 py-0 md:px-0"
                key={index}
                value={index}
              >
                <CardSkill {...skill} />
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </Accordion>
    )
  );
};

export default TabsSkill;
