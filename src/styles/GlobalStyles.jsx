import React from 'react';

const GlobalStyles = () => (
  <style>{`
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
    .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
    .animate-fade-in-up-delay { animation: fade-in-up 0.8s ease-out 0.3s forwards; opacity: 0; }
  `}</style>
);

export default GlobalStyles;
