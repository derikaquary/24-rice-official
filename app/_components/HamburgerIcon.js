import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

function HamburgerIcon({ isMenuOpen, toggleMenu }) {
  return (
    <div className="flex justify-end sm:hidden">
      <button onClick={() => toggleMenu()}>
        {isMenuOpen ? <FaTimes size={30} /> : <RxHamburgerMenu size={30} />}
      </button>
    </div>
  );
}

export default HamburgerIcon;
