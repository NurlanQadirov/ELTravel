// Team Section Component
const TeamSection = () => {
    const team = [
      { name: "Anar Məmmədov", position: "Təsisçi & CEO", image: "/team2.webp" },
      { name: "Leyla Həsənova", position: "Tur Meneceri", image: "/team.webp" },
      { name: "Rəşad Əliyev", position: "Baş Bələdçi", image: "team3.webp" },
      { name: "Nigar Səfərova", position: "Müştəri Əlaqələri", image: "/team4.webp" }
    ];
  
    return (
      <section id="our-team" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Bizim Komanda</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Səyahət arzularınızı gerçəkləşdirən peşəkar komandamızla tanış olun.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg">
                  <img src={member.image} alt={member.name} className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};
  
  export default TeamSection;