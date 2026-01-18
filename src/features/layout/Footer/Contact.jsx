import IconsLib from "@/app/components/Icons";
import ContactForm from "./ContactForm";

const Contact = ({ data, dataForm }) => {
  return (
    <section className="sec-contact g-col-12">
      <div className="container">
        <h2 className="sec-contact-header w-full content-title-h2 text-gray-200 uppercase pb-8 md:pb-[4.3rem] border-white-10 border-b">
          {data?.titulo}
        </h2>
        <div className="sec-contact-body flex justify-between flex-wrap gap-y-12 md:gap-y-0">
          <div className="w-full md:w-2/6">
            <div dangerouslySetInnerHTML={{ __html: data?.texto }}></div>
            <div className="social-media flex flex-wrap gap-x-6 gap-y-7 md:gap-y-4 items-center mt-8 md:mt-10">
              {data?.whatsapp && (
                <a
                  target="_blank"
                  href={data?.whatsapp}
                  className="social-media-icon flex items-center gap-2"
                >
                  <IconsLib name={"whats"} />
                </a>
              )}
              {data?.instagram && (
                <a
                  target="_blank"
                  href={data?.instagram}
                  className="social-media-icon flex items-center gap-2"
                >
                  <IconsLib name={"insta"} />
                </a>
              )}
              {data?.facebook && (
                <a
                  target="_blank"
                  href={data?.facebook}
                  className="social-media-icon flex items-center gap-2"
                >
                  {/* <FaFacebookF className="h-8 w-8" /> */}
                  <IconsLib name={"facebook"} />
                </a>
              )}
              {data?.linkedin && (
                <a target="_blank" href={data?.linkedin}>
                  <IconsLib name={"linkedin"} />
                </a>
              )}
              {data?.behance && (
                <a
                  target="_blank"
                  href={data?.behance}
                  className="social-media-icon flex items-center gap-2"
                >
                  <IconsLib name={"behance"} />
                </a>
              )}
              {data?.github && (
                <a
                  target="_blank"
                  href={data?.github}
                  className="social-media-icon flex items-center gap-2"
                >
                  <IconsLib name={"github"} />
                </a>
              )}
              <a
                target="_blank"
                href={`mailto:${data?.email}`}
                className="social-media-icon flex items-center gap-2 w-full content-text-bold text-gray-200"
              >
                {data?.email}
              </a>
            </div>
          </div>
          <ContactForm dataForm={dataForm} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
