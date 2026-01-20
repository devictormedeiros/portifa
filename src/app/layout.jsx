import "./globals.scss";
import "animate.css/animate.compat.css";
import "animate.css/animate.compat.css";
import LayoutWrapper from "./components/LayoutWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
