import { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { langMeta } from '../../data/translations';

export default function LangSwitcher() {
  const { lang, setLang } = useApp();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const meta = langMeta[lang];

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const { isPassenger } = useApp();

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all ease-spring duration-500 active-squish border
          ${isPassenger
            ? 'bg-black/4 border-black/8 text-[#1A1A2E] hover:bg-black/6 hover:border-[#5E48E8]/30'
            : 'bg-white/6 border-white/10 text-white hover:bg-white/10 hover:border-[#5E48E8]/40'
          }`}
      >
        <span className="text-lg leading-none">{meta.flag}</span>
        <span className="max-[480px]:hidden">{meta.code}</span>
        <span className={`text-[0.625rem] transition-transform duration-200 opacity-50 ${open ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {/* Dropdown */}
      <div className={`absolute top-[calc(100%+6px)] right-0 min-w-[160px] rounded-xl overflow-hidden shadow-xl transition-all duration-200
        ${isPassenger ? 'bg-white border border-black/8' : 'bg-[#1A1145] border border-white/10'}
        ${open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
      >
        {Object.entries(langMeta).map(([key, m]) => (
          <button
            key={key}
            onClick={() => { setLang(key); setOpen(false); }}
            className={`flex items-center gap-2.5 w-full px-4 py-3 text-sm font-medium cursor-pointer transition-all duration-200 border-none
              ${isPassenger
                ? `${lang === key ? 'text-[#5E48E8] bg-[#5E48E8]/6' : 'text-[#6B7280] hover:bg-[#5E48E8]/6 hover:text-[#1A1A2E]'}`
                : `${lang === key ? 'text-[#8B7CF6] bg-[#5E48E8]/10' : 'text-white/70 hover:bg-[#5E48E8]/15 hover:text-white'}`
              } bg-transparent`}
          >
            <span className="text-xl">{m.flag}</span>
            {key === 'uk' ? 'Українська' : key === 'cs' ? 'Čeština' : 'English'}
          </button>
        ))}
      </div>
    </div>
  );
}
