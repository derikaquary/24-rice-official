import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Xicon from "./Xicon";
import { FaLinkedin } from "react-icons/fa";

function HeaderTopBar() {
  return (
    <div className="flex h-[165px] w-full items-center border-b border-b-slate-300 bg-gray-800 lg:h-[100px] lg:border-b-0">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-3 text-white sm:text-2xl lg:flex-row">
        <div className="flex flex-col items-center justify-center">
          <span className="pt-1 text-center lg:pt-0">
            ⏱️ Opening Hours: Sunday - Friday, 08:00 am - 05:00 pm
          </span>
          <span className="my-3 lg:my-0 lg:mt-0 lg:flex-1">📞 +4733378901</span>
        </div>
        <div className="flex w-[300px] items-center justify-center gap-3 lg:justify-between">
          <FaInstagram size={29} />
          <FaFacebook size={29} />
          <Xicon />
          <FaLinkedin size={29} />
        </div>
      </div>
    </div>
  );
}

export default HeaderTopBar;
