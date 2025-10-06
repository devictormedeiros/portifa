import "./globals.scss";
import "animate.css/animate.compat.css";
import { ProjectsProvider } from "./context/ProjectsContext";
import { DataOptionsProvider } from "./context/DataOptionsContext";
import LayoutWrapper from "./components/LayoutWrapper";
export { metadata } from "./metadata";
const MEDIA_ORIGIN = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || process.env.NEXT_PUBLIC_SITE_URL;

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="root">
      <head>
        <link rel="preconnect" href={MEDIA_ORIGIN} crossOrigin="anonymous" />
      </head>
      <ProjectsProvider>
        <DataOptionsProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </DataOptionsProvider>
      </ProjectsProvider>
    </html>
  );
}
