const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://seu-site.com";

export const DEFAULT_METADATA = {
  title: { default: "Portfólio", template: "%s | Portfólio" },
  description: "Portfólio profissional com projetos e trabalhos realizados",
  keywords: ["portfólio", "desenvolvimento", "projetos", "trabalhos"],
  authors: [{ name: "Seu Nome" }],
  creator: "Seu Nome",
  publisher: "Seu Nome",
  applicationName: "Portfólio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Portfólio",
    description: "Portfólio profissional com projetos e trabalhos realizados",
    url: SITE_URL,
    siteName: "Portfólio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Portfólio" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio",
    description: "Portfólio profissional com projetos e trabalhos realizados",
    images: ["/twitter-image.jpg"],
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
  verification: { google: "seu-google-site-verification" },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
};
