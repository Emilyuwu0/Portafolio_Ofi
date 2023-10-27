import { useState, useEffect } from "react";
import "./slider.scss";

const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cambiar automáticamente al siguiente slide
      setActiveIndex((activeIndex + 1) % slides.length);
    }, 3000); // Cambiar cada 3 segundos

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleSlideChange(index)}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
