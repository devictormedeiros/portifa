import CardProjeto from "./CardProjeto";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

const Projetos = () => {
    let projetos = [
        {
            id: 1,
            nome: "Lorem ipsum dolor sit amet",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum.  ",
            img: "/images/projeto.png",
            link: "https://github.com",
            technologies: ["html", "css", "js", "react"]
        },
        {
            id: 2,
            nome: "Lorem ipsum dolor sit amet",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum.  ",
            img: "/images/projeto.png",
            link: "https://github.com",
            technologies: ["html", "css", "js", "react"]
        },
        {
            id: 3,
            nome: "Lorem ipsum dolor sit amet",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non diam sit amet enim euismod blandit luctus lacinia lorem. Vestibulum ultricies est turpis, ut pulvinar lorem tempor a. Fusce eros nisl, molestie id sapien in, aliquam consequat enim. Nam id ipsum ultricies ex vulputate condimentum.  ",
            img: "/images/projeto.png",
            link: "https://github.com",
            technologies: ["html", "css", "js", "react"]
        },
    ]

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

    return (
        <section className="sec-projetos g-col-12">
            <div className="container">
                <div className="grid grid-cols-12 gap-0 md:gap-y-[7.25rem]">
                    {projetos.map((projeto, i) => (
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