import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Call = ({data}) => {
    const textRef = useRef(null);

    useEffect(() => {
        if ( !textRef.current ) return;
        
        gsap.registerPlugin(ScrollTrigger);

        const letters = textRef.current.querySelectorAll("span");

        gsap.fromTo(
          letters,
          {
            scale: 2,
            x: () => `${(gsap.utils.random(-800, 700))/16}rem`, // Aumenta a dispersão horizontal
            y: () => `${(gsap.utils.random(-800, 500))/16}rem`,
            rotation: () => gsap.utils.random(-400, 400),
          },
          {
            scale: 1,
            x: 0,
            y: 0,
            rotation: 0,
            duration: 1.5,
            stagger: 0.05,
            ease: "back.out(2)",    
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 80%", // Quando 80% do elemento entrar na tela
                end: "bottom 100%", // Opcional: define um ponto final
                scrub: true, // Se quiser que a animação acompanhe o scroll, use `true`
              },
          }
        );

        return () => {
            gsap.killTweensOf(letters)
        }
    }, []);

    useEffect(() => {
        ScrollTrigger.refresh();
    }
    , [data]);

    return (
        <section ref={textRef} className="sec-call md:h-[300vh]">  
            <div className="w-full flex justify-center items-center h-[100vh] sticky top-0 overflow-x-hidden">
                <p className="motion-2 text-white text-center uppercase max-w-[77.5rem] w-full">
                    {("PROJETOS")?.split("").map((char, index) => (
                        <span key={index} className="inline-block">
                        {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </p>
            </div>
        </section>
    )
}

export default Call;