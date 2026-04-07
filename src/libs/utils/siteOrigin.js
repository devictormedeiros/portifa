import { headers } from "next/headers";

/**
 * Origem pública do site Next (ex.: https://meusite.com).
 * Prioriza NEXT_PUBLIC_APP_URL; em dev/proxy usa Host / x-forwarded-* da requisição.
 */
export function getSiteOrigin() {
  const fromEnv = process.env.NEXT_PUBLIC_APP_URL?.trim().replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const h = headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  if (!host) return "";

  const protoHeader = h.get("x-forwarded-proto") ?? "http";
  const proto = protoHeader.split(",")[0]?.trim() || "http";
  const cleanHost = host.split(",")[0]?.trim() || host;
  return `${proto}://${cleanHost}`;
}
