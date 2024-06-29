import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Xicon from "./Xicon";
import { FaLinkedin } from "react-icons/fa";

function HeaderTopBar() {
  return (
    <div className="w-full border-b border-b-slate-300 bg-gray-800 lg:border-b-0">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-3 text-white lg:flex-row">
        <span className="text-center">
          ⏱️ Opening Hours: Sunday - Friday, 08:00 am - 05:00 pm
        </span>
        <span className="my-3 lg:my-0 lg:mt-0 lg:flex-1">📞 +4733378901</span>
        <div className="flex w-[300px] items-center justify-center gap-3 lg:justify-between">
          <FaInstagram size={25} />
          <FaFacebook size={25} />
          <Xicon />
          <FaLinkedin size={25} />
        </div>
      </div>
    </div>
  );
}

export default HeaderTopBar;
