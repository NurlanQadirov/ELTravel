import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/Baku.jpg",
      title: "Möhtəşəm Azərbaycanı Kəşf Edin",
      subtitle: "Odlar Yurdunun Qədim Gözəllikləri",
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Dünyanı Kəşf Edin",
      subtitle: "Unudulmaz Beynəlxalq Səyahətlər",
    },
    {
      image: "/Baku2.jpg",
      title: "Azərbaycanın Parlayan İncisi",
      subtitle: "Bakının Müasir Memarlıq Möcüzəsi",
    },
    {
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      title: "Macəra Gözləyir",
      subtitle: "Ov Turları və Açıq Hava Təcrübələri",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Şəkil fon animasiyası */}
          <img
            src={slide.image}
            alt={slide.title}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-[6000ms] ease-in-out ${
              index === currentSlide ? 'scale-105' : 'scale-100'
            }`}
            draggable={false}
          />

          {/* Qara overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40" />

          {/* Mətnlər */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-6 max-w-4xl">
              <h1
                className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ease-out
                  ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
              >
                {slide.title}
              </h1>
              <p
                className={`text-lg md:text-xl lg:text-2xl transition-all duration-1000 ease-out delay-200
                  ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
              >
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
