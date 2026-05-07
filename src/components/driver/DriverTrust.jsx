import { useApp } from '../../context/AppContext';
import { useCountUp } from '../../hooks/useCountUp';
import * as Icons from '../shared/Icons';

function AnimatedStat({ value, suffix }) {
  // If the value ends with a dot, we need special handling for 4.9 etc.
  const numericValue = value === '4.' ? '4.9' : value;
  const isSpecialVariant = value === '4.'; // Hack to keep 4. white and 9 purple
  
  const [ref, count] = useCountUp(numericValue, 2000);
  
  if (isSpecialVariant) {
    // If it's animating, display the whole animated number formatted
    // Wait, useCountUp formats to 1 decimal place if input is float.
    const strCount = count.toString();
    const parts = strCount.split('.');
    return (
      <div ref={ref} className="text-[2rem] font-extrabold text-white tracking-tight">
        {parts[0]}.<span className="text-[#8B7CF6]">{parts[1] || '0'}</span>
      </div>
    );
  }

  return (
    <div ref={ref} className="text-[2rem] font-extrabold text-white tracking-tight">
      <span className="text-[#8B7CF6]">{count}</span>{suffix}
    </div>
  );
}

export default function DriverTrust() {
  const { t } = useApp();
  const reviews = [
    { text: t('review_1_text'), name: t('review_1_name'), role: t('review_1_role'), initials: 'А', avatarClass: 'from-[#5E48E8] to-[#7C3AED]' },
    { text: t('review_2_text'), name: t('review_2_name'), role: t('review_2_role'), initials: 'О', avatarClass: 'from-[#4338CA] to-[#5E48E8]' },
    { text: t('review_3_text'), name: t('review_3_name'), role: t('review_3_role'), initials: 'В', avatarClass: 'from-[#7C3AED] to-[#8B7CF6]' },
  ];
  const stats = [
    { icon: <Icons.Car />, value: '50', suffix: '+', label: t('stat_1') },
    { icon: <Icons.Clock />, value: '3', suffix: 'x', label: t('stat_2') },
    { icon: <Icons.Star />, value: '4.', suffix: '9', label: t('stat_3') },
    { icon: <Icons.Shield />, value: 'GDPR', suffix: '', label: t('stat_4') },
  ];

  return (
    <section className="py-20 relative bg-[#0F0A2A]" id="trust">
      <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(94,72,232,0.2),transparent)]" />
      <div className="container">
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5E48E8]/10 border border-[#5E48E8]/20 rounded-full text-[0.8125rem] font-semibold text-[#8B7CF6] mb-6">
            <span className="w-3.5 h-3.5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"><Icons.Star /></span> {t('trust_label')}
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-white">{t('trust_title')}</h2>
          <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-white/70 leading-[1.7] mt-4">{t('trust_subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white/2 border border-white/6 rounded-3xl p-8 transition-all duration-350 hover:border-[#5E48E8]/20 hover:bg-[#5E48E8]/4 hover:-translate-y-1">
              <div className="flex gap-0.5 mb-4 text-[#F59E0B] text-base">★★★★★</div>
              <p className="text-[0.9375rem] text-white/70 leading-[1.7] mb-6 italic">{r.text}</p>
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-lg font-bold text-white bg-gradient-to-br ${r.avatarClass}`}>{r.initials}</div>
                <div>
                  <div className="text-[0.9375rem] font-semibold text-white">{r.name}</div>
                  <div className="text-[0.8125rem] text-white/40">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-[#5E48E8]/5 border border-[#5E48E8]/10 rounded-2xl transition-all duration-350 hover:border-[#5E48E8]/25 hover:-translate-y-1">
              <div className="text-2xl mb-4 text-[#8B7CF6]">{s.icon}</div>
              <AnimatedStat value={s.value} suffix={s.suffix} />
              <div className="text-[0.8125rem] text-white/45 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
