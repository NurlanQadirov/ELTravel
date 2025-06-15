import React, { useState } from 'react';
import { Camera } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryImages = [
    "/public/Galery.jpg",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    "/public/Galery3.jpg",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    "/public/Galery2.jpg"
  ];

  return (
    <section id="gallery" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Qalereya</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Gözəl məkanlar və yaddaqalan anlar kolleksiyamızı kəşf edin.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl cursor-pointer group" onClick={() => setSelectedImage(image)}>
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
