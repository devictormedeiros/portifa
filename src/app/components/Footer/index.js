import { memo } from "react";
const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="footer-main py-7 md:py-[8.5rem] bg-gray-900 ">
      <div className="container mx-auto flex justify-center text-center items-center gap-x-6 border-t border-white-10 pt-3">
        <p className="text-white-40 content-caption">
          Todos os direitos reservados &copy; {date}
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
