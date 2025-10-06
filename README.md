<div align="center">

# Portifa — Portfólio Headless com Next.js e WordPress

Este repositório faz parte do projeto **Portifa**, um portfólio headless desenvolvido por **Victor Medeiros** e **Matheus Felipe**, com design exclusivo criado por **Marcello Vanzillotta** no Figma.

Cada profissional possui sua própria versão do site, utilizando a mesma base de layout, estrutura e animações.

</div>

---

## ✨ Visão Geral

Este repositório contém um site portfólio desenvolvido com Next.js. O conteúdo — projetos, tecnologias e opções globais — é gerenciado no WordPress e consumido via REST API (incluindo ACF e Polylang para multi-idiomas).

- **Stack principal**: Next.js 14, React 18, SCSS/Tailwind, GSAP/Framer Motion
- **CMS headless**: WordPress + ACF + Polylang
- **Objetivo**: Apresentar meus projetos com performance, SEO e uma experiência visual fluida

## 🧩 Principais Recursos

- **Integração Headless com WordPress**: consumo direto do REST API
- **Conteúdo Multilíngue** (Polylang): `pt`, `en`, `es`, `it` (ícones em `public/images/flags`)
- **Projetos e Tecnologias**: endpoints dedicados para listar e filtrar
- **Animações Suaves**: GSAP, Framer Motion e efeitos customizados
- **UI Responsiva**: SCSS modular + Tailwind CSS utilitário
- **Boas práticas**: ESLint, estrutura organizada e componentes reutilizáveis

## 🏗️ Arquitetura do Projeto

Estrutura simplificada dos diretórios mais relevantes:

```text
src/
  app/
    (public)/
      projetos/            # Página de listagem de projetos
      projeto/[slug]/      # Página de projeto individual
      politica-de-privacidade/
    api/                   # Funções de consumo da API do WordPress
      getAPI.js            # Wrapper genérico de fetch
      getProjects.js       # Busca projetos e tecnologias
      getAcfOptions.js     # Busca opções globais (ACF Options)
      getLanguages.js      # Busca idiomas (Polylang)
    components/            # Componentes UI (Header, Footer, Home, Projects ...)
    context/               # Contextos (dados globais, sticky, projetos)
    utils/                 # Utilidades (ex.: getCurrentLang)
  public/                  # Imagens, ícones, meta e estáticos
  tailwind.config.js       # Configuração do Tailwind
  next.config.mjs          # Configurações do Next.js
```

## 🔌 Integração com WordPress

A aplicação consome os seguintes endpoints (baseados em `NEXT_PUBLIC_WORDPRESS_API_URL`):

- `GET /wp-json/wp/v2/projeto?_embed&per_page=100&lang={lang}` — lista projetos
- `GET /wp-json/wp/v2/tecnologias?hide_empty=true` — lista tecnologias
- `GET /wp-json/acf/v3/options/options?lang={lang}` — opções globais (ACF Options)
- `GET /wp-json/pll/v1/languages` — idiomas disponíveis (Polylang)

Requisitos no WordPress:

- **CPT "projeto"**: cadastra os cases do portfólio
- **Taxonomia "tecnologias"**: relaciona stacks/ferramentas
- **ACF**: grupo de campos para opções globais e para projetos
- **Polylang**: idiomas e tradução de conteúdo

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com a URL pública do WordPress:

```bash
NEXT_PUBLIC_WORDPRESS_API_URL=https://seu-dominio-wordpress.com
```

Observações:
- A aplicação usa apenas variáveis públicas (prefixo `NEXT_PUBLIC_`) porque as chamadas são feitas no client em alguns pontos.
- Em produção (ex.: Vercel), cadastre a mesma variável no painel de ambiente.

## 🛠️ Instalação e Uso

Pré-requisitos:
- Node.js 18+ e npm ou pnpm/yarn

Instalação das dependências:

```bash
npm install
```

Ambiente de desenvolvimento:

```bash
npm run dev
```

Build de produção:

```bash
npm run build
npm start
```

Lint:

```bash
npm run lint
```

## 🧪 Scripts Disponíveis

- `dev`: inicia o servidor de desenvolvimento Next.js
- `build`: cria o build de produção
- `start`: inicia o servidor em modo produção
- `lint`: executa o ESLint

## 🎨 UI/UX e Animações

- **SCSS modular** em `src/app/assets/scss` para estilos base e componentes
- **Tailwind CSS** para utilitários rápidos e consistência visual
- **GSAP / Framer Motion** para transições e microinterações

## 🌐 Idiomas

- Funções dedicadas gerenciam e persistem o idioma atual (`localStorage`/utilitário `getCurrentLang`)
- Ícones de bandeiras em `public/images/flags`

## 🚀 Deploy

- Recomendado: **Vercel** (deploy sem configuração para projetos Next.js)
- Configure `NEXT_PUBLIC_WORDPRESS_API_URL` nos ambientes Preview/Production

## 📂 Imagens e Metadados

- Ícones, Open Graph e Twitter Card em `public/meta`
- Assets gerais em `public/images`

## ✅ Boas Práticas

- Componentes isolados em `src/app/components`
- Context API para dados compartilhados
- Tratamento de erros e fallback de rotas (ex.: redirect para 404 em falhas de API)

## 🧾 Licença

Este projeto é de uso pessoal e profissional dos autores. Entre em contato para usos específicos.

## 👨‍💻 Colaboração

Victor Medeiros (@devictormedeiros) - Front-end Developer (devictormedeiros.com)

Matheus Felipe (@mafiuss99) — Front-end Developer 

Marcello Vanzillotta — UI/UX Designer (vanzillotta.com)
