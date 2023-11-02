import ImgKawaii from "../../../assets/Imgs/9193347.png";
import "./about.scss";
import "../../../style/global.css";
export default function AboutMe() {
  return (
    <>
      <div className=" mx-auto px-4 flex flex-col lg:flex-row items-center mb-20  sm:mt-52 mt-0">
        <div className="bg-img-circle"></div>
        <div className="lg:w-1/2 z-index-global ">
          <div className="sm:mt-28 mt-2 sm:ml-12 mt:ml-2 z-index-global ">
            <img src={ImgKawaii.src} />
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 z-30 ">
          <h1 className="text-3xl mb-20 font-semibold sm:text-left text-center">
            ¡Hola! Soy <span className="text-pink-500">Emily</span> 👩‍💻
          </h1>
          <p className="leading-relaxed sm:pr-40 pr-0 sm:text-left text-center">
            Una desarrolladora de software con experiencia en la creación de
            diversos proyectos centrados en la mejora de la experiencia de
            usuario (UI/UX). He trabajado con una variedad de tecnologías y
            estilos de diseño para crear interfaces atractivas y funcionales. Mi
            objetivo principal es aplicar mis conocimientos en diferentes
            entornos laborales y contribuir al éxito de cada proyecto en el que
            participo.
          </p>
        </div>
      </div>
    </>

    /*  <div className="sm:mt-60 mt-20 text-black bg-white p-20">
     
      <div className="grid grid-cols-2 auto-cols-max">
        <div className=" z-index-global">
      
        </div>
        <div className="mt-20">
          {" "}
          <h1 className="text-2xl mb-6 font-semibold">Sobre Mí</h1>
          <p>
            {" "}
            ¡Hola! Soy Emily 👩‍💻, una desarrolladora de software con experiencia
            en la creación de diversos proyectos centrados en la mejora de la
            experiencia de usuario (UI/UX). He trabajado con una variedad de
            tecnologías y estilos de diseño para crear interfaces atractivas y
            funcionales. Mi objetivo principal es aplicar mis conocimientos en
            diferentes entornos laborales y contribuir al éxito de cada proyecto
            en el que participo. Acerca de Mí
          </p>
        </div>
      </div>
    </div> */
  );
}
