import LogoRice from "./LogoRice";
import Navigation from "./Navigation";

function HeaderBottom() {
  return (
    <>
      <div className="container relative mx-auto flex items-center justify-between px-5 lg:px-4 lg:py-7">
        <LogoRice />
        <Navigation />
      </div>
    </>
  );
}

export default HeaderBottom;
