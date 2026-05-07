import { useApp } from '../../context/AppContext';
import * as Icons from '../shared/Icons';

export default function PassengerFeatures() {
  const { t } = useApp();
  const features = [
    { icon: <Icons.Pin />, title: t('p_feature_1_title'), desc: t('p_feature_1_desc') },
    { icon: <Icons.Card />, title: t('p_feature_2_title'), desc: t('p_feature_2_desc') },
    { icon: <Icons.Receipt />, title: t('p_feature_3_title'), desc: t('p_feature_3_desc') },
    { icon: <Icons.Clipboard />, title: t('p_feature_4_title'), desc: t('p_feature_4_desc') },
  ];

  return (
    <section className="py-20 bg-[#F8F9FA] relative" id="p-features">
      <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(94,72,232,0.1),transparent)]" />
      <div className="container">
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5E48E8]/6 border border-[#5E48E8]/12 rounded-full text-[0.8125rem] font-semibold text-[#5E48E8] mb-6">
            <span className="w-3.5 h-3.5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"><Icons.Lightning /></span> {t('p_features_label')}
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-[#1A1A2E]">{t('p_features_title')}</h2>
          <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-[#6B7280] leading-[1.7] mt-4">{t('p_features_subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white border border-black/4 rounded-2xl p-8 pb-12 relative overflow-hidden group transition-all duration-350 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-[#5E48E8]/12 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(94,72,232,0.08)]">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[linear-gradient(135deg,#5E48E8,#7C3AED,#8B7CF6)] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-350" />
              <div className="w-14 h-14 flex items-center justify-center bg-[#5E48E8]/6 border border-[#5E48E8]/8 rounded-xl text-2xl mb-6 group-hover:bg-[#5E48E8]/10 group-hover:border-[#5E48E8]/20 group-hover:scale-110 transition-all duration-350">{f.icon}</div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">{f.title}</h3>
              <p className="text-[0.9375rem] text-[#6B7280] leading-[1.65]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
