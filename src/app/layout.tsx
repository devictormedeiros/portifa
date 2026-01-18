import React from "react";
import "./globals.scss";
import "animate.css/animate.compat.css";
import "animate.css/animate.compat.css";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
