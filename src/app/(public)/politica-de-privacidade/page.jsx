import "./style.scss";
import Header from "@/features/layout/Header";
import Footer from "@/features/layout/Footer";
import { getPrivacyData } from "@/features/privacy/services/privacy.service";

export default async function PrivacyPage() {
  const data = await getPrivacyData();

  return (
    <>
      <Header />
      <main className="main-privacy-page">
        <div className="container py-10">
          {data && (
            <div
              dangerouslySetInnerHTML={{
                __html: data?.texto,
              }}
            />
          )}
        </div>
        <Footer />
      </main>
    </>
  );
}
