import Archive from "@/app/components/Projects";
import { yoastToMetadata, makePageFetcherWithYoast } from "@/app/lib/yoast-seo";

const getProjetos = makePageFetcherWithYoast("projetos");

export async function generateMetadata() {
  const page = await getProjetos();
  return yoastToMetadata(page?.yoast_head_json, { path: "/projetos" });
}

export default async function Page() {
  const pageData = await getProjetos();
  return (
    <>
      {pageData?.yoast_head_json?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageData.yoast_head_json.schema) }}
        />
      )}
      <Archive pageData={pageData} />
    </>
  );
}
