import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Hero Slider Component
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const slides = [
    {
      image: "/Baku.jpg",
      title: "Möhtəşəm Azərbaycanı Kəşf Edin",
      subtitle: "Odlar Yurdunun Qədim Gözəllikləri",
      path: "/discover-azerbaijan"
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Dünyanı Kəşf Edin",
      subtitle: "Unudulmaz Beynəlxalq Səyahətlər",
      path: "/explore-world"
    },
     {
    image: "/Baku2.jpg",
    title: "Alov Qüllələrinin Möhtəşəmliyi",
    subtitle: "Bakının Müasir Memarlıq Möcüzəsi",
    path: "/flame-towers-baku"
  },
    {
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      title: "Macəra Gözləyir",
      subtitle: "Ov Turları və Açıq Hava Təcrübələri",
      path: "/hunting-tours"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);
  
  const handleSlideClick = (path) => {
    navigate(path);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 cursor-pointer ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => handleSlideClick(slide.path)}
        >
       <img src={slide.image} alt={slide.title} className="absolute top-0 left-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-6 max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl animate-fade-in-up-delay">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default HeroSlider;