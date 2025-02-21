import CardProjeto from "./CardProjeto";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";

const Projetos = ({data}) => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        let pinneds = gsap.utils.toArray(".pinned");

        pinneds.forEach((pinned, index) => {
            if(!pinneds[index + 1]) {
                return;
            }

            gsap.to(pinned, {    
                scale: "0.85",
                scrollTrigger: {
                    trigger: pinned,
                    start: `top 0`,
                    scrub: true,
                    toggleActions: "play none none reverse",
                }
            });
        });
    }, []);

    useEffect(() => {
        ScrollTrigger.refresh();
    }
    , [data]);

    return (
        <section className="sec-projetos g-col-12">
            <div className="container">
                <div className="grid grid-cols-12 gap-0 md:gap-y-[7.25rem]">
                    {data.map((projeto, i) => (
                        <article className="sticky top-[5rem] lg:top-[7rem] col-span-12 h-[80vh] flex items-center justify-center pinned" key={projeto.id}>
                            <CardProjeto projeto={projeto} />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projetos;