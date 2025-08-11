import { getBySlug } from "@/app/api/getBySlug";

// Base do site vinda da env (nunca default estático)
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.trim() || undefined;

// Monta URL absoluta de forma segura
const absolute = (path = "/", base = SITE_URL) => {
  try {
    return base ? new URL(path, base).toString() : undefined;
  } catch {
    return undefined;
  }
};

export function yoastToMetadata(y = {}, opts = {}) {
  const path = opts.path || "/";

  const filled = (v) => (typeof v === "string" ? v.trim() : v);
  const first = (...vals) => {
    for (const v of vals) {
      const f = filled(v);
      if (f) return f;
    }
  };

  const robotsFromYoast = (rb) => {
    if (!rb) return undefined;
    return [
      rb.index === "noindex" ? "noindex" : "index",
      rb.follow === "nofollow" ? "nofollow" : "follow",
      rb["max-snippet"],
      rb["max-image-preview"],
      rb["max-video-preview"],
    ]
      .filter(Boolean)
      .join(", ");
  };

  const title = first(y.title, y.og_title);
  const description = first(y.description, y.og_description, y.twitter_description);
  const robots = robotsFromYoast(y.robots);

  // Canonical sempre SITE_URL + path, se SITE_URL existir
  const canonicalUrl = SITE_URL ? absolute(path) : undefined;

  const ogImages =
    Array.isArray(y.og_image) && y.og_image.length
      ? y.og_image
          .filter((i) => filled(i?.url))
          .map((i) => ({
            url: i.url,
            width: i.width,
            height: i.height,
            type: i.type,
            alt: i.alt,
          }))
      : undefined;

  return {
    ...(title && { title }),
    ...(description && { description }),
    ...(canonicalUrl && { alternates: { canonical: canonicalUrl } }),
    ...(robots && { robots }),
    openGraph: {
      ...(title && { title }),
      ...(first(y.og_description, description) && {
        description: first(y.og_description, description),
      }),
      ...(y.og_type && { type: y.og_type }),
      ...(canonicalUrl && { url: canonicalUrl }),
      ...(y.og_site_name && { siteName: y.og_site_name }),
      ...(y.og_locale && { locale: y.og_locale }),
      ...(ogImages && { images: ogImages }),
    },
    twitter: {
      ...(y.twitter_card && { card: y.twitter_card }),
      ...(first(y.twitter_title, title) && {
        title: first(y.twitter_title, title),
      }),
      ...(first(y.twitter_description, description) && {
        description: first(y.twitter_description, description),
      }),
      ...(ogImages && { images: ogImages?.map((i) => i.url) }),
    },
  };
}

export const makePageFetcherWithYoast = (slug, fields = [], opts = {}) => {
  const uniq = Array.from(new Set([...fields, "yoast_head_json"]));
  return async () =>
    getBySlug("pages", slug, {
      ...opts,
      fields: uniq,
      revalidate: process.env.NODE_ENV === "development" ? 0 : 300,
    });
};

export const makeCptFetcherWithYoast = (type, fields = [], opts = {}) => {
  const uniq = Array.from(new Set([...fields, "yoast_head_json"]));
  return async (slug) =>
    getBySlug(type, slug, {
      embed: true,
      ...opts,
      fields: uniq,
      revalidate: process.env.NODE_ENV === "development" ? 0 : 300,
    });
};
