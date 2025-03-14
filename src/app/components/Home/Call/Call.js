import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Call = ({data}) => {
    const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let src = video.currentSrc || video.src;

    gsap.registerPlugin(ScrollTrigger);

    /* Ativar o vídeo no iOS */
    const once = (el, event, fn, opts) => {
      const onceFn = function (e) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, arguments);
      };
      el.addEventListener(event, onceFn, opts);
      return onceFn;
    };

    once(document.documentElement, "touchstart", () => {
      video.play();
      video.pause();
    });

    /* Scroll Control com GSAP */
    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    once(video, "loadedmetadata", () => {
      tl.fromTo(
        video,
        { currentTime: 0 },
        { currentTime: video.duration || 1 }
      );
    });

    /* Melhorar carregamento do vídeo */
    const preloadVideo = () => {
      if (window["fetch"]) {
        fetch(src)
          .then((response) => response.blob())
          .then((blob) => {
            const blobURL = URL.createObjectURL(blob);
            const currentTime = video.currentTime;

            once(document.documentElement, "touchstart", () => {
              video.play();
              video.pause();
            });

            video.setAttribute("src", blobURL);
            video.currentTime = currentTime + 0.01;
          });
      }
    };

    const preloadTimeout = setTimeout(preloadVideo, 1000);

    return () => {
      clearTimeout(preloadTimeout);
      if (tl) tl.kill();
    };
  }, []);

    return (
        <section className="sec-call h-[300vh]">  
            <div className="w-full flex justify-center items-center overflow-x-hidden sticky top-0">

            </div>
        </section>
    )
}

export default Call;