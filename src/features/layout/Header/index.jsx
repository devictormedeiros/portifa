import "./style.scss";

import Nav from "./Nav";
import DrawerMenu from "./DrawerMenu";
import SwitchLang from "./SwitchLang";
import SmartLink from "@/components/SmartLink";
import MainLogo from "@/components/Icons/Logos/MainLogo";
import HeaderStickyWrapper from "../wrappers/HeaderStickyWrapper";

import { getHeaderData } from "@/features/layout/services/layout.service";

export default async function Header() {
  const { menu, languages } = await getHeaderData();

  return (
    <HeaderStickyWrapper>
      <div className="mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 items-center gap-4">
          <div className="col-span-4 md:col-span-3 flex items-center">
            <SmartLink
              className="logo"
              href="/"
              title="Voltar para a página inicial"
            >
              <MainLogo />
            </SmartLink>
          </div>
          <div className="col-span-6 hidden md:block">
            <Nav data={menu} />
          </div>
          <div className="col-span-8 md:col-span-3 flex justify-end items-center md:gap-x-[2rem] gap-x-[1.25rem]">
            <SwitchLang
              idiomas={{
                idiomas_exibidos: languages,
              }}
            />
            <div className="menu-hamburguer">
              <DrawerMenu data={menu} />
            </div>
          </div>
        </div>
      </div>
    </HeaderStickyWrapper>
  );
}
