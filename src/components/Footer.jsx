import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Footer Component
const Footer = () => (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            {/* <img src="/public/logoBlue.jpg" alt="Company Logo White" className="h-10 w-auto mb-6" /> */}
            <p className="text-gray-400 leading-relaxed mb-6">Azərbaycanda və dünyada unudulmaz səyahət təcrübələri üçün etibarlı tərəfdaşınız.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="text-gray-400 hover:text-white" size={24} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="text-gray-400 hover:text-white" size={24} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="text-gray-400 hover:text-white" size={24} /></a>
              <a href="https://wa.me/994123456789" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      {/* DÜZƏLİŞ: SVG path atributundakı artıq boşluq silindi. */}
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.902-.539-5.571-1.528L.057 24zM7.477 18.384c.312.443.626.879.952 1.291.644.823 1.393 1.513 2.213 2.065.852.573 1.785.98 2.768 1.196.963.21 1.95.232 2.922.067.973-.166 1.902-.52 2.748-1.037.846-.516 1.597-1.192 2.208-1.99.61-.798 1.103-1.698 1.458-2.658.354-.96.539-1.989.539-3.031.002-5.46-4.444-9.903-9.904-9.903-2.612 0-5.048 1.022-6.924 2.9-1.874 1.878-2.895 4.316-2.895 6.927.001 2.072.585 4.098 1.693 5.895l.132.215-1.127 4.102 4.209-1.104.229.135z"/>
                  </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Faydalı Keçidlər</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white">Haqqımızda</Link></li>
              <li><Link to="/services/hotels" className="text-gray-400 hover:text-white">Xidmətlər</Link></li>
              <li><Link to="/tours/baku" className="text-gray-400 hover:text-white">Daxili Turlar</Link></li>
              <li><Link to="/international/turkey" className="text-gray-400 hover:text-white">Xarici Turlar</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Xidmətlər</h3>
            <ul className="space-y-3">
              <li><Link to="/services/hotels" className="text-gray-400 hover:text-white">Hotel Rezervasiyası</Link></li>
              <li><Link to="/services/guide" className="text-gray-400 hover:text-white">Bələdçi Xidməti</Link></li>
              <li><Link to="/services/transport" className="text-gray-400 hover:text-white">Nəqliyyat</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Əlaqə</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3"><Phone size={18} className="mt-1 text-blue-400"/><span>+994 12 345 67 89</span></div>
              <div className="flex items-start space-x-3"><Mail size={18} className="mt-1 text-blue-400"/><span>info@sirketinizinadi.az</span></div>
              <div className="flex items-start space-x-3"><MapPin size={18} className="mt-1 text-blue-400"/><span>Bakı, Azərbaycan</span></div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 text-center"><p className="text-gray-500">© {new Date().getFullYear()} Şirkət Adı. Bütün hüquqlar qorunur.</p></div>
      </div>
    </footer>
);
 
export default Footer;
