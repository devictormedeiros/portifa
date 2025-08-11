import "./globals.scss";
import "animate.css/animate.compat.css";
import { ProjectsProvider } from "./context/ProjectsContext";
import { DataOptionsProvider } from "./context/DataOptionsContext";
import LayoutWrapper from "./components/LayoutWrapper";
import { Metadata } from "next";

export const metadata = {
  title: {
    default: "Portfólio", // título padrão da página
    template: "%s | Portfólio", // formato para títulos dinâmicos
  },
  description: "Portfólio profissional com projetos e trabalhos realizados", // descrição para SEO
  keywords: ["portfólio", "desenvolvimento", "projetos", "trabalhos"], // palavras-chave para SEO
  authors: [{ name: "Seu Nome" }], // autor do site
  creator: "Seu Nome", // criador do conteúdo
  publisher: "Seu Nome", // editor/publicador do site
  formatDetection: {
    email: false, // evita detecção automática de e-mails
    address: false, // evita detecção automática de endereços
    telephone: false, // evita detecção automática de telefones
  },
  metadataBase: new URL("https://seu-site.com"), // URL base para metadados
  alternates: {
    canonical: "/", // URL canônica (principal) da página
  },
  icons: {
    icon: '/favicon.ico', // caminho na pasta public
    shortcut: '/favicon.ico', // ícone de atalho
    apple: '/apple-touch-icon.png', // ícone para iOS
  },
  openGraph: {
    title: "Portfólio", // título para compartilhamento (Open Graph)
    description: "Portfólio profissional com projetos e trabalhos realizados", // descrição para OG
    url: "https://seu-site.com", // URL da página para OG
    siteName: "Portfólio", // nome do site para OG
    images: [
      {
        url: "https://devictormedeiros.com/portifa-wp/wp-content/uploads/2025/03/archive-min.png", // thumbnail do site
        width: 1200, // largura da imagem OG
        height: 630, // altura da imagem OG
        alt: "Portfólio", // texto alternativo da imagem OG
      },
    ],
    locale: "pt_BR", // idioma/região do site
    type: "website", // tipo de conteúdo (site, artigo, etc.)
  },
  twitter: {
    card: "summary_large_image", // tipo de card do Twitter
    title: "Portfólio", // título para Twitter
    description: "Portfólio profissional com projetos e trabalhos realizados", // descrição para Twitter
    images: ["/twitter-image.jpg"], // thumbnail para Twitter
  },
  robots: {
    index: true, // permitir indexação
    follow: true, // permitir seguir links
    googleBot: {
      index: true, // permitir indexação pelo Googlebot
      follow: true, // permitir seguir links pelo Googlebot
      "max-video-preview": -1, // sem limite para prévia de vídeos
      "max-image-preview": "large", // usar prévia grande de imagens
      "max-snippet": -1, // sem limite para snippets de texto
    },
  },
  verification: {
    google: "seu-google-site-verification", // código de verificação do Google Search Console
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
