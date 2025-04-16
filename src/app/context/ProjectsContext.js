"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getProjects } from "../api/getProjects"; // ajuste o caminho se necessário

const ProjectsContext = createContext();
export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { projects, technologies } = await getProjects();
        setProjects(projects);
        setTechnologies(technologies);
      } catch (error) {
        console.error("Erro ao buscar Projetos:", error);
      } finally {
        setIsLoadingProjects(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectsContext.Provider
      value={{ projects, technologies, isLoadingProjects }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);
