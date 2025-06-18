import React, { useEffect } from 'react';
import { Feather, Compass, Crosshair } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    title: "Quş Ovçuluğu",
    desc: "Xüsusi ərazilərdə təhlükəsiz və qanuni quş ovçuluğu təcrübəsi.",
    icon: <Feather className="w-8 h-8" />
  },
  {
    title: "Dağlıq Ov Turları",
    desc: "Macəra dolu dağlıq bölgələrdə peşəkar bələdçilərlə ov turları.",
    icon: <Compass className="w-8 h-8" />
  },
  {
    title: "Hedef Təlimləri",
    desc: "Yeni başlayanlar üçün hədəf alma, bacarıqlar və təlimlər.",
    icon: <Crosshair className="w-8 h-8" />
  }
];

const HuntingTour = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="text-white-900 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold mb-4">Ov Turları</h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-lg md:text-xl text-white-800 max-w-2xl mx-auto">
          Təhlükəsiz, qanuni və macəra dolu ovçuluq turlarını təbiətin dadını çıxarın.
          Sizə unudulmaz bir təcrübə təqdim edirik.
        </p>
      </div>

      <div className="mt-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Kartlar */}
          <div className="flex flex-col gap-6 col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {features.slice(0, 2).map((item, idx) => (
                <div
                  key={idx}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 150} // Buraya əlavə edildi
                  className="bg-white text-left text-blue-900 rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-start gap-4 transition-all duration-1000 ease-in-out group hover:bg-blue-700 hover:text-white h-full transform hover:scale-105 min-h-[230px]"
                >
                  <div className="text-blue-700 group-hover:text-white transition-all duration-1000 ease-in-out">
                    {React.cloneElement(item.icon, { className: 'w-8 h-8' })}
                  </div>
                  <div className="transition-all duration-1000 ease-in-out transform group-hover:-translate-y-1">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-700 group-hover:text-white">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Qısa Kart */}
            <div
              data-aos="zoom-in"
              data-aos-delay={features.slice(0, 2).length * 150} // Buraya da əlavə edildi (əvvəlki kartlardan sonra görünsün)
              className="bg-white text-left text-blue-900 rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-start gap-3 transition-all duration-1000 ease-in-out group hover:bg-blue-700 hover:text-white transform hover:scale-105 min-h-[130px]"
            >
              <div className="text-blue-700 group-hover:text-white transition-all duration-1000 ease-in-out">
                {React.cloneElement(features[2].icon, { className: 'w-8 h-8' })}
              </div>
              <div className="transition-all duration-1000 ease-in-out transform group-hover:-translate-y-1">
                <h3 className="text-lg font-semibold mb-1">{features[2].title}</h3>
                <p className="text-sm text-gray-700 group-hover:text-white">
                  {features[2].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Şəkil */}
          <div className="hidden md:block self-stretch max-h-[400px]" data-aos="zoom-in" data-aos-delay={(features.slice(0, 2).length + 1) * 150}> {/* Şəkilə də delay əlavə edildi */}
            <img
              src="/hunter.jpg"
              alt="Hunter"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      {/* Info bölməsi - Yazı və Şəkil */}
      <div className="mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Şəkil solda */}
        <div data-aos="fade-right">
          <img
            src="/hunter2.jpg"
            alt="Ov haqqında"
            className="rounded-xl shadow-lg w-full object-cover max-h-[500px]"
          />
        </div>

        {/* Yazı sağda */}
        <div data-aos="fade-left" className="text-left text-white-900 space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold">Ovçuluq Xidmətlərimiz</h3>
          <p className="text-lg text-white-800">
            Təcrübəli bələdçilərimizlə təhlükəsiz və peşəkar ovçuluq turları təşkil edirik. Hər bir marşrut xüsusi seçilmiş ərazilərdə, ekosistemə zərər vermədən planlaşdırılır.

            Ənənəvi ovçuluq ruhunu müasir üsullarla birləşdirərək, həm yeni başlayanlara, həm də təcrübəli iştirakçılara unudulmaz təcrübə vəd edirik.
          </p>
          <button className="mt-4 bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition duration-500">
            Ətraflı məlumat
          </button>
        </div>
      </div>

      {/* Əlaqə düyməsi */}
      <div className="text-center mt-12" data-aos="fade-up">
        <button className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition duration-500">
          Bizimlə əlaqə saxlayın
        </button>
      </div>
    </section>
  );
};

export default HuntingTour;