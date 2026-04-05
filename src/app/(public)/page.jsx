import Intro from "@/features/home/sections/Intro";
import Header from "@/features/layout/Header";
import ScrollLockWrapper from "@/features/home/wrappers/ScrollLockWrapper";
import About from "@/features/home/sections/About";
import Call from "@/features/home/sections/Call";
import Projects from "@/features/home/sections/Projects";
import Skills from "@/features/home/sections/Skills/Skills";
import Tecnologias from "@/features/home/sections/Tecnologias";
import Recommendations from "@/features/home/sections/Recommendations";
import Footer from "../../features/layout/Footer";

import { getHomeData } from "@/features/home/services/home.service";

export async function generateMetadata() {
  const data = await getHomeData();

  return {
    title: data?.seo?.title || "Home | Seu Site",
    description:
      data?.seo?.description ||
      "Conheça nossos projetos, tecnologias e soluções digitais.",

    openGraph: {
      title: data?.seo?.title || "Home | Seu Site",
      description:
        data?.seo?.description ||
        "Conheça nossos projetos, tecnologias e soluções digitais.",
      url: "https://seusite.com",
      siteName: "Seu Site",
      images: [
        {
          url: data?.seo?.image || "/og-default.jpg",
          width: 1200,
          height: 630,
          alt: data?.seo?.title || "Seu Site",
        },
      ],
      locale: "pt_BR",
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Home() {
  const data = await getHomeData();

  return (
    <>
      {data?.introducao && <Intro data={data.introducao} />}
      <Header />
      <ScrollLockWrapper>
        <main className="main-home flex flex-wrap relative z-[1]">
          {data?.sobre && <About data={data?.sobre || null} />}
          <section className="sec-bg-home w-full grid grid-cols-1 gap-y-[5rem] pb-[5rem] md:pb-[7.72rem] md:gap-y-[8.75rem]">
            {data?.scroll && <Call data={data?.scroll || null} />}
            {data?.projetos && <Projects projects={data?.projetos || null} />}
            <section
              className="grid grid-cols-1 gap-y-[5rem] md:gap-y-[8.75rem] pt-[5rem] md:pt-[7.5rem]"
              id="atuacao"
            >
              {data?.tabs && <Skills data={data?.tabs} />}
              {data?.tecnologias_atuacoes && (
                <Tecnologias data={data?.tecnologias_atuacoes || null} />
              )}
              {data?.recomendacoes && (
                <Recommendations data={data.recomendacoes} />
              )}
            </section>
          </section>
          <Footer />
        </main>
      </ScrollLockWrapper>
    </>
  );
}
