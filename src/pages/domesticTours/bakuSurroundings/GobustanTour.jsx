import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, ArrowRight, CheckCircle, XCircle, Users, Languages, ChevronDown } from 'lucide-react';

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

// YENİ KOMPONENT: GobustanTour
const GobustanTour = () => {
  return (
    <motion.div
      className="bg-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">

        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
        >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Qobustan və Palçıq Vulkanları Turu</h1>
            <p className="mt-4 text-xl text-slate-300">Bəşər tarixinin beşiyinə və təbiətin möcüzəsinə səyahət</p>
        </motion.div>

        {/* Info Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 p-6 bg-slate-800 rounded-2xl border border-slate-700 text-center">
          <div className="text-white"><Clock className="mx-auto w-8 h-8 mb-2 text-cyan-400" /> <span className="font-semibold">5-6 saat</span></div>
          <div className="text-white"><Users className="mx-auto w-8 h-8 mb-2 text-cyan-400" /> <span className="font-semibold">Kəşfiyyat Həvəskarları</span></div>
          <div className="text-white"><Languages className="mx-auto w-8 h-8 mb-2 text-cyan-400" /> <span className="font-semibold">AZ, EN, RU</span></div>
          <div className="text-white"><Star className="mx-auto w-8 h-8 mb-2 text-cyan-400" /> <span className="font-semibold">UNESCO İrsi</span></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column - Details */}
          <div className="w-full lg:w-2/3">
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
              <h2 className="text-3xl font-bold text-white mb-4">Tur Haqqında</h2>
              <p className="text-slate-300 leading-relaxed">
                Bu tur sizi minilliklər əvvəlin həyat tərzini daşlara həkk etmiş qədim insanların izi ilə aparacaq. UNESCO-nun Dünya İrsi Siyahısında olan Qobustanın qayaüstü rəsmləri sizi heyrətləndirəcək. Daha sonra isə dünyanın heç bir yerində rast gəlinməyən, kosmik mənzərəni xatırladan palçıq vulkanlarının fəaliyyətini yaxından izləyəcəksiniz. Bu, həm tarix, həm də təbiət həvəskarları üçün unudulmaz bir təcrübədir.
              </p>
            </motion.div>
            
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Tur Proqramı</h3>
                <div className="space-y-2">
                    <AccordionItem title="Başlanğıc - Oteldən Götürülmə">
                        Səhər sizi Bakı şəhəri daxilində təyin etdiyiniz ünvandan komfortlu nəqliyyatla götürərək Qobustana doğru yola çıxırıq.
                    </AccordionItem>
                    <AccordionItem title="Qobustan Milli Parkının Muzeyi">
                        İlk öncə, qayaüstü rəsmləri daha yaxşı anlamaq üçün müasir və interaktiv muzeylə tanış oluruq. Burada qədim insanların həyatı haqqında zəngin məlumatlar əldə edirik.
                    </AccordionItem>
                    <AccordionItem title="Qayaüstü Rəsmlərin Seyri">
                        Açıq səma altında yerləşən muzeyə keçid edərək, bələdçimizin rəhbərliyi ilə daş dövrünə aid ovçuluq, rəqs və gündəlik həyat səhnələrini əks etdirən petroqlifləri seyr edirik.
                    </AccordionItem>
                     <AccordionItem title="Palçıq Vulkanlarına Off-Road Səyahət">
                        Xüsusi nəqliyyatla (Lada Niva) palçıq vulkanları olan əraziyə yollanırıq. Burada qaynayan və soyuq palçıq püskürən vulkanları yaxından görmək imkanınız olacaq.
                    </AccordionItem>
                    <AccordionItem title="Geri Qayıdış - Otelə Buraxılma">
                        Unudulmaz təəssüratlarla Bakıya geri qayıdırıq və sizi götürdüyümüz ünvana buraxırıq.
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
                          <li className="flex items-center text-slate-300"><CheckCircle className="w-5 h-5 mr-3 text-green-500" />Qobustan muzeyi və qoruğuna giriş bileti</li>
                          <li className="flex items-center text-slate-300"><CheckCircle className="w-5 h-5 mr-3 text-green-500" />Palçıq vulkanlarına xüsusi nəqliyyat</li>
                      </ul>
                  </div>
                   <div>
                      <h4 className="font-semibold text-lg text-red-500 mb-4">Daxil Deyil:</h4>
                      <ul className="space-y-3">
                          <li className="flex items-center text-slate-300"><XCircle className="w-5 h-5 mr-3 text-red-500" />Yemək və içki</li>
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
                <span className="text-4xl font-bold text-cyan-400">$75</span>
                <span className="text-slate-400 ml-2">/nəfər</span>
              </div>
              <p className="text-center text-slate-300 mb-6">Bəşər tarixinin ilk səhifələrinə toxunmaq üçün bu fürsəti qaçırmayın!</p>
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

export default GobustanTour;