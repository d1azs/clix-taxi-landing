import { useApp } from '../../context/AppContext';
import * as Icons from '../shared/Icons';

export default function DriverHowItWorks() {
  const { t } = useApp();
  const steps = [
    { icon: <Icons.Phone />, title: t('step_1_title'), desc: t('step_1_desc') },
    { icon: <Icons.Check />, title: t('step_2_title'), desc: t('step_2_desc') },
    { icon: <Icons.Money />, title: t('step_3_title'), desc: t('step_3_desc') },
  ];

  return (
    <section className="py-20 bg-[linear-gradient(180deg,#0F0A2A_0%,#0D0830_50%,#0F0A2A_100%)] relative overflow-hidden" id="how">
      <div className="container">
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5E48E8]/10 border border-[#5E48E8]/20 rounded-full text-[0.8125rem] font-semibold text-[#8B7CF6] mb-6">
            <span className="w-3.5 h-3.5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"><Icons.Rocket /></span> {t('how_label')}
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-white">{t('how_title')}</h2>
          <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-white/70 leading-[1.7] mt-4">{t('how_subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="absolute top-[52px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#5E48E8] via-[#8B7CF6] to-[#5E48E8] opacity-20 hidden md:block" />
          {steps.map((s, i) => (
            <div key={i} className="text-center relative p-8 group">
              <div className="text-[6rem] font-black text-[#5E48E8]/8 leading-none absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none">{i+1}</div>
              <div className="w-[72px] h-[72px] flex items-center justify-center bg-[#5E48E8]/10 border-2 border-[#5E48E8]/20 rounded-full mx-auto mb-6 text-[1.75rem] relative z-2 transition-all duration-350 group-hover:bg-[#5E48E8]/20 group-hover:border-[#5E48E8] group-hover:shadow-[0_0_40px_rgba(94,72,232,0.3)] group-hover:scale-110">{s.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-[0.9375rem] text-white/50 leading-[1.6] max-w-[280px] mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
