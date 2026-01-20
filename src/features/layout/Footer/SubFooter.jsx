export default function SubFooter() {
  const date = new Date().getFullYear();

  return (
    <div className="footer-main pb-[5rem] pt-[4rem] lg:pb-[4rem] lg:pt-[7.5rem] relative z-10 w-full">
      <div className="container mx-auto flex justify-center text-center items-center gap-x-6">
        <p className="text-white-40 content-caption border-t border-white-10 pt-2 w-full">
          Todos os direitos reservados &copy; {date}
        </p>
      </div>
    </div>
  );
}
