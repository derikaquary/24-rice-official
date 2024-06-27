import Image from "next/image";
import logo from "../../public/logo.png";
import Navigation from "./Navigation";

function HeaderBottom() {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between sm:px-4 sm:py-7">
        <div className="relative flex h-10 items-center">
          <Image src={logo} alt="Logo" className="object-cover" />
          <h1 className="ml-2 text-xl text-white sm:text-2xl">Real Rice</h1>
        </div>
        <Navigation />
      </div>
    </>
  );
}

export default HeaderBottom;
