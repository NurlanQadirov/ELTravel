import React, { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      options
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
};

const AnimatedSection = ({ children, animationType = 'fade-up' }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

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
