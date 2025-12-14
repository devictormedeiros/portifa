"use client";

import Link from "next/link";

export default function SmartLink({
  href,
  onClick,
  children,
  ...props
}) {
  return (
    <Link
      href={href}
      {...props}
      onClick={(e) => {
        // respeita onClick de fora
        onClick?.(e);
        if (e.defaultPrevented) return;

        // respeita abrir em nova aba/janela
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        if (props.target === "_blank") return;

        // só dispara para rotas internas
        const url = typeof href === "string" ? href : href?.pathname;
        if (!url || !String(url).startsWith("/")) return;

        // ✅ seu gatilho
        document.body.setAttribute("data-page-load", "true");
        setTimeout(() => {
          document.body.setAttribute("data-page-load", "false");
        }, 1000);
      }}
    >
      {children}
    </Link>
  );
}
