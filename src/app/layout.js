import "./globals.scss";
import "animate.css/animate.compat.css";
import { ProjectsProvider } from "./context/ProjectsContext";
import { DataOptionsProvider } from "./context/DataOptionsContext";
import LayoutWrapper from "./components/LayoutWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="root">
      <body>
      <ProjectsProvider>
        <DataOptionsProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </DataOptionsProvider>
      </ProjectsProvider>
      </body>
    </html>
  );
}
