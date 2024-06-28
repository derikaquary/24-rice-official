"use client";

import { useState } from "react";
import NavList from "./NavList";
import HamburgerIcon from "./HamburgerIcon";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <HamburgerIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <NavList isMenuOpen={isMenuOpen} />
    </div>
  );
}

export default Navigation;

/* {links.map((link, index) =>
        link === "Contact Us" ? (
          <li key={index}>
            <Link
              href="#"
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              {link}
            </Link>
          </li>
        ) : (
          navLink(link)
        )
      )} */
