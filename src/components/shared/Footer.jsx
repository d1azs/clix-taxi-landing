import { useApp } from '../../context/AppContext';

export default function Footer() {
  const { t, isPassenger } = useApp();

  return (
    <footer className={`py-12 border-t ${isPassenger ? 'border-black/6' : 'border-white/6'}`}>
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className={`text-[0.8125rem] ${isPassenger ? 'text-[#9CA3AF]' : 'text-white/35'}`}>
          © 2026 Clix Taxi. {t('footer_rights')}
        </div>
        <div className="flex gap-6">
          {['footer_privacy', 'footer_terms', 'footer_contact'].map(key => (
            <a
              key={key}
              href="#"
              className={`text-[0.8125rem] transition-colors duration-200
                ${isPassenger ? 'text-[#9CA3AF] hover:text-[#5E48E8]' : 'text-white/35 hover:text-[#8B7CF6]'}`}
            >
              {t(key)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
