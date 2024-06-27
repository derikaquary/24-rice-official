import LogoRice from "./LogoRice";
import Navigation from "./Navigation";

function HeaderBottom() {
  return (
    <>
      <div className="container relative mx-auto flex items-center justify-between px-3 sm:px-4 sm:py-7">
        <LogoRice />
        <Navigation />
      </div>
    </>
  );
}

export default HeaderBottom;
