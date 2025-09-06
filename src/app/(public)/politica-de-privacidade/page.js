"use client";
import React from "react";
import { useDataOptions } from "@/app/context/DataOptionsContext";
import Contact from "@/app/components/Contact";
import Header from "@/app/components/Header";
import "./style.scss";

const PrivacyPage = () => {
  const { dataOption: data } = useDataOptions();

  return (
    <>
      <Header logo={data?.logo_principal || null} />
      <main className="main-privacy-page">
        <div className="container py-10">
         {data?.politica_de_privacidade && (
          <div dangerouslySetInnerHTML={{ __html: data?.politica_de_privacidade?.texto }} />
         )}
        </div>

        {data && data?.secao_contato && (
          <Contact
            scrollText={data?.texto_scroll || null}
            data={data?.secao_contato}
            dataForm={data?.configuracao_do_formulario || null}
          />
        )}
      </main>
    </>
  );
};

export default PrivacyPage;
