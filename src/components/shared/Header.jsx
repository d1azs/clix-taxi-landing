import { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import RoleSwitcher from './RoleSwitcher';
import LangSwitcher from './LangSwitcher';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { isPassenger, t, role } = useApp();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-350
      ${scrolled
        ? isPassenger
          ? 'bg-white/90 backdrop-blur-[20px] backdrop-saturate-[1.4] border-b border-black/6 py-2'
          : 'bg-[#0F0A2A]/85 backdrop-blur-[20px] backdrop-saturate-[1.4] border-b border-[#5E48E8]/10 py-2'
        : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 z-10">
          <img src="/icons/logo.jpg" alt="Clix Taxi" className="w-10 h-10 rounded-lg object-cover" />
          <div className={`text-[1.375rem] font-extrabold tracking-tight ${isPassenger ? 'text-[#1A1A2E]' : 'text-white'}`}>
            Clix<span className={isPassenger ? 'text-[#5E48E8]' : 'text-[#8B7CF6]'}>Taxi</span>
          </div>
        </a>

        {/* Role Switcher */}
        <RoleSwitcher />

        {/* Actions */}
        <div className="flex items-center gap-6">
          <LangSwitcher />
          <a
            href={role === 'passenger' ? '#p-download' : '#download'}
            className="hidden md:inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-xl px-6 py-2.5 bg-[#5E48E8] text-white shadow-[0_4px_16px_rgba(94,72,232,0.4)] hover:bg-[#8B7CF6] hover:scale-105 hover:shadow-[0_8px_32px_rgba(94,72,232,0.5)] active-squish transition-all ease-spring duration-500"
          >
            {t('header_cta')}
          </a>
        </div>
      </div>
    </header>
  );
}
