import { useState } from "react";
import ImgHeader from "../../assets/Imgs/cat.svg";
import "./hero.scss";
export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuList = [
    {
      title: "Habilidades",
      href: "#skills",
    },
    {
      title: "Curriculum",
      href: "#curriculum",
    },
    {
      title: "Proyectos",
      href: "#project",
    },
    {
      title: "Experiencia",
      href: "#exp",
    },
  ];
  return (
    <>
      <header className="pt-2 pb-10 pr-6 pl-6 md:pr-10 md:pl-10 bg-white gradient-bg">
        <nav className="p-4 z-30 mb-8">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white font-semibold text-xl   sm:left-20 z-40 ">
              <a href="/">Logo</a>
            </div>
            <div className="hidden md:block  z-30 text-center m-auto">
              <ul className="space-x-4 flex font-light z-10  mt-2 right-20 cursor-pointer text-lg text-white ">
                {menuList.map((item) => (
              <a className="mt-2" key={item.title} href={item.href}>
                    {item.title}
                  </a>
                ))}{" "}
                {/*        <li className="bg-pink-500 py-2 px-4 rounded-2xl text-white">
                Sobre mí
              </li> */}
              </ul>
            </div>
            <div className="md:hidden  z-50 right-0 top-2">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none  z-50  right-2 top-0"
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
              <div className="text-white font-semibold text-xl sm:top-3 mt-2 "></div>
              <ul className="mt-8 text-center  cursor-pointer text-white ">
                {menuList.map((item) => (
                  <li key={item.title} className="mb-10">
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
        <div className="mx-auto max-w-6xl px-4 flex flex-col lg:flex-row items-center mb-20">
          <div className="lg:w-1/2">
            <div className="sm:mt-12 mt-2 sm:ml-6 sm:mr-6">
              <h1 className="text-6xl font-extrabold sm:text-left text-center text-white">
                Emily Orduz
              </h1>
              <span className="sm:flex block text-2xl mt-6  sm:text-left text-center">
                <h4 className=" text-white  font-medium">Frontend </h4>
                <h4 className="ml-2  font-medium"> Developer</h4>
              </span>
              <button className="bg-white py-2 px-6 rounded-xl text-black mt-10 text-lg sm:ml-0 m-auto block shadow-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                Sobre mí
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0 z-30">
            <img src={ImgHeader.src} className="m-auto  " alt="Header" />
          </div>
        </div>
      </header>
    </>
  );
}
