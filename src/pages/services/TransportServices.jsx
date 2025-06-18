import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Bus, MapPinned, Car, CalendarCheck, PhoneCall } from 'lucide-react';

const transportOptions = [
  {
    title: "Şəxsi Transfer",
    icon: <Bus className="w-10 h-10" />,
    description: "Fərdi və qrup transferləri üçün rahat və təhlükəsiz nəqliyyat vasitələri."
  },
  {
    title: "VIP Avtomobillər",
    icon: <Car className="w-10 h-10" />,
    description: "Lüks avtomobillərlə xüsusi qonaqlar üçün yüksək səviyyəli xidmət."
  },
  {
    title: "Şəhər Daxili Turlar",
    icon: <MapPinned className="w-10 h-10" />,
    description: "Bakı və ətraf ərazilərdə komfortlu turlar üçün nəqliyyat təminatı."
  }
];

const extraSteps = [
  {
    title: "Rezervasiya Asanlığı",
    icon: <CalendarCheck className="w-10 h-10 text-blue-600 group-hover:text-white transition duration-500" />,
    description: "Sadə və sürətli rezervasiya prosesi ilə vaxtınıza qənaət edin."
  },
  {
    title: "24/7 Dəstək",
    icon: <PhoneCall className="w-10 h-10 text-blue-600 group-hover:text-white transition duration-500" />,
    description: "İstənilən vaxt bizimlə əlaqə saxlayaraq dəstək ala bilərsiniz."
  }
];

const TransportServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <h1 data-aos="fade-up" className="text-4xl font-bold text-white-900 mb-4 text-center">
        Transport Xidmətləri
      </h1>
      <p data-aos="fade-up" data-aos-delay="100" className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Rahat və təhlükəsiz nəqliyyat seçimlərimizlə səyahətinizi daha komfortlu edin. Hər bir müştəriyə uyğun fərqli nəqliyyat xidmətləri təklif edirik.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {transportOptions.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="relative bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer transform transition-transform duration-500 hover:scale-105"
            style={{ height: "300px" }}
          >
            {/* MƏRKƏZƏ YERLƏŞDİRİLMİŞ MƏTN VƏ İKONLAR */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-5 text-center transition-all duration-700">
              <div className="text-blue-600 group-hover:text-white transition-all duration-700 mb-2 transform group-hover:-translate-y-3 group-hover:opacity-100 opacity-100">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white transition-all duration-700 transform group-hover:-translate-y-3 group-hover:opacity-100 opacity-100">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-white transition-all duration-700 transform group-hover:-translate-y-3 group-hover:opacity-100 opacity-100 mt-2">
                {item.description}
              </p>
            </div>

            {/* Şəkil və fon */}
            <div
              className="w-full h-full bg-cover bg-center group-hover:brightness-75 transition duration-500"
              style={{ backgroundImage: 'url(/transport.jpg)' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

      <div className="mt-24" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-white-900 mb-6 text-center">Xidmət Prosesi</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {extraSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-xl text-center group transition duration-700 ease-in-out hover:bg-blue-600"
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-white">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-white">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-20" data-aos="fade-up" data-aos-delay="100">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg transition">
          Transport üçün bizimlə əlaqə saxlayın
        </button>
      </div>
    </section>
  );
};

export default TransportServices;
