import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import * as Icons from './Icons';

export default function RoleSwitcher() {
  const { role, setRole, t } = useApp();
  const [animKey, setAnimKey] = useState(0);

  const handleRoleChange = (newRole) => {
    if (role === newRole) return;
    
    // Smooth scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setRole(newRole);
    setAnimKey(prev => prev + 1);
  };

  return (
    <div className="flex items-center rounded-full p-[3px] relative z-10 border
      bg-white/6 border-white/10
      data-[light=true]:bg-black/4 data-[light=true]:border-black/8"
      data-light={role === 'passenger'}
    >
      <button
        onClick={() => handleRoleChange('passenger')}
        className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-[0.8125rem] font-semibold cursor-pointer relative z-2 transition-all duration-350 whitespace-nowrap bg-transparent border-none
          ${role === 'passenger' ? 'text-white' : role === 'driver' ? 'text-white/50 hover:text-white/80' : 'text-[#1A1A2E]/50 hover:text-[#1A1A2E]/70'}`}
      >
        <span className="w-4 h-4 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"><Icons.User /></span>
        <span className="max-lg:hidden">{t('role_passenger')}</span>
      </button>
      <button
        onClick={() => handleRoleChange('driver')}
        className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-[0.8125rem] font-semibold cursor-pointer relative z-2 transition-all duration-350 whitespace-nowrap bg-transparent border-none
          ${role === 'driver' ? 'text-white' : role === 'passenger' ? 'text-[#1A1A2E]/50 hover:text-[#1A1A2E]/70' : 'text-white/50 hover:text-white/80'}`}
      >
        <span className="w-4 h-4 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"><Icons.Car /></span>
        <span className="max-lg:hidden">{t('role_driver')}</span>
      </button>
      
      {/* Sliding pill container */}
      <div
        className={`absolute top-[3px] left-[3px] h-[calc(100%-6px)] w-[calc(50%-3px)] transition-transform duration-400 z-1 ease-out
          ${role === 'driver' ? 'translate-x-full' : ''}`}
      >
        {/* Inner pill for scaling squash animation */}
        <div 
          key={animKey}
          className="w-full h-full bg-primary rounded-full shadow-[0_2px_8px_rgba(94,72,232,0.4)] animate-[role-squish_0.5s_cubic-bezier(0.34,1.56,0.64,1)_forwards]"
        />
      </div>
    </div>
  );
}
