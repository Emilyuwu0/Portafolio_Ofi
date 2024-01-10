import ImgKawaii from "../../../assets/Imgs/cat.png";
import "./about.scss";
import "../../../style/global.css";
import ScrollAnimation from "../../utils/Scroll";

export default function AboutMe() {
  return (
<>
  <div className="rounded-t-3xl -mt-6 bg-colorPrimary h-6 shadow-card gradient"></div>
  <div className="bg-colorPrimary">
    <div className="rounded-t-3xl -mt-1 bg-colorSecondary p-4 md:p-12">
      <div className="container mx-auto">
        <div className="p-4 md:mt-14">
          <p className="text-white">
            <ScrollAnimation threshold={600}>
              <h1 className="text-2xl md:text-3xl mb-6 font-semibold text-center">
                ¡Hola! Soy{" "}
                <span className="text-colorTertiary font-bold">Emily</span>{" "}
                👩‍💻
              </h1>
              <div className="flex mt-2 md:mt-6 justify-center">
                <div className="w-8 h-0.5 md:w-16 h-1 rounded-full bg-colorComplementaryTwo inline-flex mb-4 md:mb-16"></div>
              </div>
              <p className="leading-relaxed pl-4 md:pl-20 pr-4 md:pr-20 sm:pb-4 text-center text-lg">
                Una desarrolladora de software con experiencia en la creación
                de diversos proyectos centrados en la mejora de la experiencia
                de usuario (UI/UX). He trabajado con una variedad de
                tecnologías y estilos de diseño para crear interfaces
                atractivas y funcionales. Mi objetivo principal es aplicar mis
                conocimientos en diferentes entornos laborales y contribuir al
                éxito de cada proyecto en el que participo.
              </p>
            </ScrollAnimation>
          </p>
        </div>
      </div>
    </div>
  </div>
</>

  );
}
