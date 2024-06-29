import LogoRice from "./LogoRice";
import Navigation from "./Navigation";

function HeaderBottom() {
  return (
    <>
      <div className="container relative mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-4">
        <LogoRice />
        <Navigation />
      </div>
    </>
  );
}

export default HeaderBottom;
