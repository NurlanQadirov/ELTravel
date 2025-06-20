import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Star, ArrowRight, CheckCircle } from 'lucide-react';

// Animasiya variantları eyni qalır
const itemVariants = (fromLeft = true) => ({
  hidden: { x: fromLeft ? -50 : 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

const QubaTours = () => {
  // Yalnız Quba turunun məlumatları saxlanılıb
  const qubaTours = [
    {
      id: 3,
      title: "Quba Qəçrəş və Mestdergah",
      slug: "quba-qechresh-tour",
      location: "Quba, Azərbaycan",
      price: 69,
      duration: "1 gün",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1593361688555-53c52aba457c?w=800&h=600&fit=crop",
      category: "Təbiət Turu",
      description: "Qubanın sıx meşələri, sərin bulaqları və təmiz havası ilə ruhunuzu dincəldin. Qəçrəş meşəsi və Mestdergah şəlaləsi sizi gözləyir.",
      highlights: ["Komfortlu nəqliyyat", "Qəçrəş meşəsində gəzinti", "Mestdergah şəlaləsi", "Səhər yeməyi"]
    },
    // Gələcəkdə bura yeni Quba turları əlavə edə bilərsiniz
  ];

  return (
    <motion.div
      className="bg-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Quba Turları</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            Azərbaycanın şimal qapısı olan Qubanın sərin meşələrini və füsunkar təbiətini kəşf edin.
          </p>
        </motion.div>

        <div className="space-y-20">
          {qubaTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              variants={itemVariants(index % 2 === 0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Image Section */}
              <motion.div 
                className="w-full md:w-1/2"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="rounded-2xl shadow-2xl w-full h-full object-cover aspect-video"
                />
              </motion.div>

              {/* Content Section */}
              <div className="w-full md:w-1/2">
                <span className="inline-block bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold mb-3">{tour.category}</span>
                <h2 className="text-3xl font-bold text-white mb-4">{tour.title}</h2>
                <div className="flex items-center text-slate-400 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{tour.location}</span>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">{tour.description}</p>
                
                <div className="mb-6 space-y-2">
                  <h4 className="font-semibold text-white">Əsas özəllikləri:</h4>
                  {tour.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-3xl font-bold text-cyan-400">${tour.price}</span>
                    <span className="text-slate-400">/nəfər</span>
                  </div>
                  {/* Bu düymə gələcəkdə Quba turunun detallı səhifəsinə aparacaq */}
                  <Link to={`/tours/domestic/quba/${tour.slug}`}>
                    <button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2 whitespace-nowrap">
                      Ətraflı Bax <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default QubaTours;