import Footer from "@/features/layout/Footer";
import Header from "@/features/layout/Header";

export default async function RootLayoutProjects({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
