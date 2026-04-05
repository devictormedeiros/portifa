import "./globals.scss";
import "animate.css/animate.compat.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Roboto_Flex } from "next/font/google";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${robotoFlex.variable}`}>
      <body data-page-load="false">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
