import Link from "next/link";
import { useState, useEffect } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

function NavList({ isMenuOpen }) {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  function handleClick(link) {
    setActiveLink(link);
  }

  return (
    <nav
      className={`lg:flex ${isMenuOpen ? "absolute left-0 top-[4rem] w-full bg-gray-800" : "hidden"} lg:relative lg:flex-row lg:space-x-6`}
    >
      <ul className="flex flex-col gap-4 px-5 py-4 text-xl text-white lg:flex-row lg:items-center lg:space-x-6">
        <li>
          <Link href="/" passHref>
            <span
              onClick={() => handleClick("/")}
              className={`${activeLink === "/" ? "text-yellow-400" : ""}`}
            >
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <span
              onClick={() => handleClick("/about")}
              className={`${activeLink === "/about" ? "text-yellow-400" : ""}`}
            >
              About
            </span>
          </Link>
        </li>
        <li>
          <Link href="/services" passHref>
            <span
              onClick={() => handleClick("/services")}
              className={`${activeLink === "/services" ? "text-yellow-400" : ""}`}
            >
              Services
            </span>
          </Link>
        </li>
        <li className="sm:relative">
          <div className="flex items-center">
            <Link href="/pages" passHref>
              <span
                onClick={() => handleClick("/pages")}
                className={`${activeLink === "/pages" ? "text-yellow-400" : ""} mr-3`}
              >
                Pages
              </span>
            </Link>
            <button onClick={() => setIsPagesOpen(!isPagesOpen)}>
              {isPagesOpen ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
            </button>
          </div>
          {isPagesOpen && (
            <div className="mx-auto flex flex-col gap-4 rounded-lg border border-white py-2 pl-5 sm:absolute sm:bg-gray-800/40 sm:px-3 sm:backdrop-blur-sm">
              <Link href="/gallery" passHref>
                <span
                  onClick={() => handleClick("/gallery")}
                  className={`${activeLink === "/gallery" ? "text-yellow-400" : ""}`}
                >
                  Gallery
                </span>
              </Link>
              <Link href="/team" passHref>
                <span
                  onClick={() => handleClick("/team")}
                  className={`${activeLink === "/team" ? "text-yellow-400" : ""}`}
                >
                  Team
                </span>
              </Link>
              <Link href="/blog" passHref>
                <span
                  onClick={() => handleClick("/blog")}
                  className={`${activeLink === "/blog" ? "text-yellow-400" : ""}`}
                >
                  Blog
                </span>
              </Link>
            </div>
          )}
        </li>
        <li>
          <Link href="/shop" passHref>
            <span
              onClick={() => handleClick("/shop")}
              className={`${activeLink === "/shop" ? "text-yellow-400" : ""}`}
            >
              Shop
            </span>
          </Link>
        </li>
        <li className="lg:mb-5 lg:mt-5">
          <Link href="/contactus" passHref>
            <span
              onClick={() => handleClick("/contactus")}
              className={`${activeLink === "/contactus" ? "text-yellow-400" : ""}`}
            >
              Contact us
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavList;
