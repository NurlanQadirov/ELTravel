import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Users, Globe, BadgeCheck, Map } from 'lucide-react';

const guides = [
  {
    name: "Elvin Quliyev",
    image: "/guide1.webp",
    languages: ["Azərbaycan dili", "İngilis dili", "Rus dili"],
    experience: "5 il təcrübə",
    specialty: "Tarixi və şəhər turları üzrə ixtisaslaşmışdır.",
  },
  {
    name: "Aytac Məmmədova",
    image: "/guide2.webp",
    languages: ["Azərbaycan dili", "İngilis dili", "Ərəb dili"],
    experience: "3 il təcrübə",
    specialty: "Dağ və təbiət turları üzrə bələdçi.",
  },
  {
    name: "Rauf Əliyev",
    image: "/guide3.webp",
    languages: ["Azərbaycan dili", "Fransız dili", "İngilis dili"],
    experience: "6 il təcrübə",
    specialty: "Mədəniyyət və muzey turları üzrə təlim keçmişdir.",
  },
];

const GuideServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <h1 data-aos="fade-up" className="text-4xl font-bold text-white-900 mb-4 text-center">
        Bələdçi Xidmətləri
      </h1>
      <p data-aos="fade-up" data-aos-delay="100" className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Təcrübəli bələdçilərimizlə unudulmaz səyahət təcrübəsi yaşayın. Hər biri öz sahəsində peşəkar olan komandamız sizin üçün ən yaxşı tur təcrübəsini təmin edir.
      </p>

      {/* Bələdçi Kartları */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {guides.map((guide, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="relative bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer transform transition-transform duration-500 ease-in-out hover:scale-105"
            style={{ height: "400px" }}
          >
            <img
              src={guide.image}
              alt={guide.name}
              className="w-full h-full object-cover object-center transition duration-500 group-hover:brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/60 to-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out flex items-end">
              <div className="text-white w-full p-5 space-y-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Users className="w-5 h-5 text-white" /> {guide.name}
                </h3>
                <p className="text-sm flex items-center gap-2">
                  <Globe className="w-4 h-4 text-white" />
                  <span><strong>Dillər:</strong> {guide.languages.join(', ')}</span>
                </p>
                <p className="text-sm flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-white" /> {guide.specialty}
                </p>
                <span className="inline-block mt-2 text-xs bg-blue-600 px-3 py-1 rounded-full shadow">
                  {guide.experience}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Servis prosesi */}
      <div className="mt-24" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-white-900 mb-6 text-center">Bələdçi Xidmət Prosesi</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md p-6 rounded-xl text-center group transition duration-700 ease-in-out hover:bg-blue-600">
            <Map className="w-10 h-10 mx-auto mb-4 text-blue-600 group-hover:text-white transition duration-700 ease-in-out" />
            <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-white">Tura uyğun bələdçi seçimi</h3>
            <p className="text-sm text-gray-600 group-hover:text-white">
              Səyahət növünüzə uyğun (şəhər, təbiət, mədəniyyət) ixtisaslaşmış bələdçi təyin olunur.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl text-center group transition duration-700 ease-in-out hover:bg-blue-600">
            <Users className="w-10 h-10 mx-auto mb-4 text-blue-600 group-hover:text-white transition duration-700 ease-in-out" />
            <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-white">Hazırlıq və marşrut planlaması</h3>
            <p className="text-sm text-gray-600 group-hover:text-white">
              Bələdçi öncədən sizə uyğun marşrut hazırlayır, görüş və dayanacaqları planlayır.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl text-center group transition duration-700 ease-in-out hover:bg-blue-600">
            <BadgeCheck className="w-10 h-10 mx-auto mb-4 text-blue-600 group-hover:text-white transition duration-700 ease-in-out" />
            <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-white">Peşəkar müşayiət</h3>
            <p className="text-sm text-gray-600 group-hover:text-white">
              Tur zamanı bələdçi sizi tam müşayiət edir, maraqlı məlumatlar paylaşır və yardım göstərir.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-20" data-aos="fade-up" data-aos-delay="100">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg transition">
          Bələdçi ilə əlaqə saxla
        </button>
      </div>
    </section>
  );
};

export default GuideServices;
