import React from 'react';
import { Hotel, Users, Car } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Hotel className="text-blue-600" size={40} />,
      title: "Hotel Rezervasiyası",
      description: "Rahatlığınız üçün xüsusi seçilmiş lüks otellər.",
    },
    {
      icon: <Users className="text-blue-600" size={40} />,
      title: "Bələdçi Xidməti",
      description: "Peşəkar yerli bələdçilər ilə səyahətiniz daha mənalı olsun.",
    },
    {
      icon: <Car className="text-blue-600" size={40} />,
      title: "Nəqliyyat",
      description: "Rahat və etibarlı nəqliyyat ilə istədiyiniz ünvana çatın.",
    },
  ];

  return (
    <section id="our-services" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Bizim Xidmətlər</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Səyahətinizin qüsursuz və yaddaqalan olması üçün hərtərəfli xidmətlər təqdim edirik.
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
