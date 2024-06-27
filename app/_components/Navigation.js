"use client";

import Link from "next/link";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="flex flex-col sm:flex-row">
      <div>
        <button onClick={() => toggleMenu()}>
          {isMenuOpen ? <FaTimes size={30} /> : <RxHamburgerMenu size={30} />}
        </button>
      </div>
      <ul
        className={`${isMenuOpen ? "block" : "hidden"} flex flex-col sm:flex-row sm:space-x-6`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/pages">Pages</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/contactus">Contact us</Link>
        </li>
      </ul>
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
