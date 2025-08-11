import HomePage from "./components/Home";
import { yoastToMetadata, makePageFetcherWithYoast } from "@/app/lib/yoast-seo";

const getHome = makePageFetcherWithYoast("home");

export async function generateMetadata() {
  const page = await getHome();
  return yoastToMetadata(page?.yoast_head_json);
}

export default async function Page() {
  const pageData = await getHome();

  return (
    <>
      {/* JSON-LD do Yoast, renderizado no HTML do servidor */}
      {pageData?.yoast_head_json?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pageData.yoast_head_json.schema),
          }}
        />
      )}

      <HomePage pageData={pageData} />
    </>
  );
}
