function BlackOverlay({ xsm, sm, md, lg, hidden }) {
  return (
    <div
      className={`absolute inset-0 mt-[${xsm}] h-screen bg-black opacity-50 sm:mt-[${sm}] sm:${hidden} md:mt-[${md}] lg:mt-[${lg}]`}
    ></div>
  );
}

export default BlackOverlay;
