import React from 'react';

const AboutSection = () => (
  <section id="about-us" className="py-16 md:py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Sol tərəf - yazı */}
        <div className="transform transition-all duration-1000 ease-out translate-y-6 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Şirkət Adı Haqqında</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Azərbaycanda və onun hüdudlarından kənarda müstəsna səyahət təcrübələri üçün əsas ünvanınız olan şirkətimizə xoş gəlmisiniz. 
            Turizm sənayesində uzun illər təcrübəmizlə biz ölkəmizin gözəlliyini, mədəniyyətini və macərasını nümayiş etdirən unudulmaz səyahətlər yaratmaqda ixtisaslaşmışıq.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Bakının qədim küçələrindən tutmuş Qafqaz dağlarının saf mənzərələrinə qədər hər bir səyahətçinin arzusuna uyğun fərdi turlar təklif edirik.
          </p>
        </div>

        {/* Sağ tərəf - şəkil */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl transform transition duration-1000 ease-out opacity-0 animate-fade-in-zoom">
          <img
            src="/Turizm.jpg"
            alt="About Us"
            className="rounded-2xl w-full h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
