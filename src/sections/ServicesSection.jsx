import React from 'react';
import { Hotel, Users, Car, Compass, Camera, Plane } from 'lucide-react';

const ServicesSection = () => {
  const services = [
  {
    icon: Hotel,
    title: "Hotel Rezervasiyası",
    description: "Rahatlığınız üçün xüsusi seçilmiş lüks otellər.",
  },
  {
    icon: Users,
    title: "Bələdçi Xidməti",
    description: "Peşəkar yerli bələdçilər ilə səyahətiniz daha mənalı olsun.",
  },
  {
    icon: Car,
    title: "Nəqliyyat",
    description: "Rahat və etibarlı nəqliyyat ilə istədiyiniz ünvana çatın.",
  },
  {
    icon: Compass,
    title: "Turların Planlaşdırılması",
    description: "İstəyinizə uyğun fərdi marşrutlarla səyahətinizi təşkil edirik.",
  },
  {
    icon: Camera,
    title: "Fotoqrafiya Turları",
    description: "Unudulmaz anlarınızı peşəkar çəkimlərlə əbədiləşdirin.",
  },
  {
    icon: Plane,
    title: "Aviabilet Satışı",
    description: "Ən sərfəli qiymətlərlə uçuş biletlərini sifariş edin.",
  }
];



 return (
  <section id="our-services" className="py-16 md:py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Bizim Xidmətlər
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Səyahətinizin qüsursuz və yaddaqalan olması üçün hərtərəfli xidmətlər təqdim edirik.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
       {services.map((service, index) => {
  const Icon = service.icon; // ikon komponenti burda saxlanır
  return (
    <div
      key={index}
      className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 hover:bg-blue-600 hover:scale-[1.02]"
    >
      <div className="mb-6">
        <Icon className="text-blue-600 group-hover:text-white transition-colors duration-500" size={40} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white mb-4 transition-colors duration-500">
        {service.title}
      </h3>
      <p className="text-gray-600 group-hover:text-blue-100 leading-relaxed transition-colors duration-500">
        {service.description}
      </p>
    </div>
  );
})}

      </div>
    </div>
  </section>
);

};

export default ServicesSection;
