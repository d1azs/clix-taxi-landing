/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { translations, langMeta } from '../data/translations';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Initialize role cleanly without triggering effect cascades
  const [role, setRole] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const urlRole = params.get('role');
    if (urlRole === 'driver' || urlRole === 'passenger') return urlRole;
    
    const savedRole = localStorage.getItem('clix_role');
    if (savedRole === 'driver' || savedRole === 'passenger') return savedRole;

    return 'passenger';
  });
  
  const [lang, setLang] = useState('uk');

  // Persist role
  useEffect(() => {
    localStorage.setItem('clix_role', role);
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      role === 'passenger' ? '#FFFFFF' : '#0F0A2A'
    );
  }, [role]);

  // Update html lang
  useEffect(() => {
    document.documentElement.lang = langMeta[lang].htmlLang;
  }, [lang]);

  const t = (key) => translations[lang]?.[key] || key;
  const isDriver = role === 'driver';
  const isPassenger = role === 'passenger';

  return (
    <AppContext.Provider value={{ role, setRole, lang, setLang, t, isDriver, isPassenger, langMeta }}>
      {children}
    </AppContext.Provider>
  );
}

// Ensure this is properly exported for react refresh
export const useApp = () => useContext(AppContext);

