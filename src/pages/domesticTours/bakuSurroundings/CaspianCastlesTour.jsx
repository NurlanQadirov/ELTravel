import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Star, ArrowRight, CheckCircle, XCircle, Users, Languages, ChevronDown, Shield, Waves } from 'lucide-react';

// Akkordion komponenti (eyni qalır)
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
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

// YENİ KOMPONENT: CaspianCastlesTour
const CaspianCastlesTour = () => {
  return (
    <motion.div
      className="bg-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">

        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
        >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Xəzər Sahili və Abşeron Qalaları</h1>
            <p className="mt-4 text-xl text-slate-300">Tarixin qüdrəti və dənizin sərinliyi bir arada</p>
        </motion.div>

        {/* Info Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 p-6 bg-slate-800 rounded-2xl border border-slate-700 text-center">
          <div className="text-white"><Clock className="mx-auto w-8 h-8 mb-2 text-cyan-400" /> <span className="font-semibold">6-7 saat</span></div>
          <div className="text-white"><Users className="mx-auto w-8 h-8 mb-2 text-cyan-400" /> <span className="font-semibold">İstirahət və Tarix</span></div>
          <div className="text-white"><Shield className="mx-auto w-8 h-8 mb-2 text-cyan-400" /> <span className="font-semibold">Qala Ziyarətləri</span></div>
          <div className="text-white"><Waves className="mx-auto w-8 h-8 mb-2 text-cyan-400" /> <span className="font-semibold">Dəniz Kənarı</span></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column - Details */}
          <div className="w-full lg:w-2/3">
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
              <h2 className="text-3xl font-bold text-white mb-4">Tur Haqqında</h2>
              <p className="text-slate-300 leading-relaxed">
                Bu tur sizi Abşeron yarımadasının zəngin tarixi irsi və Xəzər dənizinin füsunkar sahilləri ilə tanış edəcək. Orta əsrlərdə Şirvanşahlar tərəfindən tikilmiş və vahid müdafiə sisteminin bir hissəsi olan möhtəşəm qəsrlərin qüdrətli divarlarına toxunacaqsınız. Tarixi kəşfiyyatdan sonra isə Xəzərin sahilində yerləşən müasir istirahət məkanlarından birində dincəlib dənizin və günəşin dadını çıxaracaqsınız.
              </p>
            </motion.div>
            
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Tur Proqramı</h3>
                <div className="space-y-2">
                    <AccordionItem title="Başlanğıc - Oteldən Götürülmə">
                        Səhər sizi Bakıdakı otelinizdən götürərək Abşeronun tarixi məkanlarına doğru yola çıxırıq.
                    </AccordionItem>
                    <AccordionItem title="Mərdəkan Qalası (Dördkünc Qala)">
                        XII əsrə aid bu möhtəşəm qalanın tarixi ilə tanışlıq. Qalanın zirvəsindən ətrafa açılan mənzərəni seyr edirik.
                    </AccordionItem>
                    <AccordionItem title="Ramana Qalası">
                        Qaya üzərində inşa edilmiş və Abşeronun ən yaxşı qorunmuş qalalarından biri olan Ramana qalasını ziyarət edirik.
                    </AccordionItem>
                     <AccordionItem title="Dəniz Sahilində Nahar və İstirahət">
                        Müasir çimərlik restoranlarından birində Xəzər dənizinin mənzərəsi ilə nahar etmək və istirahət üçün sərbəst vaxt.
                    </AccordionItem>
                    <AccordionItem title="Geri Qayıdış">
                        Dəniz kənarında xoş istirahətdən sonra Bakıya geri qayıdırıq və sizi otelinizə buraxırıq.
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
                          <li className="flex items-center text-slate-300"><CheckCircle className="w-5 h-5 mr-3 text-green-500" />Komfortlu nəqliyyat (otel transferi daxil)</li>
                          <li className="flex items-center text-slate-300"><CheckCircle className="w-5 h-5 mr-3 text-green-500" />Qalalara giriş biletləri</li>
                          <li className="flex items-center text-slate-300"><CheckCircle className="w-5 h-5 mr-3 text-green-500" />Bir şüşə su</li>
                      </ul>
                  </div>
                   <div>
                      <h4 className="font-semibold text-lg text-red-500 mb-4">Daxil Deyil:</h4>
                      <ul className="space-y-3">
                          <li className="flex items-center text-slate-300"><XCircle className="w-5 h-5 mr-3 text-red-500" />Nahar yeməyi</li>
                          <li className="flex items-center text-slate-300"><XCircle className="w-5 h-5 mr-3 text-red-500" />Çimərlikdəki əlavə xidmətlər</li>
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
                <span className="text-4xl font-bold text-cyan-400">$70</span>
                <span className="text-slate-400 ml-2">/nəfər</span>
              </div>
              <p className="text-center text-slate-300 mb-6">Həm qədim qala divarlarına toxunun, həm də Xəzərin ləpədöyənində dincəlin!</p>
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

export default CaspianCastlesTour;