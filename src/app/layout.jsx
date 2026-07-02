import "./globals.scss";
import "animate.css/animate.compat.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Roboto_Flex } from "next/font/google";
import LoadingPage from "@/components/LoadingPage";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${robotoFlex.variable}`}>
      <head>
        <head>
          {/* Preconecta ao servidor do WordPress para ganhar tempo no DNS/TLS */}
          <link rel="preconnect" href={process.env.NEXT_PUBLIC_SITE_URL} />
        </head>
      </head>
      <body data-page-load="false">
        <LoadingPage />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
