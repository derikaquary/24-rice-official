import Link from "next/link";
import { useState } from "react";

function NavList({ isMenuOpen }) {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  function togglePages() {
    setIsPagesOpen(!isPagesOpen);
  }

  return (
    <nav
      className={`sm:flex ${isMenuOpen ? "absolute left-0 top-[4rem] w-full bg-gray-800" : "hidden"} sm:relative sm:flex-row sm:space-x-6`}
    >
      <ul className="flex flex-col items-center gap-4 px-5 py-4 text-xl text-white sm:flex-row sm:space-x-6">
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
          <Link href="/pages">Pages</Link>{" "}
          <button onClick={() => togglePages()}>X</button>
          {isPagesOpen && (
            <div className="mx-auto flex flex-col gap-4 rounded-lg border border-white py-2 pl-5 sm:hidden">
              <Link href="/">Galery</Link>
              <Link href="/">Team</Link>
              <Link href="/">Blog</Link>
            </div>
          )}
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li className="sm:mb-5 sm:mt-5">
          <Link
            href="/contactus"
            className="h-4 rounded-md border bg-yellow-600 px-4 py-3"
          >
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavList;
