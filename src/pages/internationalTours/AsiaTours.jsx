import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';

// Animasiya variantları (dəyişiklik yoxdur, eyni qalır)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// DƏYİŞİKLİK: Komponentin adı dəyişdirildi
const AsiaTours = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // DƏYİŞİKLİK: Məlumatlar Asiya turları ilə əvəz edildi
  const tours = [
    { id: 1, title: "Müasir Tokio və Ənənəvi Kioto", location: "Tokio & Kioto, Yaponiya", price: 1250, duration: "7 gün", rating: 4.9, image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=600&fit=crop", category: "cultural" },
    { id: 2, title: "Taylandın Ekzotik Çimərlikləri", location: "Phuket & Krabi, Tayland", price: 980, duration: "8 gün", rating: 4.8, image: "https://images.unsplash.com/photo-1540998145393-e2229b1a796b?w=800&h=600&fit=crop", category: "beach" },
    { id: 3, title: "Balinin Cənnət Adaları", location: "Bali, İndoneziya", price: 890, duration: "6 gün", rating: 4.7, image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop", category: "nature" },
    { id: 4, title: "Vyetnamın Ha Long Körfəzi", location: "Ha Long Bay, Vyetnam", price: 780, duration: "4 gün", rating: 4.8, image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&h=600&fit=crop", category: "adventure" },
    { id: 5, title: "Seulun Canlı Küçələri", location: "Seul, Cənubi Koreya", price: 1100, duration: "5 gün", rating: 4.7, image: "https://images.unsplash.com/photo-1583833008338-34a17937a726?w=800&h=600&fit=crop", category: "cultural" },
    { id: 6, title: "Sinqapur: Gələcəyin Şəhəri", location: "Sinqapur", price: 1150, duration: "4 gün", rating: 4.6, image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop", category: "adventure" }
  ];

  const categories = [
    { id: 'all', name: 'Hamısı' }, { id: 'cultural', name: 'Mədəni' }, { id: 'adventure', name: 'Macəra' }, { id: 'nature', name: 'Təbiət' }, { id: 'beach', name: 'Sahil' }
  ];

  const filteredTours = activeFilter === 'all' 
    ? tours 
    : tours.filter(tour => tour.category === activeFilter);

  return (
    <motion.div
      className="bg-slate-900 pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          {/* DƏYİŞİKLİK: Başlıq və mətn yeniləndi */}
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Asiya Turları</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            Qədim sivilizasiyaların və müasir texnologiyaların vəhdət təşkil etdiyi Asiyanın sirli dünyasına qapı açın.
          </p>
        </motion.div>

        {/* Qalan kodun hamısı əvvəlki komponentlərlə eynidir */}
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-colors duration-300 ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredTours.map((tour) => (
            <motion.div
              key={tour.id}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-700 flex flex-col group"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02, boxShadow: "0px 25px 30px -10px rgba(0, 0, 0, 0.2)" }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              <div className="relative overflow-hidden">
                <img src={tour.image} alt={tour.title} className="w-full h-56 object-cover" />
                <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  {tour.rating} <Star className="w-4 h-4" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-slate-400 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>{tour.location}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 flex-grow group-hover:text-cyan-400 transition-colors duration-300">
                  {tour.title}
                </h3>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-2xl font-bold text-cyan-400">${tour.price}</span>
                    <span className="text-slate-400">/nəfər</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Clock className="w-5 h-5 mr-2" />
                    <span className="font-medium">{tour.duration}</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-lg opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap">
                  Ətraflı <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AsiaTours;