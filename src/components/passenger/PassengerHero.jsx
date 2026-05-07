import { useApp } from '../../context/AppContext';
import { useCountUp } from '../../hooks/useCountUp';
import { useGyroscope } from '../../hooks/useGyroscope';
import LvivMiniMap from '../shared/LvivMiniMap';

function AnimatedPassengerHeroStat({ stat }) {
  // Handle the '4.' hack
  const numericValue = stat.val === '4.' ? '4.9' : stat.val;
  const isSpecialVariant = stat.val === '4.';
  const [ref, count] = useCountUp(numericValue, 2000);

  if (isSpecialVariant) {
    const strCount = count.toString();
    const parts = strCount.split('.');
    return (
      <div className="flex flex-col">
        <div ref={ref} className="text-[1.75rem] font-extrabold text-[#1A1A2E] tracking-tight">
          <span className="text-[#5E48E8]">{parts[0]}.</span>{parts[1] || '0'}
        </div>
        <div className="text-[0.8125rem] text-[#9CA3AF] mt-0.5">{stat.label}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div ref={ref} className="text-[1.75rem] font-extrabold text-[#1A1A2E] tracking-tight">
        <span className="text-[#5E48E8]">{count}</span>{stat.unit}
      </div>
      <div className="text-[0.8125rem] text-[#9CA3AF] mt-0.5">{stat.label}</div>
    </div>
  );
}

/* ─── iPhone 15 Pro Max mockup (Dynamic Island) ─── */
function PhoneMockup({ t, gyroRef }) {
  return (
    <div className="relative w-[260px] lg:w-[300px]" ref={gyroRef}>
      {/* Titanium frame */}
      <div
        className="rounded-[48px] p-[3px] relative"
        style={{
          background: 'linear-gradient(145deg, #2A2A2E 0%, #1A1A1E 40%, #3A3A3E 60%, #1A1A1E 100%)',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 25px 60px rgba(0,0,0,0.25), 0 0 40px rgba(94,72,232,0.12), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      >
        {/* Inner bezel */}
        <div className="bg-[#000000] rounded-[46px] p-[10px] relative">
          {/* Screen */}
          <div className="bg-white rounded-[38px] overflow-hidden aspect-[9/19.5] relative">
            {/* Dynamic Island */}
            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
              <div
                className="h-[28px] w-[90px] bg-[#000000] rounded-full relative flex items-center justify-center"
                style={{ boxShadow: '0 0 4px rgba(0,0,0,0.3)' }}
              >
                {/* Camera lens */}
                <div className="absolute left-[16px] w-[10px] h-[10px] rounded-full bg-[#1a1a2e] border border-[#333] flex items-center justify-center">
                  <div className="w-[4px] h-[4px] rounded-full bg-[#0a0a15]" />
                </div>
              </div>
            </div>

            {/* Screen content */}
            <div className="h-full flex flex-col p-[50px_14px_14px] bg-gradient-to-b from-white to-[#F8F9FA]">
              {/* Status bar */}
              <div className="flex justify-between items-center mb-3 px-1">
                <div className="text-[10px] font-semibold text-[#1A1A2E]">9:41</div>
                <div className="flex items-center gap-1">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><rect x="0.5" y="3" width="2.5" height="6.5" rx="0.5" fill="#1A1A2E"/><rect x="3.8" y="2" width="2.5" height="7.5" rx="0.5" fill="#1A1A2E"/><rect x="7.1" y="1" width="2.5" height="8.5" rx="0.5" fill="#1A1A2E"/><rect x="10.4" y="0" width="2.5" height="9.5" rx="0.5" fill="#1A1A2E"/></svg>
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M6.5 2C8.4 2 10.1 2.8 11.3 4.1L12.5 2.9C11 1.3 8.9 0.3 6.5 0.3C4.1 0.3 2 1.3 0.5 2.9L1.7 4.1C2.9 2.8 4.6 2 6.5 2Z" fill="#1A1A2E"/><path d="M6.5 5C7.8 5 8.9 5.5 9.7 6.3L10.9 5.1C9.8 4 8.2 3.3 6.5 3.3C4.8 3.3 3.2 4 2.1 5.1L3.3 6.3C4.1 5.5 5.2 5 6.5 5Z" fill="#1A1A2E"/><circle cx="6.5" cy="8.5" r="1.5" fill="#1A1A2E"/></svg>
                  <div className="flex items-center">
                    <div className="w-[18px] h-[9px] border border-[#1A1A2E] rounded-[2px] relative">
                      <div className="absolute inset-[1px] right-[3px] bg-[#1A1A2E] rounded-[1px]" />
                    </div>
                    <div className="w-[1.5px] h-[4px] bg-[#1A1A2E] rounded-r-sm ml-[0.5px]" />
                  </div>
                </div>
              </div>

              {/* App header */}
              <div className="flex justify-between items-center mb-3">
                <div className="text-sm font-bold text-[#1A1A2E]">Clix Taxi</div>
                <div className="flex items-center gap-1.5 text-[0.625rem] text-[#5E48E8] font-semibold">
                  <span className="w-1.5 h-1.5 bg-[#5E48E8] rounded-full animate-[pulse-dot_2s_ease-in-out_infinite]" />
                  {t('p_app_status')}
                </div>
              </div>

              {/* Map area – Lviv mini-map */}
              <div className="flex-1 rounded-2xl overflow-hidden relative mb-3">
                <LvivMiniMap variant="light" />
              </div>

              {/* Ride card */}
              <div className="bg-white border border-[#5E48E8]/12 rounded-2xl p-3.5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] animate-[slide-up_0.6s_ease-out_1.5s_both]">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[0.5625rem] font-semibold text-[#5E48E8] uppercase tracking-wide">{t('p_ride_label')}</span>
                  <span className="text-base font-extrabold text-[#10B981]">890 ₴</span>
                </div>
                <div className="flex flex-col gap-1.5 mb-3">
                  <div className="flex items-center gap-2 text-[0.625rem] text-[#6B7280]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5E48E8]" />
                    {t('p_ride_from')}
                  </div>
                  <div className="flex items-center gap-2 text-[0.625rem] text-[#6B7280]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    {t('p_ride_to')}
                  </div>
                </div>
                <button className="w-full py-2.5 bg-[#5E48E8] text-white rounded-[10px] text-[0.6875rem] font-bold text-center shadow-[0_4px_12px_rgba(94,72,232,0.3)] hover:bg-[#8B7CF6] transition-all duration-200 border-none cursor-pointer">
                  {t('p_ride_order')}
                </button>
              </div>
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-[#1A1A2E] rounded-full opacity-20" />
          </div>
        </div>
      </div>

      {/* Side buttons – volume */}
      <div className="absolute left-[-2.5px] top-[85px] w-[3px] h-[22px] bg-[#2A2A2E] rounded-l-sm" />
      <div className="absolute left-[-2.5px] top-[115px] w-[3px] h-[36px] bg-[#2A2A2E] rounded-l-sm" />
      <div className="absolute left-[-2.5px] top-[157px] w-[3px] h-[36px] bg-[#2A2A2E] rounded-l-sm" />
      {/* Side button – power / action */}
      <div className="absolute right-[-2.5px] top-[110px] w-[3px] h-[52px] bg-[#2A2A2E] rounded-r-sm" />

      {/* Floating price badge */}
      <div className="absolute -left-10 top-[38%] bg-white border border-[#5E48E8]/12 rounded-xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_0_20px_rgba(94,72,232,0.08)] z-5 flex items-center gap-2.5 animate-[float-in_0.8s_ease-out_2s_both] max-lg:hidden">
        <span className="text-xl">💰</span>
        <div>
          <div className="text-[0.625rem] font-semibold text-[#9CA3AF] uppercase tracking-wide">{t('p_price_label')}</div>
          <div className="text-base font-extrabold text-[#5E48E8]">890 ₴</div>
        </div>
      </div>
    </div>
  );
}

export default function PassengerHero() {
  const { t } = useApp();
  const gyroRef = useGyroscope(0.6);

  return (
    <section className="lg:min-h-screen flex items-center pt-[100px] pb-10 lg:pb-16 relative overflow-hidden bg-white" id="p-hero">
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[15%] -right-[5%] w-[700px] h-[700px] rounded-full bg-[rgba(94,72,232,0.06)] blur-[80px] animate-[p-float_8s_ease-in-out_infinite]" />
        <div className="absolute -bottom-[10%] -left-[8%] w-[500px] h-[500px] rounded-full bg-[rgba(124,58,237,0.04)] blur-[80px] animate-[p-float_10s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-[rgba(94,72,232,0.03)] blur-[80px] animate-[p-float_12s_ease-in-out_infinite_2s]" />
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-2">
        {/* Content */}
        <div className="max-w-[580px] lg:max-w-none text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-[18px] py-2 bg-[#5E48E8]/6 border border-[#5E48E8]/12 rounded-full text-[0.8125rem] font-semibold text-[#5E48E8] mb-8 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            <div className="w-2 h-2 bg-[#10B981] rounded-full animate-[pulse-dot_2s_ease-in-out_infinite]" />
            {t('p_hero_badge')}
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#1A1A2E] animate-[fadeInUp_0.8s_ease-out_0.35s_both]">
            {t('p_hero_title_1')}<br />
            <span className="text-[#5E48E8]">{t('p_hero_title_2')}</span>
          </h1>

          <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-[#6B7280] leading-[1.7] mt-6 max-w-[480px] mx-auto lg:mx-0 animate-[fadeInUp_0.8s_ease-out_0.5s_both]">
            {t('p_hero_subtitle')}
          </p>

          <div className="mt-8 lg:mt-12 flex flex-wrap gap-4 lg:gap-6 justify-center lg:justify-start animate-[fadeInUp_0.8s_ease-out_0.65s_both]">
            <a href="#" className="inline-flex transition-all ease-spring duration-500 hover:scale-105 active-squish">
              <img src="/icons/App Store.svg" alt="App Store" className="w-[160px] lg:w-[180px] h-auto drop-shadow-md" />
            </a>
            <a href="#" className="inline-flex transition-all ease-spring duration-500 hover:scale-105 active-squish">
              <img src="/icons/Google Play.svg" alt="Google Play" className="w-[160px] lg:w-[180px] h-auto drop-shadow-md" />
            </a>
          </div>

          <div className="flex gap-8 lg:gap-12 mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-black/6 justify-center lg:justify-start flex-col sm:flex-row animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
            {[
              { val: '5', unit: ' хв', label: t('p_hero_stat_1') },
              { val: '0', unit: '%', label: t('p_hero_stat_2') },
              { val: '4.', unit: '9', label: t('p_hero_stat_3') },
            ].map((s, i) => (
              <AnimatedPassengerHeroStat key={i} stat={s} />
            ))}
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="flex justify-center items-center relative order-first lg:order-last animate-[fadeInUp_1s_ease-out_0.5s_both]">
          <PhoneMockup t={t} gyroRef={gyroRef} />
        </div>
      </div>
    </section>
  );
}
