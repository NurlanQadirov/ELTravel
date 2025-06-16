import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 mb-12">
        
        {/* 1. Şirkət məlumatı */}
        <div>
          <h2 className="text-2xl font-bold mb-4">EL-Travel</h2>
          <p className="text-gray-400 leading-relaxed max-w-sm">
            Azərbaycanda və dünyada unudulmaz təcrübələr təqdim edən, müştəri məmnuniyyətini ön planda tutan etibarlı səyahət agentliyiniz. Fərdi və qrup turlarımızla hər kəsə uyğun səyahət imkanları yaradırıq.
          </p>
        </div>

        {/* 2. Menyu */}
        <div className="sm:pl-4 md:pl-10">
          <h3 className="text-lg font-semibold mb-4">Menyu</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white">Ana Səhifə</Link></li>
            <li><Link to="/about" className="hover:text-white">Haqqımızda</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Qalereya</Link></li>
            <li><Link to="/team" className="hover:text-white">Komanda</Link></li>
            <li><Link to="/contact" className="hover:text-white">Əlaqə</Link></li>
          </ul>
        </div>

        {/* 3. Turlar */}
        <div className="sm:pl-4 md:pl-10">
          <h3 className="text-lg font-semibold mb-4">Turlar</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/tours/baku" className="hover:text-white">Daxili Turlar</Link></li>
            <li><Link to="/international/turkey" className="hover:text-white">Xarici Turlar</Link></li>
            <li><Link to="/hunting-tour" className="hover:text-white">Ov Turları</Link></li>
          </ul>
        </div>

        {/* 4. Əlaqə və Sosial Media */}
        <div className="sm:pl-4 md:pl-10">
          <h3 className="text-lg font-semibold mb-4">Əlaqə</h3>
          <div className="space-y-3 text-gray-400 mb-4">
            <div className="flex items-start space-x-3">
              <Phone size={18} className="text-blue-400 mt-1" />
              <span>+994 12 345 67 89</span>
            </div>
            <div className="flex items-start space-x-3">
              <Mail size={18} className="text-blue-400 mt-1" />
              <span>info@sirketinizinadi.az</span>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin size={18} className="text-blue-400 mt-1" />
              <span>Bakı, Azərbaycan</span>
            </div>
          </div>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-gray-400 hover:text-white" size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-gray-400 hover:text-white" size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="text-gray-400 hover:text-white" size={24} />
            </a>
            <a href="https://wa.me/994123456789" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className="text-gray-400 hover:text-white w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Alt qeyd */}
      <div className="border-t border-gray-800 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} EL-Travel. Bütün hüquqlar qorunur.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
