import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';

// Animasiya variantları
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

const TurkeyTours = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const tours = [
    { id: 1, title: "İstanbul Klassik Turu", location: "İstanbul, Türkiyə", price: 450, duration: "4 gün", rating: 4.8, image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop", category: "cultural" },
    { id: 2, title: "Kapadokya Balon Turu", location: "Kapadokya, Nevşehir", price: 650, duration: "3 gün", rating: 4.9, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", category: "adventure" },
    { id: 3, title: "Pamukkale Termal Turu", location: "Pamukkale, Denizli", price: 380, duration: "2 gün", rating: 4.7, image: "https://images.unsplash.com/photo-1643662979055-b0fe55b67c78?w=800&h=600&fit=crop", category: "nature" },
    { id: 4, title: "Antalya Sahil Turu", location: "Antalya, Türkiyə", price: 520, duration: "5 gün", rating: 4.6, image: "https://images.unsplash.com/photo-1570036754470-2dfb1b1e334b?w=800&h=600&fit=crop", category: "beach" },
    { id: 5, title: "Trabzon Yaylalar Turu", location: "Trabzon, Rize", price: 420, duration: "4 gün", rating: 4.5, image: "https://images.unsplash.com/photo-1676311919537-7c2e853c0263?w=800&h=600&fit=crop", category: "nature" },
    { id: 6, title: "Efes Antik Şəhər Turu", location: "İzmir, Selçuk", price: 350, duration: "3 gün", rating: 4.8, image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800&h=600&fit=crop", category: "cultural" }
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
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Türkiyə Turları</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            Zəngin tarixə və füsunkar təbiətə malik Türkiyənin ən gözəl guşələrinə səyahət edin.
          </p>
        </motion.div>

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
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-56 object-cover"
                />
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

export default TurkeyTours;