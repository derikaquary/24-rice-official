import Link from "next/link";
import { useState, useEffect } from "react";

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
      className={`sm:flex ${isMenuOpen ? "absolute left-0 top-[4rem] w-full bg-gray-800" : "hidden"} sm:relative sm:flex-row sm:space-x-6`}
    >
      <ul className="flex flex-col gap-4 px-5 py-4 text-xl text-white sm:flex-row sm:items-center sm:space-x-6">
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
        <li>
          <Link href="/pages" passHref>
            <span
              onClick={() => handleClick("/pages")}
              className={`${activeLink === "/pages" ? "text-yellow-400" : ""}`}
            >
              Pages
            </span>
          </Link>
          <button onClick={() => setIsPagesOpen(!isPagesOpen)}>X</button>
          {isPagesOpen && (
            <div className="mx-auto flex flex-col gap-4 rounded-lg border border-white py-2 pl-5 sm:hidden">
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
        <li className="sm:mb-5 sm:mt-5">
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
