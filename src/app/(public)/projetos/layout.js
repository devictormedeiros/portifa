import Header from "@/app/components/Header";
import { getHeaderData } from "@/features/layout/service/header.service";

export default async function RootLayoutProjects({ children }) {
  const data = await getHeaderData();

  return (
    <>
      <Header logo={data?.logo_principal || null} />
      {children}
    </>
  );
}
