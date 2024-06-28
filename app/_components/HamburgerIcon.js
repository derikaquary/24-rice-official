import { RxHamburgerMenu } from "react-icons/rx";

function HamburgerIcon({ isMenuOpen, toggleMenu }) {
  return (
    <div className="flex justify-end lg:hidden">
      <button
        className={`rounded border-2 border-white ${isMenuOpen ? "border-yellow-400 bg-yellow-400" : ""} p-1`}
        onClick={() => toggleMenu()}
      >
        <RxHamburgerMenu color="white" size={30} />
      </button>
    </div>
  );
}

export default HamburgerIcon;
