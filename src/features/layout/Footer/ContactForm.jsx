"use client";

import { AlertForm } from "@/components/AlertForm";
import { Spinner } from "@material-tailwind/react";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = ({ dataForm }) => {
  const [isSuccess, setIsSuccess] = useState(null);
  const [loadingForm, setLoadingForm] = useState(false);

  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleError = (errors) => {
    resetAlert();
    setTimeout(() => setIsSuccess(false), 0);
  };

  const resetAlert = () => {
    setIsSuccess(null); // Redefine o estado antes de qualquer tentativa de envio
  };

  const onSubmit = (value) => {
    setLoadingForm(true);
    resetAlert();
    emailjs
      .sendForm(
        dataForm?.emailjs_service_id,
        dataForm?.emailjs_template_id,
        form.current,
        dataForm?.emailjs_public_key,
      )
      .then(
        (result) => {
          setIsSuccess(true);
          setLoadingForm(false);
          form.current.reset();
        },
        (error) => {
          setIsSuccess(false);
          setLoadingForm(false);
        },
      );
  };

  return (
    <form
      className="w-full flex gap-6 flex-col relative"
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
            id="input-consent"
            type="checkbox"
            className={`rounded cursor-link ${errors.consent && "input-error"}`}
            {...register("consent", { required: true })}
          />
          <label
            className="text-sm content-caption text-white-70"
            htmlFor="input-consent"
          >
            <span
              className="text-privacy block"
              dangerouslySetInnerHTML={{
                __html: dataForm?.texto_de_privacidade,
              }}
            />
          </label>
        </div>
        <div className="flex flex-wrap items-center justify-end w-full md:w-1/4">
          <button
            type="submit"
            className={`btn btn-submit flex gap-2 items-center px-8 py-3 text-gray-700 bg-primary uppercase button-md rounded w-full justify-center md:ml-4 ${
              loadingForm ? "is-loading" : ""
            }`}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: dataForm?.texto_do_botao,
              }}
            />
            <Spinner className="h-4 w-4 absolute right-2" />
          </button>
        </div>
      </div>
      {isSuccess === true && (
        <AlertForm
          alertType="sucess"
          alertText={
            "Formulário enviado com sucesso! Entraremos em contact em breve."
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
  );
};

export default ContactForm;
