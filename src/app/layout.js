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
      <body className={`antialiased bg-gray-900 text-white-100 font-[Roboto]`}>
        {children}
      </body>
    </html>
  );
}
