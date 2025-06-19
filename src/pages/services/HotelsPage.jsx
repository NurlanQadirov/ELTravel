// HotelsPage.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HotelsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <h1 data-aos="fade-up" className="text-4xl font-bold text-white-800 mb-8">Hotel Booking</h1>
      
      <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-white-600 mb-6 leading-relaxed">
        Azərbaycanda və xaricdə rahat və keyfiyyətli otellərin bronlaşdırılmasını təmin edirik. 
        Bütün büdcələrə uyğun təkliflərimizlə səyahətinizi daha komfortlu edirik.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Otel kartları */}
      <div
  data-aos="zoom-in"
  className="group relative overflow-hidden rounded-3xl shadow-xl bg-white hover:bg-blue-50 transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
>
  <div className="relative w-full h-56 overflow-hidden">
    <img
      src="/hotel1.webp"
      alt="Hotel 1"
      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
    />
    {/* Blur overlay (optional) */}
    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500"></div>
  </div>

  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
      Hilton Baku
    </h3>
    <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-800 transition-colors duration-300">
      Şəhər mərkəzində yerləşən lüks otel. SPA, restoran və dəniz mənzərəsi ilə seçilir.
    </p>
  </div>
</div>
<div
  data-aos="zoom-in"
  className="group relative overflow-hidden rounded-3xl shadow-xl bg-white hover:bg-blue-50 transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
>
  <div className="relative w-full h-56 overflow-hidden">
    <img
      src="/hotel2.webp"
      alt="Hotel 2"
      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
    />
    {/* Blur overlay (optional) */}
    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500"></div>
  </div>

  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
      Hilton Baku
    </h3>
    <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-800 transition-colors duration-300">
      Şəhər mərkəzində yerləşən lüks otel. SPA, restoran və dəniz mənzərəsi ilə seçilir.
    </p>
  </div>
</div>


       <div
  data-aos="zoom-in"
  className="group relative overflow-hidden rounded-3xl shadow-xl bg-white hover:bg-blue-50 transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
>
  <div className="relative w-full h-56 overflow-hidden">
    <img
      src="/hotel3.webp"
      alt="Hotel 3"
      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
    />
    {/* Blur overlay (optional) */}
    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500"></div>
  </div>

  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
      Hilton Baku
    </h3>
    <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-800 transition-colors duration-300">
      Şəhər mərkəzində yerləşən lüks otel. SPA, restoran və dəniz mənzərəsi ilə seçilir.
    </p>
  </div>
</div>

      </div>
    </section>
  );
};

export default HotelsPage;
