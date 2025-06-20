// AnimatedSection.jsx

import React, { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // DƏYİŞİKLİK: Komponentin görünmə vəziyyətini dinamik olaraq təyin edirik.
        // Ekrana daxil olanda 'true', çıxanda 'false' olur.
        setIntersecting(entry.isIntersecting);
      },
      options
    );

    // DƏYİŞİKLİK: 'observer.disconnect()' sətri silindiyi üçün izləyici artıq dayanmır.

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // Komponent yox olduqda izləyicini təmizləyirik.
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
};

const AnimatedSection = ({ children, animationType = 'fade-up' }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  // Sizin bu funksiyanız olduğu kimi mükəmməl işləyir, dəyişikliyə ehtiyac yoxdur.
  const getAnimationClasses = () => {
    const baseClass = 'transition-all duration-1000';
    let animationClass;
    switch (animationType) {
      case 'fade-up':
        animationClass = isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
        break;
      case 'fade-in':
        animationClass = isIntersecting ? 'opacity-100' : 'opacity-0';
        break;
      case 'slide-left':
        animationClass = isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10';
        break;
      case 'slide-right':
        animationClass = isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10';
        break;
      case 'zoom-in':
        animationClass = isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-90';
        break;
      default:
        animationClass = isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
    }
    return `${baseClass} ${animationClass}`;
  };

  return (
    <div ref={ref} className={getAnimationClasses()}>
      {children}
    </div>
  );
};

export default AnimatedSection;