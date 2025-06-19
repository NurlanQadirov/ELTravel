import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VillaAndCottages = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const villas = [
    {
      title: "Qəbələ Dağ Villası",
      description: "Təbiət qoynunda yerləşən bu geniş villa ailəvi istirahət üçün ideal seçimdir. Özəl hovuz, dağ mənzərəsi və sakitlik burada sizi gözləyir.",
      image: "/villa1.webp",
    },
    {
      title: "Şəki Bağ Evi",
      description: "Tarixi memarlıq və müasir rahatlığın birləşdiyi bu bağ evi, şəhərdən uzaqlaşmaq və təbiətin səsində dincəlmək üçün əla məkandır.",
      image: "/villa2.webp",
    },
    {
      title: "İsmayıllı Eco-Cottage",
      description: "Tamamilə təbii materiallardan inşa olunmuş, ağaclarla əhatələnmiş bu kottec ekoturizm sevənlər üçün nəzərdə tutulub.",
      image: "/villa3.webp",
    },
  ];

  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <h1 data-aos="fade-up" className="text-4xl font-bold text-white-800 mb-12 text-center">
        Villa and Cottages
      </h1>

      <div className="space-y-20">
        {villas.map((villa, index) => {
          const isMiddle = index === 1;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                isMiddle ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Şəkil */}
              <div
                className="relative group w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg"
                data-aos={isMiddle ? 'fade-left' : 'fade-right'}
              >
                <img
                  src={villa.image}
                  alt={villa.title}
                  className="w-full h-80 md:h-96 object-cover transform group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-700" />
                <button className="absolute bottom-5 right-5 bg-white text-gray-800 px-5 py-2 rounded-full text-sm font-semibold shadow-md opacity-0 group-hover:opacity-100 transition duration-500">
                  Ətraflı bax
                </button>
              </div>

              {/* Yazı */}
              <div
                className="w-full md:w-1/2"
                data-aos={isMiddle ? 'fade-right' : 'fade-left'}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white-800 mb-4">
                  {villa.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {villa.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VillaAndCottages;
