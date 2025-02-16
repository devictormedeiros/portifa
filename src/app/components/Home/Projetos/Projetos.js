import CardProjeto from "./CardProjeto";
import gsap from "gsap";
import { useGsap } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    useGsap(() => {
        const pinned = gsap.utils.toArray('.pinned');

        pinned.forEach((section, i, sections) => {
            let endScalePoint = 20;

            gsap.fromTo(section, {scale: 1}, {
                scale: 0.5,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: endScalePoint,
                    scrub: 1
                }
            })
        });
    }, [ScrollTrigger]);

    return (
        <section className="sec-projetos g-col-12">
            <div className="container">
                <div className="grid grid-cols-12 gap-0 md:gap-y-[7.25rem]">
                    {projetos.map((projeto, i) => (
                        <article className={`sticky top-[5rem] lg:top-[7rem] col-span-12 h-[80vh] flex items-center justify-center ${!projetos[i + 1] ? 'scroll' : 'pinned'}`} key={projeto.id}>
                            <CardProjeto projeto={projeto} />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projetos;