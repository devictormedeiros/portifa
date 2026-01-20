import "./style.scss";
import Contact from "./Contact";
import ScrollingTexts from "./ScrollText";

const Footer = ({ data, scrollText, dataForm }) => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <ScrollingTexts data={scrollText} />
      <Contact data={data} dataForm={dataForm} />
      <div className="footer-main pb-[5rem] pt-[4rem] lg:pb-[4rem] lg:pt-[7.5rem] relative z-10">
        <div className="container mx-auto flex justify-center text-center items-center gap-x-6">
          <p className="text-white-40 content-caption border-t border-white-10 pt-2 w-full">
            Todos os direitos reservados &copy; {date}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
