import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about-us" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hissə 1: Şirkət Haqqında */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">Şirkət Haqqında</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Azərbaycanda və onun hüdudlarından kənarda müstəsna səyahət təcrübələri üçün əsas ünvanınız olan şirkətimizə xoş gəlmisiniz.
              Turizm sənayesində uzun illər təcrübəmizlə biz ölkəmizin gözəlliyini, mədəniyyətini və macərasını nümayiş etdirən unudulmaz səyahətlər yaratmaqda ixtisaslaşmışıq.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Bakının qədim küçələrindən tutmuş Qafqaz dağlarının saf mənzərələrinə qədər hər bir səyahətçinin arzusuna uyğun fərdi turlar təklif edirik.
            </p>
          </div>

          <div data-aos="fade-left" className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/Turizm.webp"
              alt="About Us"
              className="rounded-2xl w-full h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Hissə 2: Niyə bizi seçməlisiniz (şəkil solda) */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          
          {/* Şəkil solda */}
          <div data-aos="fade-right" className="relative overflow-hidden rounded-2xl shadow-xl order-1 md:order-none">
            <img
              src="/plane.webp" // istədiyin şəkli bu adla qoy, ya da dəyiş
              alt="Niyə bizi seçməlisiniz?"
              className="rounded-2xl w-full h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Yazı sağda */}
          <div data-aos="fade-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">Niyə Bizi Seçməlisiniz?</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Müştəri məmnuniyyəti bizim üçün əsas prioritetdir. Hər bir turumuz xüsusi hazırlanır və fərdi ehtiyaclara uyğunlaşdırılır.
              Təcrübəli komandamız sizin rahatlığınız və təhlükəsizliyiniz üçün hər şeyi nəzərə alır.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Əgər siz də unudulmaz bir səyahət təcrübəsi yaşamaq istəyirsinizsə, EL Travel sizin üçün doğru seçimdir.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
