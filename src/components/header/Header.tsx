import { useState } from "react";
import Hero from "../hero/Hero";
import "./header.scss";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuList = [
    {
      title: "Habilidades",
      redirect: "",
    },
    {
      title: "Curriculum",
      redirect: "",
    },
    {
      title: "Proyectos",
      redirect: "",
    },
    {
      title: "Experiencia",
      redirect: "",
    },
  ];
  return (
    <div>
      <div className="circle-background"></div>
      <nav className=" p-4 bg-white z-30  background-image-color ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black font-semibold text-xl   sm:left-20 z-40 sm:top-3 mt-2">
            <a href="/">Logo</a>
          </div>
          <div className="hidden md:block  z-30 text-center m-auto">
            <ul className="space-x-4 flex font-medium z-10  mt-2 right-20 cursor-pointer text-lg">
              {menuList.map((item) => (
                <li className="mt-2" key={item.title}>
                  {item.title}
                </li>
              ))}{" "}
              {/*        <li className="bg-pink-500 py-2 px-4 rounded-2xl text-white">
                Sobre mí
              </li> */}
            </ul>
          </div>
          <div className="md:hidden text-center m-auto z-50 right-0 top-2">
            <button
              onClick={toggleMenu}
              className="text-back focus:outline-none  z-50  right-2 top-0"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden  z-40 div-absolute-min">
            <div className="text-black font-semibold text-xl sm:top-3 mt-2 "></div>
            <ul className="mt-8 text-center  cursor-pointer">
              {menuList.map((item) => (
                <li key={item.title} className="mb-10">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      <Hero />
    </div>
  );
}

export default Navbar;
