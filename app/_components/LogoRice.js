import Image from "next/image";
import logo from "../../public/logo.png";

function LogoRice() {
  return (
    <div className="relative flex h-10 items-center">
      <Image src={logo} alt="Logo" className="object-cover" />
      <h1 className="ml-2 text-xl text-white sm:text-2xl">Real Rice</h1>
    </div>
  );
}

export default LogoRice;
