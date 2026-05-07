import { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export default function StickyCta() {
  const [visible, setVisible] = useState(false);
  const { t, isPassenger, role } = useApp();

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-[999] p-3 md:hidden border-t transition-transform duration-350
      ${isPassenger ? 'bg-white/95 border-[#5E48E8]/10' : 'bg-[#0F0A2A]/90 backdrop-blur-[20px] border-[#5E48E8]/15'}
      ${visible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <a
        href="/download.html"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full py-4 bg-[#5E48E8] text-white font-semibold text-base rounded-xl shadow-[0_4px_16px_rgba(94,72,232,0.4)] hover:bg-[#8B7CF6] transition-all duration-350"
      >
        {t('sticky_cta')}
      </a>
    </div>
  );
}
