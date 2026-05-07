import { useApp } from '../../context/AppContext';
import * as Icons from '../shared/Icons';

export default function PassengerBenefits() {
  const { t } = useApp();
  const benefits = [
    { icon: <Icons.Money />, title: t('p_benefit_1_title'), desc: t('p_benefit_1_desc') },
    { icon: <Icons.Car />, title: t('p_benefit_2_title'), desc: t('p_benefit_2_desc') },
    { icon: <Icons.Globe />, title: t('p_benefit_3_title'), desc: t('p_benefit_3_desc') },
  ];

  return (
    <section className="py-20 bg-[#F8F9FA] relative" id="p-benefits">
      <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(94,72,232,0.1),transparent)]" />
      <div className="container">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5E48E8]/6 border border-[#5E48E8]/12 rounded-full text-[0.8125rem] font-semibold text-[#5E48E8] mb-6">
            <span className="w-3.5 h-3.5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"><Icons.Sparkles /></span> {t('p_benefits_label')}
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-[#1A1A2E]">{t('p_benefits_title')}</h2>
          <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-[#6B7280] leading-[1.7] mt-4">{t('p_benefits_subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white border border-black/4 rounded-2xl p-8 text-center relative overflow-hidden group transition-all duration-350 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-[#5E48E8]/12 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(94,72,232,0.08)]">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[linear-gradient(135deg,#5E48E8,#7C3AED,#8B7CF6)] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-350" />
              <div className="w-16 h-16 flex items-center justify-center bg-[#5E48E8]/6 border border-[#5E48E8]/8 rounded-xl text-[1.75rem] mx-auto mb-6 group-hover:bg-[#5E48E8]/10 group-hover:border-[#5E48E8]/20 group-hover:scale-110 transition-all duration-350">{b.icon}</div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">{b.title}</h3>
              <p className="text-[0.9375rem] text-[#6B7280] leading-[1.65]">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
