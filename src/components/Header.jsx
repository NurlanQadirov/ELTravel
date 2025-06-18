import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, MoveRight, Car, Home, Building, Users, Globe } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuTimeout = useRef(null);
  const [activeMenu, setActiveMenu] = useState(null);
  
  // This is a placeholder. Real functionality should be managed from App.jsx
  const [language, setLanguage] = useState('EN'); 

  const handleMouseEnter = (menu) => {
    clearTimeout(menuTimeout.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    menuTimeout.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };
  
  const serviceItems = [
    { name: "Hotels", path: "/services/hotels", icon: <Building size={16} /> },
    { name: "Villa and cottages", path: "/services/villas", icon: <Home size={16} /> },
    { name: "Guide Service", path: "/services/guides", icon: <Users size={16} /> },
    { name: "Transport", path: "/services/transport", icon: <Car size={16} /> },
  ];

  const domesticTourRegions = [
    { name: "Bakı", path: "/tours/baku", subTours: [
        { name: "Qobustan Turu", path: "/tours/qobustan" },
        { name: "Yanardağ Turu", path: "/tours/yanardag" },
        { name: "Atəşgah Turu", path: "/tours/ateshgah" },
    ]},
    { name: "Bakı Ətrafı", path: "/tours/baku", subTours: [
        { name: "Qobustan Turu", path: "/tours/qobustan" },
        { name: "Yanardağ Turu", path: "/tours/yanardag" },
        { name: "Atəşgah Turu", path: "/tours/ateshgah" },
    ]},
    { name: "Quba", path: "/tours/quba" },
    { name: "Qəbələ", path: "/tours/qabala" },
    { name: "Şəki", path: "/tours/sheki" },
  ];

  const internationalTourItems = [
      { name: "Türkiyə Turları", path: "/international/turkey" },
      { name: "Avropa Turları", path: "/international/europe" },
      { name: "BƏƏ Turları", path: "/international/uae" },
      { name: "Asiya Turları", path: "/international/asia" },
  ];

  const languages = [
      { code: 'AZ', name: 'Azərbaycan' },
      { code: 'EN', name: 'English' },
      { code: 'RU', name: 'Русский' },
      { code: 'AR', name: 'العربية' },
  ];
  
 useEffect(() => {
  if (isMenuOpen) {
    document.documentElement.classList.add('overflow-hidden');
  } else {
    document.documentElement.classList.remove('overflow-hidden');
  }
}, [isMenuOpen]);

  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const toggleMobileSubMenu = (menu) => {
    setMobileSubMenu(mobileSubMenu === menu ? null : menu);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[60] bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex-shrink-0">
              <img src="/logo.png" alt="Company Logo" className="h-10 md:h-12 w-auto" />
            </Link>
            
            {/* DÜZƏLİŞ: Görünmə breakpoint-i `lg` olaraq dəyişdirildi */}
            <div className="hidden lg:flex items-center">
              <nav className="flex items-center space-x-5"> {/* Məsafə azaldıldı */}
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">About Us</Link>
                
                <div className="relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
                  <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Our Services <ChevronDown size={16} className="ml-1" /></button>
                  {activeMenu === 'services' && (
                    <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-lg shadow-xl py-2 z-50 animate-fade-in">
                      {serviceItems.map(item => ( <Link key={item.name} to={item.path} className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">{item.icon}<span>{item.name}</span></Link>))}
                    </div>
                  )}
                </div>

                <div className="relative" onMouseEnter={() => handleMouseEnter('international')} onMouseLeave={handleMouseLeave}>
                  <Link to="/international/turkey" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">International Tours <ChevronDown size={16} className="ml-1" /></Link>
                  {activeMenu === 'international' && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50 animate-fade-in">
                      {internationalTourItems.map(item => (<Link key={item.name} to={item.path} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">{item.name}</Link>))}
                    </div>
                  )}
                </div>
                
                <div className="relative" onMouseEnter={() => handleMouseEnter('domestic')} onMouseLeave={handleMouseLeave}>
                  <Link to="/tours/baku" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Domestic Tours <ChevronDown size={16} className="ml-1" /></Link>
                   {activeMenu === 'domestic' && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50 animate-fade-in">
                          {domesticTourRegions.map(region => (
                              <div key={region.name} className="relative group/submenu">
                                  <Link to={region.path} className="flex justify-between items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                                      {region.name}
                                      {region.subTours && <MoveRight size={16} />}
                                  </Link>
                                  {region.subTours && (
                                      <div className="absolute top-0 left-full ml-1 w-56 bg-white rounded-lg shadow-xl py-2 hidden group-hover/submenu:block animate-fade-in">
                                          {region.subTours.map(subTour => ( <Link key={subTour.name} to={subTour.path} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">{subTour.name}</Link>))}
                                      </div>
                                  )}
                              </div>
                          ))}
                      </div>
                  )}
                </div>

                <Link to="/hunting-tour" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Hunting Tour</Link>
                <Link to="/team" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Our Team</Link>
                <Link to="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Gallery</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Contact</Link>
              </nav>
              
              <div className="relative ml-6" onMouseEnter={() => handleMouseEnter('lang')} onMouseLeave={handleMouseLeave}>
                  <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                      <Globe size={16} className="mr-2" /> {language} <ChevronDown size={16} className="ml-1" />
                  </button>
                  {activeMenu === 'lang' && (
                      <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-xl py-2 z-50 animate-fade-in">
                          {languages.map(lang => ( <a key={lang.code} href="#" onClick={(e) => { e.preventDefault(); setLanguage(lang.code); }} className="block px-4 py-2 text-gray-700 hover:bg-blue-50">{lang.name}</a>))}
                      </div>
                  )}
              </div>
            </div>

            {/* DÜZƏLİŞ: Hamburger menyu düyməsinin z-index-i və yeri dəqiqləşdirildi */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-[70] p-2 text-gray-800 relative">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* DÜZƏLİŞ: Mobil menyu paneli və onun açılma/bağlanma animasiyası */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[65] transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-end px-4 pt-6">
  <button onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-red-600">
    <X size={28} />
  </button>
</div>

          <nav className="pt-24 px-8 h-full overflow-y-auto">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block py-3 text-lg font-medium text-gray-800 hover:text-blue-600">Home</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block py-3 text-lg font-medium text-gray-800 hover:text-blue-600">About Us</Link>
              
              <div>
                  <button onClick={() => toggleMobileSubMenu('services')} className="w-full flex justify-between items-center py-3 text-lg font-medium text-gray-800 hover:text-blue-600">Our Services <ChevronDown size={20} className={`transition-transform ${mobileSubMenu === 'services' ? 'rotate-180' : ''}`} /></button>
                  {mobileSubMenu === 'services' && <div className="pl-4 border-l-2 border-blue-200">{serviceItems.map(item => (<Link key={item.name} to={item.path} onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-600">{item.name}</Link>))}</div>}
              </div>
              
              <div>
                  <button onClick={() => toggleMobileSubMenu('international')} className="w-full flex justify-between items-center py-3 text-lg font-medium text-gray-800 hover:text-blue-600">International Tours <ChevronDown size={20} className={`transition-transform ${mobileSubMenu === 'international' ? 'rotate-180' : ''}`} /></button>
                  {mobileSubMenu === 'international' && <div className="pl-4 border-l-2 border-blue-200">{internationalTourItems.map(item => (<Link key={item.name} to={item.path} onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-600">{item.name}</Link>))}</div>}
              </div>

              <div>
                  <button onClick={() => toggleMobileSubMenu('domestic')} className="w-full flex justify-between items-center py-3 text-lg font-medium text-gray-800 hover:text-blue-600">Domestic Tours <ChevronDown size={20} className={`transition-transform ${mobileSubMenu === 'domestic' ? 'rotate-180' : ''}`} /></button>
                  {mobileSubMenu === 'domestic' && <div className="pl-4 border-l-2 border-blue-200">{domesticTourRegions.map(item => (<Link key={item.name} to={item.path} onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-600">{item.name}</Link>))}</div>}
              </div>

              <Link to="/hunting-tour" onClick={() => setIsMenuOpen(false)} className="block py-3 text-lg font-medium text-gray-800 hover:text-blue-600">Hunting Tour</Link>
              <Link to="/team" onClick={() => setIsMenuOpen(false)} className="block py-3 text-lg font-medium text-gray-800 hover:text-blue-600">Our Team</Link>
              <Link to="/gallery" onClick={() => setIsMenuOpen(false)} className="block py-3 text-lg font-medium text-gray-800 hover:text-blue-600">Gallery</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block py-3 text-lg font-medium text-gray-800 hover:text-blue-600">Contact</Link>
              
              <div className="mt-8 border-t pt-4">
                  <h3 className="text-gray-500 mb-2">Dil Seçimi</h3>
                  {languages.map(lang => (<a key={lang.code} href="#" onClick={(e) => { e.preventDefault(); setLanguage(lang.code); setIsMenuOpen(false); }} className="block py-2 text-gray-800 hover:text-blue-600">{lang.name}</a>))}
              </div>
          </nav>
      </div>
    </>
  );
};

export default Header;
