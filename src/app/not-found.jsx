import Header from "@/features/layout/Header";
import Glitch from "../features/not-found/components/Glitch";
import { getNotFoundData } from "../features/not-found/services/not-found.service";
import { htmlContent } from "@/libs/utils/htmlContent";
import Link from "next/link";
import Footer from "../features/layout/Footer";

export default async function NotFound() {
  const data = await getNotFoundData();

  const titulo = data?.titulo;
  const texto = data?.texto;
  const link = data?.link;
  const linkCustomizado = data?.link_customizado;
  const isHome = link === "home";
  const href = isHome ? "/" : `${linkCustomizado}`;
  const buttonLabel = isHome ? "Acessar Home" : "Acessar";

  return (
    <>
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
                dangerouslySetInnerHTML={{ __html: htmlContent(texto) }}
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
    </>
  );
}
