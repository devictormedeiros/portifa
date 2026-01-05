import Header from "@/features/layout/Header";
import { getHeaderData } from "@/features/layout/services/header.service";

export default async function RootLayoutProjects({ children }) {
  const {menu, logo} = await getHeaderData();

  return (
    <>
      <Header logo={logo || null} menu={menu || null}/>
      {children}
    </>
  );
}
