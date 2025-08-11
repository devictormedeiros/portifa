// app/lib/yoast-seo.js
import { cache } from "react";
import { getBySlug } from "@/app/api/getBySlug";

// helpers
export const filled = (v) => (typeof v === "string" ? v.trim() : v);
export const first = (...vals) => {
  for (const v of vals) {
    const f = filled(v);
    if (f) return f;
  }
  return undefined;
};
export const robotsFromYoast = (rb) => {
  if (!rb) return undefined;
  return [
    rb.index === "noindex" ? "noindex" : "index",
    rb.follow === "nofollow" ? "nofollow" : "follow",
    rb["max-snippet"],
    rb["max-image-preview"],
    rb["max-video-preview"],
  ].filter(Boolean).join(", ");
};
const isType = (n, t) =>
  n?.["@type"] === t || (Array.isArray(n?.["@type"]) && n["@type"].includes(t));
const extractEntitiesFromSchema = (schema) => {
  const g = schema?.["@graph"];
  if (!Array.isArray(g)) return {};
  const org = g.find((n) => isType(n, "Organization"));
  const person = g.find((n) => isType(n, "Person"));
  return { orgName: org?.name, personName: person?.name, personUrl: person?.url };
};

// Yoast -> Next Metadata (só preenche se houver valor; defaults ficam no layout)
export function yoastToMetadata(y = {}) {
  const title = first(y.title, y.og_title);
  const description = first(y.description, y.og_description, y.twitter_description);
  const canonical = first(y.canonical, y.og_url);
  const robots = robotsFromYoast(y.robots);

  const ogImages =
    Array.isArray(y.og_image) && y.og_image.length
      ? y.og_image
          .filter((img) => filled(img?.url))
          .map((img) => ({
            url: img.url,
            width: img.width,
            height: img.height,
            type: img.type,
            alt: img.alt,
          }))
      : undefined;

  const { orgName, personName, personUrl } = extractEntitiesFromSchema(y.schema);

  return {
    ...(title && { title }),
    ...(description && { description }),
    ...(canonical && { alternates: { canonical } }),
    ...(robots && { robots }),
    openGraph: {
      ...(title && { title }),
      ...(first(y.og_description, description) && { description: first(y.og_description, description) }),
      ...(y.og_type && { type: y.og_type }),
      ...(first(y.og_url, canonical) && { url: first(y.og_url, canonical) }),
      ...(y.og_site_name && { siteName: y.og_site_name }),
      ...(y.og_locale && { locale: y.og_locale }),
      ...(ogImages && { images: ogImages }),
    },
    twitter: {
      ...(y.twitter_card && { card: y.twitter_card }),
      ...(first(y.twitter_title, title) && { title: first(y.twitter_title, title) }),
      ...(first(y.twitter_description, description) && { description: first(y.twitter_description, description) }),
      ...(ogImages && { images: ogImages?.map((i) => i.url) }),
    },
    ...(personName && { authors: [{ name: personName, url: personUrl }] }),
    ...(personName && { creator: personName }),
    ...(orgName && { publisher: orgName }),
  };
}

// fetcher para PAGES com Yoast (por slug da página)
export const makePageFetcherWithYoast = (slug, fields = [], opts = {}) => {
  const uniq = Array.from(new Set([...fields, "yoast_head_json"]));
  const finalOpts = { ...opts, fields: uniq };
  return cache(async () => getBySlug("pages", slug, finalOpts));
};

// fetcher para POSTS/CPT com Yoast (por type + slug do post)
export const makeCptFetcherWithYoast = (type, fields = [], opts = {}) => {
  const uniq = Array.from(new Set([...fields, "yoast_head_json"]));
  const finalOpts = { embed: true, ...opts, fields: uniq };
  return cache(async (slug) => getBySlug(type, slug, finalOpts));
};
