import "./globals.scss";

// Metadata para o layout
export const metadata = {
  title: "Portifa - Victor Medeiros",
  description: "Site para portifólio",
};

// Componente RootLayout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased text-white-100`}>
        {children}
      </body>
    </html>
  );
}
