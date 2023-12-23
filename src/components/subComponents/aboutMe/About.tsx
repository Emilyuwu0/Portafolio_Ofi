import ImgKawaii from "../../../assets/Imgs/9193347.png";
import "./about.scss";
import "../../../style/global.css";
import ScrollAnimation from "../../utils/Scroll";

export default function AboutMe() {
  return (
    <>
  <div className="rounded-t-3xl  -mt-6 bg-colorPrimary  h-6 shadow-card"></div>

      <div className="bg-colorPrimary">
        <div className="rounded-t-3xl -mt-1 bg-colorSecondary p-12 ">
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center sm:mt-10 mt-2 sm:mb-10 mb-2">
              <div className="p-4">
                <p className="text-white"></p>
              </div>

              <div className="p-4">
                <p className="text-white">
                  <ScrollAnimation threshold={600}>
                    <h1 className="text-3xl mb-6 font-semibold sm:text-left text-center">
                      ¡Hola! Soy{" "}
                      <span className="text-colorTertiary font-bold">Emily</span>{" "}
                      👩‍💻
                    </h1>
                    <p className="leading-relaxed sm:pr-10 sm:pb-4 sm:text-left text-center">
                      Una desarrolladora de software con experiencia en la
                      creación de diversos proyectos centrados en la mejora de
                      la experiencia de usuario (UI/UX). He trabajado con una
                      variedad de tecnologías y estilos de diseño para crear
                      interfaces atractivas y funcionales. Mi objetivo principal
                      es aplicar mis conocimientos en diferentes entornos
                      laborales y contribuir al éxito de cada proyecto en el que
                      participo.
                    </p>
                  </ScrollAnimation>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
