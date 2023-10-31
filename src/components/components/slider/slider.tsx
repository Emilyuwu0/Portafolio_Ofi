import { useState, useEffect } from "react";
import "./slider.scss";

const slides = [
  "https://i.pinimg.com/564x/bd/ab/cd/bdabcd6ed70d821372720cf5a2d0afe1.jpg",
  "https://i.pinimg.com/564x/bd/ab/cd/bdabcd6ed70d821372720cf5a2d0afe1.jpg",
  "https://i.pinimg.com/564x/bd/ab/cd/bdabcd6ed70d821372720cf5a2d0afe1.jpg",
  "https://i.pinimg.com/564x/bd/ab/cd/bdabcd6ed70d821372720cf5a2d0afe1.jpg",
];
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, 3000); // Cambia cada 3 segundos

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="carousel">
      {slides.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
}

export default Carousel;
