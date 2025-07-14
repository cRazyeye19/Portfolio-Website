import React from "react";

const Header = () => {
  return (
    <header className="py-8 flex justify-center items-center">
      <nav className="bg-white/70 backdrop-blur-sm px-6 py-2 rounded-lg shadow-sm">
        <ul className="flex space-x-8">
          <li>
            <a
              href="#"
              className="text-md font-bold text-gray-800 no-underline"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-md font-bold text-gray-800 no-underline"
            >
              Works
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
