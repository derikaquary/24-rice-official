import React from "react";
import HeaderTopBar from "./HeaderTopBar";
import HeaderBottom from "./HeaderBottom";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-20 flex h-[250px] w-full flex-col gap-[1rem] lg:h-[200px] lg:gap-1">
      <HeaderTopBar />
      <HeaderBottom />
    </header>
  );
}

function navLink(name) {
  return (
    <li key={name}>
      <a
        href="#"
        className="rounded-xl px-5 py-2 text-white transition duration-300 hover:bg-white hover:text-gray-600"
      >
        {name}
      </a>
    </li>
  );
}
