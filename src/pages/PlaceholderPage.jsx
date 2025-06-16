import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';


// Placeholder komponentləri
const PlaceholderPage = ({ title }) => (
  <div className="pt-40 pb-20 container mx-auto px-6 text-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h1>
    <p className="mt-4 text-lg md:text-xl text-gray-600">Bu səhifənin məzmunu hazırlanma mərhələsindədir.</p>
    <Link to="/" className="mt-8 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
      Ana Səhifəyə Qayıt
    </Link>
  </div>
);

const ContactPage = () => (
    <div className="pt-32 md:pt-40 pb-20 container mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">Əlaqə</h1>
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Bizimlə əlaqə saxlayın</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Hər hansı bir sualınız, təklifiniz və ya sifarişlə bağlı müraciətiniz varsa, bizə yazın və ya zəng edin. Sizə yardım etməkdən məmnun olarıq.
                </p>
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <Phone className="text-blue-600" size={24} />
                        <span className="text-gray-700 text-lg">+994 12 345 67 89</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Mail className="text-blue-600" size={24} />
                        <span className="text-gray-700 text-lg">info@sirketinizinadi.az</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <MapPin className="text-blue-600" size={24} />
                        <span className="text-gray-700 text-lg">Nizami küçəsi 123, Bakı, Azərbaycan</span>
                    </div>
                </div>
            </div>
            <div>
                <form className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Adınız</label>
                        <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mesajınız</label>
                        <textarea id="message" rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Göndər
                    </button>
                </form>
            </div>
        </div>
    </div>
);

export default PlaceholderPage;
export { ContactPage };
