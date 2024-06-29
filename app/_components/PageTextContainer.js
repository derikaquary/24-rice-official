function PageTextContainer({ children, left, right, top, hidden }) {
  return (
    <div
      className={`absolute left-${left} right-${right} top-[${top}] flex flex-col items-center justify-center gap-4 text-center text-white sm:${hidden}`}
    >
      {children}
    </div>
  );
}

export default PageTextContainer;
