import "./style.scss";
import IconsLib from "@/components/Icons";
import ScrollingText from "@/features/home/sections/ScrollText/ScrollText";
import ContactForm from "./ContactForm";
import SubFooter from "./SubFooter";
import { getFooterData } from "@/features/layout/services/layout.service";
import FloatSocial from "./FloatSocial";

export default async function Footer() {
  const { texto_scroll, secao_contato, configuracao_do_formulario } =
    await getFooterData();

  return (
    <>
      <section className="sec-contact g-col-12">
        <ScrollingText data={texto_scroll} />

        <div className="container scroll-mt-40" id="contato">
          <div className="sec-contact-header w-full">
            <h2 className="content-title-h2 text-gray-200 uppercase pb-4  border-white-10 border-b">
              {secao_contato?.titulo}
            </h2>
          </div>
          <div className="sec-contact-body flex justify-between flex-wrap gap-y-12 md:gap-y-0">
            <div className="w-full md:w-2/6">
              {secao_contato?.texto && (
                <div
                  dangerouslySetInnerHTML={{ __html: secao_contato?.texto }}
                ></div>
              )}
              <div className="social-media flex flex-wrap gap-x-6 gap-y-7 md:gap-y-4 items-center mt-8 md:mt-10">
                {secao_contato?.whatsapp && (
                  <a
                    target="_blank"
                    href={secao_contato?.whatsapp}
                    className="social-media-icon flex items-center gap-2"
                  >
                    {/* <FaWhatsapp className="h-8 w-8" /> */}
                    <IconsLib name={"whats"} />
                  </a>
                )}
                {secao_contato?.instagram && (
                  <a
                    target="_blank"
                    href={secao_contato?.instagram}
                    className="social-media-icon flex items-center gap-2"
                  >
                    <IconsLib name={"insta"} />
                  </a>
                )}
                {secao_contato?.facebook && (
                  <a
                    target="_blank"
                    href={secao_contato?.facebook}
                    className="social-media-icon flex items-center gap-2"
                  >
                    {/* <FaFacebookF className="h-8 w-8" /> */}
                    <IconsLib name={"facebook"} />
                  </a>
                )}
                {secao_contato?.linkedin && (
                  <a target="_blank" href={secao_contato?.linkedin}>
                    <IconsLib name={"linkedin"} />
                  </a>
                )}
                {secao_contato?.behance && (
                  <a
                    target="_blank"
                    href={secao_contato?.behance}
                    className="social-media-icon flex items-center gap-2"
                  >
                    <IconsLib name={"behance"} />
                  </a>
                )}
                {secao_contato?.github && (
                  <a
                    target="_blank"
                    href={secao_contato?.github}
                    className="social-media-icon flex items-center gap-2"
                  >
                    <IconsLib name={"github"} />
                  </a>
                )}
                <a
                  target="_blank"
                  href={`mailto:${secao_contato?.email}`}
                  className="social-media-icon flex items-center gap-2 w-full content-text-bold text-gray-200"
                >
                  {secao_contato?.email}
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <ContactForm dataForm={configuracao_do_formulario} />
            </div>
          </div>
        </div>
      </section>

      {secao_contato && <FloatSocial data={secao_contato} />}

      <SubFooter />
    </>
  );
}
