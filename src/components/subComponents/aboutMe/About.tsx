export default function AboutMe() {
  return (
    <div className="sm:mt-60 mt-20 text-black ">
      <div className="grid grid-cols-2 auto-cols-max">
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Circle-icons-image.svg/1200px-Circle-icons-image.svg.png" />
        </div>
        <div className="p-40">
          {" "}
          <h1 className="text-2xl mb-6 font-semibold">Sobre Mí</h1>
          <p>
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
    </div>
  );
}
