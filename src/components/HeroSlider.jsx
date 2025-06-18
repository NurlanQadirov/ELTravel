import React, { useState, useEffect } from "react";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateSlide, setAnimateSlide] = useState(false); // Slaydın aktivləşməsini izləyən yeni state
  const [animateText, setAnimateText] = useState(false); // Mətn animasiyasını idarə edən state

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
    },
  ];

  // currentSlide dəyişəndə animasiyanı tətiklə
  useEffect(() => {
    // Slayd dəyişəndə əvvəlcə bütün animasiyaları sıfırla
    setAnimateText(false);
    setAnimateSlide(false);

    // Qısa bir gecikmədən sonra animasiyaları aktivləşdir
    // Bu, React-in DOM-u yeniləməsinə və keçidin başlamasına imkan verir.
    const animationDelay = setTimeout(() => {
      setAnimateSlide(true);
      setAnimateText(true);
    }, 50); // Minimum gecikmə, əgər işləməsə artırın (məsələn 100ms)

    return () => clearTimeout(animationDelay);
  }, [currentSlide]); // currentSlide dəyişdikdə bu useEffect işə düşür

  // Slider avtomatik dəyişsin
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      // currentSlide dəyişdiyi üçün yuxarıdakı useEffect işə düşəcək və animasiyaları idarə edəcək.
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background image */}
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-in-out ${
                isActive && animateSlide ? "scale-105" : "scale-100" // animateSlide istifadə edirik
              }`}
              draggable={false}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            {/* Texts */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6 max-w-4xl">
                <h1
                  className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ease-in-out ${
                    isActive && animateText // animateText istifadə edirik
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-lg md:text-2xl transition-all duration-1000 ease-in-out delay-200 ${
                    isActive && animateText // animateText istifadə edirik
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeroSlider;