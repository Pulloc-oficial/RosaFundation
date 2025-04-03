import React from "react";
import { useScroll } from "./context/scrollContext";

interface Navbar1Props {
  onSwitch?: () => void;
}

const Navbar: React.FC<Navbar1Props> = ({ onSwitch }) => {
  const { isScrolled } = useScroll();

  return (
    <nav
      id="header"
      className={`fixed w-full z-50 top-0 text-white backdrop-blur-md transition-all duration-300  ${
      isScrolled ? "gradient" : "bg-white shadow"
      }`}
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center font-[Montserrat] font-semibold">
          <a
            className={`toggleColour no-underline hover:no-underline font-bold text-3xl ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
            href="#"
          >
            <img src={`${isScrolled ? "../images/logo1.png" : "../images/logo.png"}`} alt="logo fundacion rosa" className="h-15 inline"/> 
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 ${
            isScrolled ? "" : "bg-transparent"
          } text-black p-4 lg:p-0 z-20`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center text-base font-montserrat-bold">
          <li className="mr-3">
              <a
                className={`inline-block no-underline hover:text-underline py-2 px-3 ${
                  isScrolled ? "text-gray-600 hover:text-gray-200" 
                  : "text-white hover:rounded-lg hover:bg-[#00D4A1] hover:text-white"
                }`}
                href="#"
              >
                Nosotros
              </a>
            </li>
            <li className="mr-3">
              <a
                className={`inline-block no-underline hover:text-underline py-2 px-3 ${
                  isScrolled ? "text-gray-600 hover:text-gray-200" 
                  : "text-white hover:rounded-lg hover:bg-[#00D4A1] hover:text-white"
                }`}
                href="#"
              >
                Servicios
              </a>
            </li>
            <li className="mr-3">
              <a
                className={`inline-block no-underline hover:text-underline py-2 px-3 ${
                  isScrolled ? "text-gray-600 hover:text-gray-200" 
                  : "text-white hover:rounded-lg hover:bg-[#00D4A1] hover:text-white"
                }`}
                href="#"
              >
                Instalaciones
              </a>
            </li>
            <li className="mr-3">
              <a
                className={`inline-block no-underline hover:text-underline py-2 px-3 ${
                  isScrolled ? "text-gray-600 hover:text-gray-200" 
                  : "text-white hover:rounded-lg hover:bg-[#00D4A1] hover:text-white"
                }`}
                href="#"
              >
                Informacion
              </a>
            </li>
            <li className="mr-3">
              <a
                className={`inline-block no-underline hover:text-underline py-2 px-3 ${
                  isScrolled ? "text-gray-600 hover:text-gray-200" 
                  : "text-white hover:rounded-lg hover:bg-[#00D4A1] hover:text-white"
                }`}
                href="#"
              >
                Preguntas
              </a>
            </li>
          </ul>
          <button
            id="navAction"
            className={`mx-auto lg:mx-0 hover:text-underline rounded-lg mt-4 lg:mt-0 py-2 px-8 
              shadow-sm shadow-[rgb(0,0,0,0.7)] opacity-100 focus:outline-none focus:shadow-outline transform transition 
              hover:scale-103 bg-[#008AA7] hover:bg-[#A0A0A0] duration-300 ease-in-out font-[Montserrat] ${
              isScrolled
                ? "bg-[#00D4A1] text-white"
                : "bg-[#008AA7] text-white"
            }`}
            onClick={onSwitch}
          >
            Contacto
          </button>
        </div>
      </div>
      <hr
        className={`border-b ${
          isScrolled ? "border-gray-200" : "border-gray-100"
        } opacity-25 my-0 py-0`}
      />
    </nav>
  );
};

export default Navbar;