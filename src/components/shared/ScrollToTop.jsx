import { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { isPassenger } = useApp();

  useEffect(() => {
    const toggleVisibility = () => {
      // Показуємо кнопку після 500px скролу
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-4 md:right-8 bottom-[88px] md:bottom-8 w-[46px] h-[46px] rounded-full flex items-center justify-center z-[800] border cursor-pointer ease-spring duration-500 active-squish hover:scale-105 mb-[env(safe-area-inset-bottom)]
        ${isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible'}
        ${isPassenger 
          ? 'bg-white/90 backdrop-blur-md border-black/10 text-[#5E48E8] shadow-[0_8px_30px_rgba(30,20,80,0.15)] hover:border-[#5E48E8]/40' 
          : 'bg-[#1A1145]/90 backdrop-blur-md border-white/10 text-[#8B7CF6] shadow-[0_8px_30px_rgba(94,72,232,0.25)] hover:border-[#8B7CF6]/40'}`}
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  );
}
