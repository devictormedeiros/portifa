function collectInternalHosts(siteOrigin) {
  const hosts = new Set();

  if (siteOrigin) {
    try {
      hosts.add(new URL(siteOrigin).hostname);
    } catch {
      /* ignore */
    }
  }

  for (const env of [
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
    process.env.NEXT_PUBLIC_SITE_URL,
  ]) {
    if (!env) continue;
    try {
      hosts.add(new URL(env).hostname);
    } catch {
      /* ignore */
    }
  }

  return hosts;
}

/**
 * Monta URL absoluta do front para itens de menu vindos do WordPress ou relativos,
 * para âncoras funcionarem a partir de páginas internas (navegação completa + hash).
 *
 * @param {string | undefined} raw
 * @param {string} siteOrigin - sem barra final
 */
export function resolveMenuHref(raw, siteOrigin) {
  if (!raw || typeof raw !== "string") return raw ?? "/";
  const trimmed = raw.trim();
  if (!siteOrigin) return trimmed;

  if (/^(mailto:|tel:|sms:)/i.test(trimmed)) return trimmed;

  const base = siteOrigin.replace(/\/$/, "");
  const internalHosts = collectInternalHosts(siteOrigin);

  try {
    if (/^https?:\/\//i.test(trimmed)) {
      const u = new URL(trimmed);
      if (internalHosts.has(u.hostname)) {
        return `${base}${u.pathname}${u.search}${u.hash}`;
      }
      return trimmed;
    }

    if (trimmed.startsWith("#")) {
      return `${base}/${trimmed}`;
    }

    if (trimmed.startsWith("/")) {
      return `${base}${trimmed}`;
    }

    return `${base}/${trimmed}`;
  } catch {
    return trimmed;
  }
}
