import ClientProjetoPage from "./clientPage";

// Se já usa isso no projeto, pode reutilizar seu helper:
const WP = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

// Helper: converte flags do Yoast para o formato do Next
function mapRobots(robots) {
  // Yoast traz strings "index"/"noindex" e "follow"/"nofollow"
  const index = robots?.index !== "noindex";
  const follow = robots?.follow !== "nofollow";
  const googleBot = {
    "max-snippet": robots?.["max-snippet"],
    "max-image-preview": robots?.["max-image-preview"],
    "max-video-preview": robots?.["max-video-preview"],
  };
  // Remove undefined
  Object.keys(googleBot).forEach((k) => googleBot[k] === undefined && delete googleBot[k]);
  return { index, follow, googleBot };
}

const FRONT_BASE = "https://localhost:3000"; // seu domínio Next

function replaceBaseUrl(url) {
  if (!url) return url;
  try {
    const u = new URL(url);
    return url.replace(`${u.origin}`, FRONT_BASE);
  } catch {
    return url;
  }
}
// Helper: mapeia o yoast_head_json para o objeto de metadata do Next
function mapYoastToNextMetadata(yoast) {
  if (!yoast) return {};
  

  const title = yoast.title || yoast.og_title;
  const description = yoast.og_description;
  const canonical = replaceBaseUrl(yoast.og_url);

  const ogImages = Array.isArray(yoast.og_image)
    ? yoast.og_image.map((img) => ({
        url: img.url,
        width: img.width,
        height: img.height,
        type: img.type,
      }))
    : undefined;

  const openGraph = {
    type: yoast.og_type || "article",
    locale: yoast.og_locale || "pt_BR",
    siteName: yoast.og_site_name,
    title: yoast.og_title || title,
    description,
    url: canonical,
    images: ogImages,
  };

  const twitter = {
    card: yoast.twitter_card || "summary_large_image",
    title: title,
    description,
    images: ogImages?.[0]?.url ? [ogImages[0].url] : undefined,
  };

  const robots = mapRobots(yoast.robots || {});

  // Dica: se tiver `metadataBase`, configure no layout raiz.
  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    robots,
    openGraph,
    twitter,
  };
}

export async function generateMetadata({ params }) {
  try {
    // Busca só o necessário para SEO por slug
    const res = await fetch(
      `${WP}/wp/v2/projeto?slug=${encodeURIComponent(params?.slug)}&_fields=yoast_head_json`,
      { next: { revalidate: 1800 } }
    );

    if (!res.ok) return {};

    const data = await res.json();
    const yoast = data?.[0]?.yoast_head_json;

    return mapYoastToNextMetadata(yoast);
  } catch {
    return {};
  }
}

// A página em si continua sendo o seu Client Component:
export default function Page() {
  return <ClientProjetoPage />;
}
