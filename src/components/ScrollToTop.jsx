import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Hər dəfə pathname (URL yolu) dəyişdikdə bu effekt işə düşəcək

  return null; // Bu komponent ekrana heç bir şey render etmir
};

export default ScrollToTop;