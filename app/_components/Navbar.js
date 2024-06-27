import React from "react";
import logo from "../../public/logo.png";
import Image from "next/image";

export default function Navbar() {
  const links = ["Home", "About", "Services", "Pages", "Shop", "Contact Us"];

  return (
    <header className="fixed w-full">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <span className="text-sm">
            ⏱️ Opening Hours: Sunday - Friday, 08:00 am - 05:00 pm
          </span>
          <span className="text-sm">📞 +4733378901</span>
        </div>
      </div>
      {/* Navbar */}
      <nav>
        <div className="container mx-auto flex justify-between items-center px-4 py-7">
          <div className="flex items-center relative h-10">
            <Image src={logo} alt="Logo" className="object-cover" />
            <h1 className="ml-2 text-2xl text-white">Real Rice</h1>
          </div>
          <ul className="flex space-x-6">
            {links.map((link, index) =>
              link === "Contact Us" ? (
                <li key={index}>
                  <a
                    href="#"
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                    {link}
                  </a>
                </li>
              ) : (
                navLink(link)
              )
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

function navLink(name) {
  return (
    <li key={name}>
      <a
        href="#"
        className="text-white hover:text-gray-600 hover:bg-white rounded-xl  px-5 py-2 transition duration-300">
        {name}
      </a>
    </li>
  );
}
