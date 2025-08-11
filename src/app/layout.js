import "./globals.scss";
import "animate.css/animate.compat.css";
import { ProjectsProvider } from "./context/ProjectsContext";
import { DataOptionsProvider } from "./context/DataOptionsContext";
import LayoutWrapper from "./components/LayoutWrapper";
import { DEFAULT_METADATA } from "./lib/metadata-default";

export const metadata = DEFAULT_METADATA;

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="root">
        <ProjectsProvider>
          <DataOptionsProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </DataOptionsProvider>
        </ProjectsProvider>
    </html>
  );
}
