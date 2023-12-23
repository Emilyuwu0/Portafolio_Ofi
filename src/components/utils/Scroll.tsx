import  { useEffect, useState } from 'react';
import './index.scss';

const ScrollAnimation = ({ children, threshold = 200 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasScrolled = localStorage.getItem('hasScrolled');
    
    if (!hasScrolled) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsVisible(scrollY > threshold);
        
        if (scrollY > threshold) {
          localStorage.setItem('hasScrolled', 'true');
          window.removeEventListener('scroll', handleScroll);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setIsVisible(true);
    }
  }, [threshold]);

  return (
    <div className={`transition-transform transform ${isVisible ? 'animated-fadeInDown' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
