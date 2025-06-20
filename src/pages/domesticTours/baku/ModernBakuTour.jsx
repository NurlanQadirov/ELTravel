import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, ArrowRight, CheckCircle, XCircle, Users, Languages, ChevronDown } from 'lucide-react';

// Akkordion komponenti (eyni qalır)
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-700">
      <button
        onClick={() => setIsOpen(!is0pen)}
        className="flex justify-between items-center w-full py-5 text-left text-lg font-semibold text-white transition-colors hover:text-cyan-400"
      >
        <span>{title}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="pb-5 pr-10 text-slate-300 leading-relaxed">{children}</div>
      </motion.div>
    </div>
  );
};

// YENİ KOMPONENT: ModernBakuTour
const ModernBakuTour = () => {
  return (
    <motion.div
      className="bg-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589518413310-47b5675e4b97?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Müasir Bakı və Memarlıq Turu</h1>
          <p className="mt-4 text-xl text-slate-200">Paytaxtın futuristik siması ilə tanışlıq</p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Info Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 p-6 bg-slate-800 rounded-2xl border border-slate-700 text-center">
          <div className="text-white"><Clock className="mx-auto w-8 h-8 mb-2 text-cyan-400" /> <span className="font-semibold">4-5 saat</span></div>
          <div className="text-white"><Users className="mx-auto w-8 h-8 mb-2 text-cyan-400" /> <span className="font-semibold">Kiçik Qruplar</span></div>
          <div className="text-white"><Languages className="mx-auto w-8 h-8 mb-2 text-cyan-400" /> <span className="font-semibold">AZ, EN, RU</span></div>
          <div className="text-white"><Star className="mx-auto w-8 h-8 mb-2 text-cyan-400" /> <span className="font-semibold">Yüksək Reytinq</span></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column - Details */}
          <div className="w-full lg:w-2/3">
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
              <h2 className="text-3xl font-bold text-white mb-4">Tur Haqqında</h2>
              <p className="text-slate-300 leading-relaxed">
                Bu tur sizi İçərişəhərin qədim divarlarından kənara çıxararaq, Bakının XXI əsrdəki inkişafını və futuristik memarlığını nümayiş etdirir. Dünya şöhrətli memar Zaha Hadidin şah əsəri olan Heydər Əliyev Mərkəzinin ecazkar dizaynından tutmuş, şəhərin yeni simvolu olan Alov Qüllələrinə qədər müasir Bakının nəbzini hiss edəcəksiniz. Dənizkənarı Milli Parkda gəzinti və Xalça Muzeyinin unikal binası ilə tanışlıq da turumuza daxildir.
              </p>
            </motion.div>
            
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Tur Proqramı</h3>
                <div className="space-y-2">
                    <AccordionItem title="10:00 - Görüş və Heydər Əliyev Mərkəzi">
                        Müasir memarlığın incisi olan Heydər Əliyev Mərkəzinin qarşısında görüş. Binanın xarici görünüşü ilə tanışlıq və fotosessiya.
                    </AccordionItem>
                    <AccordionItem title="11:30 - Dağüstü Park və Alov Qüllələri">
                        Bakının ən hündür nöqtəsindən şəhərə və Xəzər dənizinə açılan möhtəşəm mənzərə. Alov Qüllələrinin yaxından görünüşü.
                    </AccordionItem>
                    <AccordionItem title="12:30 - Xalça Muzeyi və Dənizkənarı Park">
                        Bükülmüş xalçanı xatırladan unikal binası ilə Xalça Muzeyi ilə tanışlıq (xaricdən) və Dənizkənarı Milli Parkda gəzinti.
                    </AccordionItem>
                     <AccordionItem title="13:30 - Nahar Fasiləsi (Əlavə Ödənişlə)">
                        Müasir Bakının mərkəzində yerləşən restoranlardan birində nahar etmək imkanı.
                    </AccordionItem>
                    <AccordionItem title="14:30 - Nizami Küçəsi (Torqovı) və Turun Sonu">
                        Bakının ən məşhur ticarət küçəsində sərbəst gəzinti və turun yekunlaşması.
                    </AccordionItem>
                </div>
            </motion.div>

            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-6">Qiymətə Daxildir / Daxil Deyil</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                      <h4 className="font-semibold text-lg text-cyan-400 mb-4">Daxildir:</h4>
                      <ul className="space-y-3">
                          <li className="flex items-center text-slate-300"><CheckCircle className="w-5 h-5 mr-3 text-green-500" />Peşəkar bələdçi xidməti</li>
                          <li className="flex items-center text-slate-300"><CheckCircle className="w-5 h-5 mr-3 text-green-500" />Komfortlu nəqliyyat (tur boyunca)</li>
                          <li className="flex items-center text-slate-300"><CheckCircle className="w-5 h-5 mr-3 text-green-500" />Bir şüşə su</li>
                      </ul>
                  </div>
                   <div>
                      <h4 className="font-semibold text-lg text-red-500 mb-4">Daxil Deyil:</h4>
                      <ul className="space-y-3">
                          <li className="flex items-center text-slate-300"><XCircle className="w-5 h-5 mr-3 text-red-500" />Muzeylərə giriş biletləri</li>
                          <li className="flex items-center text-slate-300"><XCircle className="w-5 h-5 mr-3 text-red-500" />Nahar yeməyi</li>
                          <li className="flex items-center text-slate-300"><XCircle className="w-5 h-5 mr-3 text-red-500" />Şəxsi xərclər</li>
                      </ul>
                  </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column - Booking Card */}
          <div className="w-full lg:w-1/3">
            <motion.div 
                initial={{ y: 20, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                viewport={{ once: true, amount: 0.8 }} 
                transition={{ duration: 0.7 }} 
                className="bg-slate-800 p-8 rounded-2xl border border-slate-700 sticky top-24"
            >
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-cyan-400">$55</span>
                <span className="text-slate-400 ml-2">/nəfər</span>
              </div>
              <p className="text-center text-slate-300 mb-6">Müasir Bakının möcüzələri ilə tanış olmaq şansını qaçırmayın!</p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2 text-lg">
                İndi Rezerv Et <ArrowRight className="w-5 h-5" />
              </button>
               <div className="mt-6 text-center text-sm text-slate-400">
                    Sualınız var? <a href="tel:+994123456789" className="text-cyan-400 hover:underline">Bizimlə əlaqə saxlayın</a>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ModernBakuTour;