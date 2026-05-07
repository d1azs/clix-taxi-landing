import { useApp } from './context/AppContext';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import StickyCta from './components/shared/StickyCta';
import DriverFlow from './components/driver/DriverFlow';
import PassengerFlow from './components/passenger/PassengerFlow';
import ScrollToTop from './components/shared/ScrollToTop';

function AppContent() {
  const { isDriver, isPassenger } = useApp();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isPassenger ? 'bg-white text-[#1A1A2E]' : 'bg-[#0F0A2A] text-white'}`}>
      <Header />
      <main>
        <div
          className={`transition-opacity duration-150 ${isPassenger ? 'opacity-100' : 'opacity-0 pointer-events-none hidden'}`}
        >
          <PassengerFlow />
        </div>
        <div
          className={`transition-opacity duration-150 ${isDriver ? 'opacity-100' : 'opacity-0 pointer-events-none hidden'}`}
        >
          <DriverFlow />
        </div>
      </main>
      <Footer />
      <StickyCta />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
