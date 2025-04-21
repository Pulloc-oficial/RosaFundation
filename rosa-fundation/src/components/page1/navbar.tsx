import React, { useState } from "react";
import { useScroll } from "./context/scrollContext";
import { Link } from "react-router-dom";

interface Navbar1Props {
  onSwitch?: () => void;
}

const menuItems = [
  { name: "Nosotros", path: "/nosotros" },
  { name: "Servicios", path: "/servicios" },
  { name: "Instalaciones", path: "/instalaciones" },
  { name: "Informacion", path: "/informacion" },
  { name: "Preguntas", path: "/preguntas" },
];

const Navbar: React.FC<Navbar1Props> = ({ onSwitch }) => {
  const { isScrolled } = useScroll();
  const [ menuOpen, setMenuOpen ] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      id="header"
      className={`font-[Montserrat] fixed w-full z-50 top-0 text-white backdrop-blur-md transition-all duration-300  ${
      isScrolled ? "bg-[#004B5A]" : "bg-white"
      }`}
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3 px-4">
        <div className="flex items-center">
          <a className="text-3xl font-bold" href="#">
            <img src={`${isScrolled ? "../images/logo.png" : "../images/logo1.png"}`} alt="logo fundacion rosa" className="h-15 inline"/> 
          </a>
        </div>
        <div className="block lg:hidden">
          <button
            id="nav-toggle"
            onClick={toggleMenu}
            className={`p-2 transition duration-300 ${
              isScrolled ? "text-white" : "text-[#004B5A]"
            } hover:text-[#57D700]`}
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
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            menuOpen ? "block" : "hidden"
          } mt-2 lg:mt-0 ${isScrolled ? "" : "bg-transparent"} p-4 lg:p-0 z-20`}
          id="nav-content"
        >
          <ul className="lg:flex justify-end flex-1 items-center space-x-4 pr-5">
            {menuItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  onClick={() => setMenuOpen(false)}
                  className={`inline-block py-2 px-3 transition-colors duration-200 ${
                    isScrolled
                      ? "text-white hover:text-[#57D700]"
                      : "text-[#004B5A] hover:text-[#57D700]"
                  }`}
                  to={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <button
            id="navAction"
            className={`ml-0 lg:ml-4 mt-4 lg:mt-0 py-2 px-6 rounded-lg font-semibold 
              transition duration-300 ease-in-out shadow-md   ${
              isScrolled
                ? "bg-[#57D700] hover:bg-[#4BC000] text-white"
                : "bg-[#004B5A] hover:bg-[#003744] text-white"
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
        } opacity-25 my-0`}
      />
    </nav>
  );
};

export default Navbar;