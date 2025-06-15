
  
// Team Section Component
const TeamSection = () => {
    const team = [
      { name: "Anar Məmmədov", position: "Təsisçi & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
      { name: "Leyla Həsənova", position: "Tur Meneceri", image: "/public/Team.jpg" },
      { name: "Rəşad Əliyev", position: "Baş Bələdçi", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
      { name: "Nigar Səfərova", position: "Müştəri Əlaqələri", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" }
    ];
  
    return (
      <section id="our-team" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Bizim Komanda</h2>
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