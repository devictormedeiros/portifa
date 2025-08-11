// app/projetos/[slug]/page.jsx
import { notFound } from "next/navigation";
import { yoastToMetadata, makeCptFetcherWithYoast } from "@/app/lib/yoast-seo";
import ProjetoPage from "./pageClient";

const getProjeto = makeCptFetcherWithYoast(
  "projeto",
  [],
  { embed: true }
);

export async function generateMetadata({ params }) {
  const post = await getProjeto(params.slug);
  if (!post) return {};
  return yoastToMetadata(post.yoast_head_json);
}

export default async function Page({ params }) {
  const post = await getProjeto(params.slug);
  if (!post) return notFound();

  const schema = post?.yoast_head_json?.schema;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <ProjetoPage initialProject={post} />
    </>
  );
}