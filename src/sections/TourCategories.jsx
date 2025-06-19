import React from 'react';

const TourCategories = () => {
  const categories = [
    {
      title: "Daxili Turlar",
      image: "/daxiliTur.webp",
      description: "Azərbaycanın gizli incilərini daxili turlarımızla kəşf edin."
    },
    {
      title: "Xarici Turlar",
      image: "/xariciTur.webp",
      description: "Dünyanı kəşf edin."
    },
    {
      title: "Ov Turları",
      image: "/ovTurlari.webp",
      description: "Təbiətin qoynunda həyəcanverici ov macəraları yaşayın."
    }
  ];

  return (
    <section id="tour-categories" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Tur Kateqoriyaları</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Hər növ səyyah üçün nəzərdə tutulmuş müxtəlif tur paketlərimizdən seçin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Şəkil */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Başlıq (həmişə görünür) */}
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg font-serif italic tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Açıklama (hover zamanı görünür) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out text-white">
                <p className="text-sm leading-relaxed font-light tracking-wide">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourCategories;
