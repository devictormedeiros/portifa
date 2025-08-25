import "./globals.scss";
import "animate.css/animate.compat.css";
import { ProjectsProvider } from "./context/ProjectsContext";
import { DataOptionsProvider } from "./context/DataOptionsContext";
import LayoutWrapper from "./components/LayoutWrapper";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata = {
  title: { 
    default: "Marcello Vanzillotta | Product Designer & UI/UX", 
    template: "%s | Marcello Vanzillotta" 
  },
  description:
    "Conheça minha filosofia de trabalho e acompanhe um acervo com meus últimos projetos como Product Designer, UI e UX.",
  keywords: [
    "Product Designer",
    "UX",
    "UI",
    "Branding",
    "Identidade visual",
    "Portfólio de design",
    "Experiência do Usuário",
    "Projetos de design",
    "Design digital",
    "Design Thinking",
    "Interface",
    "UI&UX"
  ],
  authors: [{ name: "Marcello Vanzillotta" }],
  creator: "Marcello Vanzillotta",
  publisher: "Marcello Vanzillotta",
  applicationName: "Portfólio de Marcello Vanzillotta",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Marcello Vanzillotta | Product Designer & UI/UX",
    description:
      "Conheça minha filosofia de trabalho e acompanhe um acervo com meus últimos projetos como Product Designer, UI e UX.",
    url: "https://vanzillotta.com",
    siteName: "Marcello Vanzillotta | Product Designer & UI/UX",
    images: [
      { url: `${SITE_URL}/meta/open-graph.png`,  width: 1200, height: 630, alt: "Marcello Vanzillotta | Product Designer & UI/UX" }
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcello Vanzillotta | Product Designer & UI/UX",
    description:
      "Conheça minha filosofia de trabalho e acompanhe um acervo com meus últimos projetos como Product Designer, UI e UX.",
    images: [`${SITE_URL}/meta/twitter-card.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { 
      index: true, 
      follow: true, 
      "max-video-preview": -1, 
      "max-image-preview": "large", 
      "max-snippet": -1 
    },
  },
  verification: {},
  manifest: `${SITE_URL}/meta/site.webmanifest`,
  icons: {
    icon: [
      { url: `${SITE_URL}/meta/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
      { url: `${SITE_URL}/meta/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: `${SITE_URL}/meta/apple-touch-icon.png`, sizes: "180x180", type: "image/png" }],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0d0d0d" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
  ],
};



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
