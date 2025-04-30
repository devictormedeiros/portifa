import "./globals.scss";
import "animate.css/animate.compat.css";
import { ProjectsProvider } from "./context/ProjectsContext";
import { DataOptionsProvider } from "./context/DataOptionsContext";
import Footer from "./components/Footer";
import LayoutWrapper from "./components/LayoutWrapper";
import { Metadata } from 'next';

export const metadata = {
  title: {
    default: 'Portfólio',
    template: '%s | Portfólio'
  },
  description: 'Portfólio profissional com projetos e trabalhos realizados',
  keywords: ['portfólio', 'desenvolvimento', 'projetos', 'trabalhos'],
  authors: [{ name: 'Seu Nome' }],
  creator: 'Seu Nome',
  publisher: 'Seu Nome',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://seu-site.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Portfólio',
    description: 'Portfólio profissional com projetos e trabalhos realizados',
    url: 'https://seu-site.com',
    siteName: 'Portfólio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfólio',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfólio',
    description: 'Portfólio profissional com projetos e trabalhos realizados',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'seu-google-site-verification',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <ProjectsProvider>
        <DataOptionsProvider>
          <LayoutWrapper>
            {children}
            <Footer />
          </LayoutWrapper>
        </DataOptionsProvider>
      </ProjectsProvider>
    </html>
  );
}
