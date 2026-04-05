"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useWindowDimensions from "@/hooks/useWindowDimensions";

gsap.registerPlugin(ScrollTrigger);

const SCRUB = true;
const SECTION_CLASS = "sec-call bg-[#000] relative h-[620vh] lg:h-[880vh]";
const MEDIA_CLASS =
  "sticky top-0 object-cover object-center w-full aspect-square h-[100vh] [transform:translateZ(0)]";

/** Mobile: usa 1 a cada N frames da lista original (menos peso). */
const MOBILE_FRAME_STEP = 2;
const IMAGE_LOAD_CONCURRENCY = 5;

function getCanvasMaxDpr(viewportWidth) {
  if (viewportWidth < 768) return 1;
  return 1.25;
}

function resolveMediaUrl(field) {
  if (field == null) return null;
  if (typeof field === "string" && field.trim()) return field.trim();
  if (typeof field === "object" && typeof field.url === "string" && field.url) {
    return field.url;
  }
  return null;
}

/** URLs opcionais: video_scroll_* (preferido) ou video_desktop / video_mobile no bloco scroll. */
function resolveScrollVideoUrl(d, w) {
  if (!d || w == null) return null;
  const desk =
    resolveMediaUrl(d.video_scroll_desktop) ?? resolveMediaUrl(d.video_desktop);
  const mob =
    resolveMediaUrl(d.video_scroll_mobile) ?? resolveMediaUrl(d.video_mobile);
  if (w < 768) return mob || desk;
  return desk || mob;
}

function getRawFrames(d, w) {
  if (!d || w == null) return null;
  if (w < 768 && d.frames_mob?.[0]?.frames) {
    return d.frames_mob[0].frames;
  }
  if (w >= 768 && d.frames_desk?.[0]?.frames) {
    return d.frames_desk[0].frames;
  }
  return null;
}

