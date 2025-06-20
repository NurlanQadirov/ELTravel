import React, { useEffect, useRef, useState } from 'react';
import { Camera } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryImages = [
    "/Galery.webp",
    "/Galery8.webp",
    "/Galery3.webp",
    "/Galery9.webp",
    "/Galery10.webp",
    "/Galery7.webp",
    "/Galery12.webp",
    "/Galery2.webp",
    "/Galery4.webp",
    "/Galery5.webp",
    "/Galery6.webp",
    "/Galery11.webp",

  ];

  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
          }
        });
      },
      { threshold: 0.1 }
    );

    imageRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      imageRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="gallery" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Qalereya</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Gözəl məkanlar və yaddaqalan anlar kolleksiyamızı kəşf edin.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group 
                opacity-0 translate-y-8 scale-95 
                transition-all duration-700 ease-out delay-${index * 100}`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={`${image}?auto=format&fit=crop&w=500&q=80`}
                alt={`Gallery ${index + 1}`}
                className="w-full h-40 sm:h-52 md:h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img src={selectedImage} alt="Selected" className="max-w-full max-h-[90vh] object-contain rounded-lg" />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute -top-2 -right-10 text-white text-5xl hover:text-gray-300"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
