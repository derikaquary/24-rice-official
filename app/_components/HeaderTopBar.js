import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Xicon from "./Xicon";
import { FaLinkedin } from "react-icons/fa";

function HeaderTopBar() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-between border-b border-b-slate-300 bg-gray-800 px-4 py-3 text-white sm:flex-row sm:border-b-0">
      <span className="text-center text-sm">
        ⏱️ Opening Hours: Sunday - Friday, 08:00 am - 05:00 pm
      </span>
      <span className="my-3 text-sm sm:my-0 sm:mt-0 sm:flex-1">
        📞 +4733378901
      </span>
      <div className="flex w-[300px] items-center justify-center gap-3 sm:justify-between">
        <FaInstagram size={25} />
        <FaFacebook size={25} />
        <Xicon />
        <FaLinkedin size={25} />
      </div>
    </div>
  );
}

export default HeaderTopBar;
