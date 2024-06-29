function PageTextContainer({ children, left, right, top, hidden }) {
  return (
    <div className="absolute left-0 right-0 top-[20rem] flex flex-col items-center justify-center gap-4 text-center text-white sm:hidden">
      {children}
    </div>
  );
}

export default PageTextContainer;
