import { useState, useEffect } from "react";
import "./slider.scss";

const Carousel = ({ items, autoplayInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, autoplayInterval);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, items.length, autoplayInterval]);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 1s",
        }}
      >
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
