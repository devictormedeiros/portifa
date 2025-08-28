"use client";
import React from "react";
import { useDataOptions } from "@/app/context/DataOptionsContext";
import Contact from "@/app/components/Contact";
import Header from "@/app/components/Header";

const PrivacyPage = () => {
  const { dataOption } = useDataOptions();

  return (
    <>
      <Header logo={dataOption?.logo_principal || null} />
      <main className="main-privacy-page">
        <div className="container py-10">
          <h1 className="text-3xl font-bold text-primary mb-8">
            Termos de Uso e Política de Privacidade
          </h1>

          {/* TERMOS DE USO */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Termos de Uso
            </h2>

            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  1. Aceitação dos Termos
                </h3>
                <p className="text-white leading-relaxed">
                  Ao acessar e utilizar este site, você concorda com os presentes
                  Termos de Uso e com nossa Política de Privacidade. Caso não
                  concorde, recomendamos que não utilize nossos serviços.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  2. Uso Permitido
                </h3>
                <p className="text-white leading-relaxed">
                  O conteúdo disponibilizado neste site é destinado para uso
                  pessoal e não comercial. É proibida a cópia, distribuição ou
                  modificação sem autorização prévia.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  3. Responsabilidades do Usuário
                </h3>
                <p className="text-white leading-relaxed">
                  O usuário compromete-se a não utilizar este site para fins
                  ilegais, que possam comprometer a segurança ou afetar a
                  experiência de outros usuários.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  4. Alterações
                </h3>
                <p className="text-white leading-relaxed">
                  Reservamo-nos o direito de alterar estes Termos de Uso a
                  qualquer momento, sendo responsabilidade do usuário revisar
                  periodicamente as atualizações.
                </p>
              </section>
            </div>
          </section>

          {/* POLÍTICA DE PRIVACIDADE */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Política de Privacidade
            </h2>

            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  1. Coleta de Informações
                </h3>
                <p className="text-white leading-relaxed">
                  Coletamos informações fornecidas por você através de
                  formulários, bem como dados de navegação para melhorar sua
                  experiência em nosso site.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  2. Uso das Informações
                </h3>
                <p className="text-white leading-relaxed">
                  As informações coletadas são utilizadas para comunicação, envio
                  de conteúdos relevantes, melhoria de nossos serviços e
                  atendimento às suas solicitações.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  3. Compartilhamento de Dados
                </h3>
                <p className="text-white leading-relaxed">
                  Não compartilhamos seus dados pessoais com terceiros, exceto
                  quando exigido por lei ou quando necessário para a execução de
                  nossos serviços.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  4. Segurança
                </h3>
                <p className="text-white leading-relaxed">
                  Adotamos medidas técnicas e organizacionais para proteger seus
                  dados contra acesso não autorizado, alteração ou divulgação
                  indevida.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  5. Contato
                </h3>
                <p className="text-white leading-relaxed">
                  Caso tenha dúvidas sobre esta Política de Privacidade, entre em
                  contato conosco pelo formulário disponível em nosso site.
                </p>
              </section>
            </div>
          </section>
        </div>

        {dataOption && dataOption.secao_contato && (
          <Contact
            scrollText={dataOption.texto_scroll || null}
            data={dataOption.secao_contato}
            dataForm={dataOption.configuracao_do_formulario || null}
          />
        )}
      </main>
    </>
  );
};

export default PrivacyPage;
