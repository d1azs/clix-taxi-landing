import { useApp } from '../../context/AppContext';
import * as Icons from '../shared/Icons';

export default function PassengerTrust() {
  const { t } = useApp();
  const safetyBadges = [
    { icon: <Icons.Car />, text: t('p_safety_1') },
    { icon: <Icons.Check />, text: t('p_safety_2') },
    { icon: <Icons.Shield />, text: t('p_safety_3') },
    { icon: <Icons.Chat />, text: t('p_safety_4') },
  ];
  const reviews = [
    { text: t('p_review_1_text'), name: t('p_review_1_name'), role: t('p_review_1_role'), initials: 'М', avatarClass: 'from-[#5E48E8] to-[#8B7CF6]' },
    { text: t('p_review_2_text'), name: t('p_review_2_name'), role: t('p_review_2_role'), initials: 'Д', avatarClass: 'from-[#4338CA] to-[#5E48E8]' },
    { text: t('p_review_3_text'), name: t('p_review_3_name'), role: t('p_review_3_role'), initials: 'О', avatarClass: 'from-[#7C3AED] to-[#8B7CF6]' },
  ];

  return (
    <section className="py-20 bg-white relative" id="p-trust">
      <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(94,72,232,0.1),transparent)]" />
      <div className="container">
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5E48E8]/6 border border-[#5E48E8]/12 rounded-full text-[0.8125rem] font-semibold text-[#5E48E8] mb-6">
            <span className="w-3.5 h-3.5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"><Icons.Shield /></span> {t('p_trust_label')}
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-[#1A1A2E]">{t('p_trust_title')}</h2>
          <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-[#6B7280] leading-[1.7] mt-4">{t('p_trust_subtitle')}</p>
        </div>

        {/* Safety badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {safetyBadges.map((b, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-[#F8F9FA] border border-black/4 rounded-xl transition-all duration-350 hover:border-[#5E48E8]/12 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(94,72,232,0.06)]">
              <span className="text-[1.75rem] mb-2">{b.icon}</span>
              <span className="text-sm font-semibold text-[#1A1A2E] leading-[1.4]">{b.text}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#F8F9FA] border border-black/4 rounded-2xl p-8 transition-all duration-350 hover:border-[#5E48E8]/12 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(94,72,232,0.06)]">
              <div className="flex gap-0.5 mb-4 text-[#F59E0B] text-base">★★★★★</div>
              <p className="text-[0.9375rem] text-[#6B7280] leading-[1.7] mb-6 italic">{r.text}</p>
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-lg font-bold text-white bg-gradient-to-br ${r.avatarClass}`}>{r.initials}</div>
                <div>
                  <div className="text-[0.9375rem] font-semibold text-[#1A1A2E]">{r.name}</div>
                  <div className="text-[0.8125rem] text-[#9CA3AF]">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
