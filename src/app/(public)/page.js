import HomePageClient from "@/features/home/HomePageClient";
import { ProjectsProvider } from "../context/ProjectsContext";
import { DataOptionsProvider } from "../context/DataOptionsContext";
import LayoutWrapper from "../components/LayoutWrapper";

export default async function Home() {
  return (
    <ProjectsProvider>
      <DataOptionsProvider>
        <LayoutWrapper>
          <HomePageClient />
        </LayoutWrapper>
      </DataOptionsProvider>
    </ProjectsProvider>
  );
}
