import Header from "@/features/layout/Header";
import Glitch from "../features/not-found/components/Glitch";
import { getGeneralData } from "@/services/general.service";
import { getNotFoundData } from "../features/not-found/services/not-found.service";
import LayoutWrapper from "@/app/components/LayoutWrapper";
import Link from "next/link";
import Footer from "../features/layout/Footer";

export default async function NotFound() {
  const { data: pagina404 } = await getNotFoundData();

  const titulo = pagina404?.titulo;
  const texto = pagina404?.texto;
  const link = pagina404?.link;
  const linkCustomizado = pagina404?.link_customizado;
  const isHome = link === "home";
  const href = isHome ? "/" : `${linkCustomizado}`;
  const buttonLabel = isHome ? "Acessar Home" : "Acessar";

  return (
    <LayoutWrapper>
      <Header />
      <main className="main-404">
        <div className="flex flex-col items-center justify-center relative overflow-hidden pt-[11.25rem] px-[1.5rem] pb-[11.25rem] md:pb-[15.625rem]">
          <Glitch />
          <div className="text-404 text-center md:px-4 z-10 md:mt-[-2.75rem] mt-[-1rem]">
            <h2 className="content-title-h2 text-white-100 mb-[1rem] md:mb-[0.5rem]">
              {titulo}
            </h2>
            <div className="flex md:gap-6 gap-5 items-center flex-wrap md:justify-start justify-center">
              <div
                className="content-text text-white-70 mb-0 text-center md:text-left md:flex-1"
                dangerouslySetInnerHTML={{ __html: texto }}
              />
              <Link
                href={href}
                title="Acessa home"
                className="inline-block px-6 py-3 text-white-70 rounded border-white-70 border button-md uppercase md:w-auto w-full"
              >
                {buttonLabel}
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </LayoutWrapper>
  );
}
