import "./globals.scss";
import "animate.css/animate.compat.css";
import { ProjectsProvider } from "./context/ProjectsContext";
import { DataOptionsProvider } from "./context/DataOptionsContext";
import LayoutWrapper from "./components/LayoutWrapper";
import { Metadata } from "next";

export const metadata = {
  title: {
    default: "Marcello Vanzillotta — Portfólio",
    template: "%s | Marcello Vanzillotta",
  },
  description:
    "Designer de produtos digitais com foco em UI, UX, user research e design de serviços. Atuo de forma estratégica articulando propósito ao negócio, mapeando jornadas e entregando valor por meio de soluções criativas e relevantes.",
  keywords: [
    "Marcello Vanzillotta",
    "portfólio",
    "design de produto",
    "UI",
    "UX",
    "user research",
    "design de serviços",
    "experiência do usuário",
    "modelagem de negócios",
    "metodologias ágeis",
    "estratégia de design",
  ],
  authors: [{ name: "Marcello Vanzillotta" }],
  creator: "Marcello Vanzillotta",
  publisher: "Marcello Vanzillotta",
  applicationName: "Portfólio — Marcello Vanzillotta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.vanzillotta.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Marcello Vanzillotta — Portfólio",
    description:
      "Designer de produtos digitais (UI/UX) com abordagem estratégica: interpretação de contextos, mapeamento de jornadas e entregas de valor para startups e grandes empresas.",
    url: "https://www.vanzillotta.com",
    siteName: "Marcello Vanzillotta",
    images: [
      {
        url: "/og/portfolio-cover.jpg", // substitua pelo caminho real do seu OG (1200x630)
        width: 1200,
        height: 630,
        alt: "Portfólio de Marcello Vanzillotta",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcello Vanzillotta — Portfólio",
    description:
      "Designer de produtos digitais com foco em UI/UX, pesquisa e design de serviços.",
    images: ["/og/portfolio-cover.jpg"], // use o mesmo OG aqui
    // creator: "@seu_handle", // opcional: preencha se houver
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "SEU_GOOGLE_SITE_VERIFICATION", // substitua pelo código do Search Console do domínio vanzillotta.com
  },
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
