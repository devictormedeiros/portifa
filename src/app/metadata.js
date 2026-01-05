const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: {
    default: "Portfólio",
    template: "%s | Portfólio",
  },
  description:
    "Acompanhe um acervo com projetos de design e desenvolvimento focados em UI, UX e produto digital.",
  keywords: [
    "Product Designer",
    "UX",
    "UI",
    "Branding",
    "Identidade visual",
    "Portfólio de design",
    "Experiência do Usuário",
    "Projetos de design",
    "Design digital",
    "Design Thinking",
    "Interface",
    "UI&UX",
  ],
  authors: [{ name: "Equipe" }],
  creator: "Equipe",
  publisher: "Equipe",
  applicationName: "Portfólio Pessoal",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  //metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Portfólio",
    description:
      "Acompanhe um acervo com projetos de design e desenvolvimento focados em UI, UX e produto digital.",
    url: SITE_URL,
    siteName: "Portfólio",
    images: [
      {
        url: `${SITE_URL}/meta/open-graph.png`,
        secureUrl: `${SITE_URL}/meta/open-graph.png`,
        width: 1200,
        height: 630,
        alt: "Portfólio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio",
    description:
      "Acompanhe um acervo com projetos de design e desenvolvimento focados em UI, UX e produto digital.",
    images: [`${SITE_URL}/meta/twitter-card.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
  manifest: `${SITE_URL}/meta/site.webmanifest`,
  icons: {
    icon: [
      {
        url: `${SITE_URL}/meta/favicon-32x32.png`,
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: `${SITE_URL}/meta/favicon-16x16.png`,
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      {
        url: `${SITE_URL}/meta/apple-touch-icon.png`,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0d0d0d" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
  ],
};
