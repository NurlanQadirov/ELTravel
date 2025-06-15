
// Tour Categories Component
const TourCategories = () => {
    const categories = [
      { title: "Daxili Turlar", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", description: "Azərbaycanın gizli incilərini daxili turlarımızla kəşf edin." },
      { title: "Xarici Turlar", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", description: "Beynəlxalq paketlərimizlə dünyanı kəşf edin." },
      { title: "Ov Turları", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", description: "Təbiətin qoynunda həyəcanverici ov macəraları yaşayın." }
    ];
  
    return (
      <section id="tour-categories" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tur Kateqoriyaları</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Hər növ səyyah üçün nəzərdə tutulmuş müxtəlif tur paketlərimizdən seçin.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer">
                <div className="overflow-hidden">
                  <img src={category.image} alt={category.title} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};
  
  
export default TourCategories;