import React from 'react';

const TourCategories = () => {
  const categories = [
    {
      title: "Daxili Turlar",
      image: "/daxiliTur.jpg",
      description: "Azərbaycanın gizli incilərini daxili turlarımızla kəşf edin."
    },
    {
      title: "Xarici Turlar",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Beynəlxalq paketlərimizlə dünyanı kəşf edin."
    },
    {
      title: "Ov Turları",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Təbiətin qoynunda həyəcanverici ov macəraları yaşayın."
    }
  ];

  return (
    <section id="tour-categories" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tur Kateqoriyaları</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Hər növ səyyah üçün nəzərdə tutulmuş müxtəlif tur paketlərimizdən seçin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-700 ease-in-out transform hover:-translate-y-1"
            >
              {/* Şəkil */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-80 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-700" />

              {/* Başlıq (Həmişə görünür) */}
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">{category.title}</h3>
              </div>

              {/* Açıklama (Hover zamanı görünür) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out bg-black/70 text-white">
                <p className="text-sm leading-relaxed">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourCategories;
