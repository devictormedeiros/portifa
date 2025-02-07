import "./style.scss";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { AlertForm } from "../AlertForm";
import { Spinner } from "@material-tailwind/react";
import ScrollText from "../components/Home/ScrollText/ScrollText";
import {
  FaLinkedinIn,
  FaBehance,
  FaGithub,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";
const Contato = ({ data, dataForm }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleError = (errors) => {
    resetAlert();
    console.log("Erros de validação:", errors);
    setTimeout(() => setIsSuccess(false), 0);
  };
  const [isSuccess, setIsSuccess] = useState(null);
  const [loadingForm, setLoadingForm] = useState(false);
  const form = useRef();

  const resetAlert = () => {
    setIsSuccess(null); // Redefine o estado antes de qualquer tentativa de envio
  };

  const onSubmit = (value) => {
    setLoadingForm(true);
    resetAlert();
    emailjs
      .sendForm(
        "service_mqzb30w",
        "template_qvp80rs",
        form.current,
        "4Uw6beMwHYhllmMdd"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
          setIsSuccess(true);
          setLoadingForm(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setIsSuccess(false);
          setLoadingForm(false);
        }
      );
  };

  return (
    <>
      {data?.texto_scroll && <ScrollText data={data?.texto_scroll} />}

      <section className="sec-contato md:mb-9 mb-0 g-col-12">
        <div className="container">
          <div className="sec-contato-header w-full">
            <h2 className="content-title-h2 text-gray-200 uppercase pb-4  border-white-10 border-b">
              {data?.titulo}
            </h2>
          </div>
          <div className="sec-contato-body flex justify-between flex-wrap gap-y-12 md:gap-y-0">
            <div className="w-full md:w-2/6">
              <div dangerouslySetInnerHTML={{ __html: data?.texto }}></div>
              <div className="social-media flex flex-wrap gap-x-6 gap-y-7 md:gap-y-4 items-center mt-8 md:mt-10">
                {data?.whatsapp && (
                  <a
                    target="_blank"
                    href={data?.whatsapp}
                    className="social-media-icon flex items-center gap-2"
                  >
                    <FaWhatsapp className="h-8 w-8" />
                  </a>
                )}
                {data?.instagram && (
                  <a
                    target="_blank"
                    href={data?.instagram}
                    className="social-media-icon flex items-center gap-2"
                  >
                    <FaInstagram className="h-8 w-8" />
                  </a>
                )}
                {data?.facebook && (
                  <a
                    target="_blank"
                    href={data?.facebook}
                    className="social-media-icon flex items-center gap-2"
                  >
                    <FaFacebookF className="h-8 w-8" />
                  </a>
                )}
                {data?.linkedin && (
                  <a target="_blank" href={data?.linkedin}>
                    <FaLinkedinIn className="h-8 w-8" />
                  </a>
                )}
                {data?.behance && (
                  <a
                    target="_blank"
                    href={data?.behance}
                    className="social-media-icon flex items-center gap-2"
                  >
                    <FaBehance className="h-8 w-8" />
                  </a>
                )}
                {data?.github && (
                  <a
                    target="_blank"
                    href={data?.github}
                    className="social-media-icon flex items-center gap-2"
                  >
                    <FaGithub className="h-8 w-8" />
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
            <div className="w-full md:w-1/2">
              <form
                className="flex gap-6 flex-col relative"
                onSubmit={handleSubmit(onSubmit, handleError)}
                ref={form}
              >
                <input
                  type="text"
                  placeholder="Nome"
                  {...register("nome", { required: true })}
                  className={`w-full block px-6 py-2 rounded ${
                    errors.nome && "input-error"
                  }`}
                />
                <input
                  type="e-mail"
                  placeholder="E-mail"
                  {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  })}
                  className={`w-full block px-6 py-2 rounded ${
                    errors.email && "input-error"
                  }`}
                />
                <textarea
                  placeholder="Mensagem"
                  {...register("mensagem", { required: true })}
                  className={`w-full block px-6 py-2 rounded ${
                    errors.mensagem && "input-error"
                  }`}
                  rows={11}
                ></textarea>
                <div className="flex items-center flex-wrap gap-y-8 md:gap-y-0">
                  <div className="consent-box flex items-center gap-5 w-full md:w-3/4 pr-4">
                    <input
                      type="checkbox"
                      className={`rounded ${errors.consent && "input-error"}`}
                      {...register("consent", { required: true })}
                    />
                    <label
                      className="text-sm content-caption text-white-70"
                      htmlFor="input-consent"
                    >
                      Etiam non diam sit amet enim euismod blandit luctus
                      lacinia lorem. Vestibulum ultricies est turpis, ut
                      pulvinar lorem tempor a.
                    </label>
                  </div>
                  <div className="flex flex-wrap items-center justify-end w-full md:w-1/4">
                    <button
                      type="submit"
                      className={`btn btn-submit flex gap-2 items-center px-8 py-3 text-gray-700 bg-primary uppercase button-md rounded w-full justify-center md:ml-4 ${
                        loadingForm ? "is-loading" : ""
                      }`}
                    >
                      Enviar
                      <Spinner className="h-4 w-4 absolute right-2" />
                    </button>
                  </div>
                </div>
                {isSuccess === true && (
                  <AlertForm
                    alertType="sucess"
                    alertText={
                      "Formulário enviado com sucesso! Entraremos em contato em breve."
                    }
                  />
                )}
                {isSuccess === false && (
                  <AlertForm
                    alertType="error"
                    alertText="Ocorreu um erro ao enviar o formulário. Tente novamente."
                  />
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
