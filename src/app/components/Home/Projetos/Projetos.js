import CardProjeto from "./CardProjeto";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";

const Projetos = ({data}) => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        let pinneds = gsap.utils.toArray(".pinned");

        let mm = gsap.matchMedia(),
        breakPoint = 1024;

        mm.add({
            // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
            isDesktop: `(min-width: ${breakPoint}px)`,
            isMobile: `(max-width: ${breakPoint - 1}px)`,
            reduceMotion: "(prefers-reduced-motion: reduce)",
          },
          (context) => {
            let { isDesktop, isMobile, reduceMotion } = context.conditions;

            pinneds.forEach((pinned, index) => {
                if(!pinneds[index + 1]) {
                    return;
                }
    
                gsap.to(pinned, {    
                    scale: "0.8",
                    scrollTrigger: {
                        trigger: pinned,
                        start: isMobile ? `top 10%` : `top 0`,
                        end: isMobile ? `bottom 90%` : `bottom -30%`,
                        scrub: true,
                        toggleActions: "play none none reverse",
                    }
                });
            });
          })
    }, []);

    useEffect(() => {
        ScrollTrigger.refresh();
    }
    , [data]);

    return (
        <section className="sec-projetos h-[400vh]">
            <div className="container h-full">
                <div className="grid grid-cols-12 md:gap-y-[7.25rem] h-full">
                    {data.map((projeto, i) => (
                        <article className="sticky top-[5rem] lg:top-[7rem] col-span-12 flex items-center justify-center h-[100vh] md:h-[80vh] pinned" key={projeto.id}>
                            <CardProjeto projeto={projeto} />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projetos;