function pickFramesForViewport(rawFrames, w) {
  if (!rawFrames?.length) return [];
  if (w >= 768 || MOBILE_FRAME_STEP <= 1) return rawFrames;
  return rawFrames.filter((_, i) => i % MOBILE_FRAME_STEP === 0);
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Falha ao carregar frame: ${src}`));
    img.src = src;
  });
}

async function loadImagesConcurrent(urls, concurrency, cancelledRef) {
  const results = new Array(urls.length);
  let next = 0;

  async function worker() {
    while (!cancelledRef.current) {
      const i = next++;
      if (i >= urls.length) break;
      results[i] = await loadImage(urls[i]);
    }
  }

  const n = Math.min(concurrency, urls.length);
  await Promise.all(Array.from({ length: n }, () => worker()));
  if (cancelledRef.current) return null;
  return results;
}

function drawCover(ctx, img, cw, ch) {
  if (!img?.naturalWidth) return;
  const imgRatio = img.naturalWidth / img.naturalHeight;
  const canvasRatio = cw / ch;
  let drawW;
  let drawH;
  let ox;
  let oy;
  if (imgRatio > canvasRatio) {
    drawH = ch;
    drawW = ch * imgRatio;
  } else {
    drawW = cw;
    drawH = cw / imgRatio;
  }
  ox = (cw - drawW) / 2;
  oy = (ch - drawH) / 2;
  ctx.drawImage(img, ox, oy, drawW, drawH);
}

function CallVideoScroll({ videoUrl }) {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const video = videoRef.current;
    if (!sectionEl || !video || !videoUrl) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      video.currentTime = 0;
      return undefined;
    }

    let revertContext = null;
    let cancelled = false;

    const bindScrub = () => {
      if (cancelled) return;
      const duration = video.duration;
      if (!duration || !Number.isFinite(duration)) return;

      const playhead = { time: 0 };
      const gsapCtx = gsap.context(() => {
        gsap.fromTo(
          playhead,
          { time: 0 },
          {
            time: duration,
            ease: "none",
            scrollTrigger: {
              trigger: sectionEl,
              start: "top top",
              end: "bottom bottom",
              scrub: SCRUB,
            },
            onUpdate: () => {
              video.currentTime = playhead.time;
            },
          },
        );
      }, sectionEl);

      revertContext = () => gsapCtx.revert();
      ScrollTrigger.refresh();
    };

    const onMeta = () => {
      if (!cancelled) bindScrub();
    };

    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      onMeta();
    } else {
      video.addEventListener("loadedmetadata", onMeta, { once: true });
    }

    return () => {
      cancelled = true;
      video.removeEventListener("loadedmetadata", onMeta);
      revertContext?.();
    };
  }, [videoUrl]);

  return (
    <section ref={sectionRef} className={SECTION_CLASS}>
      <div className="sec-call-image image absolute top-0 w-full lg:right-0 h-full">
        <video
          key={videoUrl}
          ref={videoRef}
          className={MEDIA_CLASS}
          src={videoUrl}
          muted
          playsInline
          preload="auto"
          aria-hidden
        />
      </div>
    </section>
  );
}

function CallCanvasFrames({ frames }) {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);
  const playheadRef = useRef({ frame: 0 });
  const lastPaintedIdxRef = useRef(null);
  const rafPaintRef = useRef(null);

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (!frames?.length || width == null || height == null) return;

    const canvas = canvasRef.current;
    const sectionEl = sectionRef.current;
    if (!canvas || !sectionEl) return;

    const context = canvas.getContext("2d", { alpha: false });
    const dpr = Math.min(
      typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1,
      getCanvasMaxDpr(width),
    );
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);

    let cancelledRef = { current: false };
    let revertContext = null;
    lastPaintedIdxRef.current = null;

    const cancelRaf = () => {
      if (rafPaintRef.current != null) {
        cancelAnimationFrame(rafPaintRef.current);
        rafPaintRef.current = null;
      }
    };

    const paint = (force = false) => {
      const imgs = imagesRef.current;
      if (!imgs.length) return;

      const maxIdx = imgs.length - 1;
      const raw = Number(playheadRef.current.frame);
      const target = Math.max(0, Math.min(maxIdx, raw));
      const idx = Math.round(target);

      if (!force && idx === lastPaintedIdxRef.current) {
        return;
      }
      lastPaintedIdxRef.current = idx;

      const cw = canvas.width;
      const ch = canvas.height;
      const img = imgs[idx];
      if (!img?.naturalWidth) return;

      context.fillStyle = "#000000";
      context.fillRect(0, 0, cw, ch);
      drawCover(context, img, cw, ch);
    };

    const schedulePaint = () => {
      if (rafPaintRef.current != null) return;
      rafPaintRef.current = requestAnimationFrame(() => {
        rafPaintRef.current = null;
        paint(false);
      });
    };

    (async () => {
      try {
        const urls = frames.map((f) => f.image).filter(Boolean);
        if (!urls.length) return;

        const loaded = await loadImagesConcurrent(
          urls,
          IMAGE_LOAD_CONCURRENCY,
          cancelledRef,
        );
        if (cancelledRef.current || !loaded) return;

        imagesRef.current = loaded;
        playheadRef.current.frame = 0;
        lastPaintedIdxRef.current = null;
        paint(true);

        const lastFrame = Math.max(0, loaded.length - 1);

        const gsapCtx = gsap.context(() => {
          gsap.fromTo(
            playheadRef.current,
            { frame: 0 },
            {
              frame: lastFrame,
              ease: "none",
              scrollTrigger: {
                trigger: sectionEl,
                start: "top top",
                end: "bottom bottom",
                scrub: SCRUB,
              },
              onUpdate: () => schedulePaint(),
            },
          );
        }, sectionEl);

        revertContext = () => gsapCtx.revert();
      } catch (e) {
        console.error(e);
      }
    })();

    return () => {
      cancelledRef.current = true;
      cancelRaf();
      revertContext?.();
      imagesRef.current = [];
    };
  }, [frames, height, width]);

  return (
    <section ref={sectionRef} className={SECTION_CLASS} id="projetos">
      <div className="sec-call-image image absolute top-0 w-full lg:right-0 h-full">
        <canvas ref={canvasRef} className={MEDIA_CLASS} />
      </div>
    </section>
  );
}

const Call = ({ data }) => {
  const { width } = useWindowDimensions();

  const videoUrl = width != null ? resolveScrollVideoUrl(data, width) : null;
  const rawFrames = width != null ? getRawFrames(data, width) : null;
  const frames = pickFramesForViewport(rawFrames, width);
  const frameCount = frames?.length ?? 0;

  if (videoUrl) {
    return <CallVideoScroll videoUrl={videoUrl} />;
  }

  if (frameCount > 0) {
    return <CallCanvasFrames frames={frames} />;
  }

  return null;
};

export default Call;
