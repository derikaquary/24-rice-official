function BlackOverlay({ xsm, sm, md, lg, hidden }) {
  return (
    <div
      className={`absolute inset-0 mt-[${xsm}] h-screen bg-black opacity-50 sm:mt-[${sm}] sm:hidden md:mt-[122px] lg:mt-[3rem]`}
    ></div>
  );
}

export default BlackOverlay;
