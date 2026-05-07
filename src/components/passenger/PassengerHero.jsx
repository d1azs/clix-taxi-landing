import { useApp } from '../../context/AppContext';
import { useCountUp } from '../../hooks/useCountUp';

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

export default function PassengerHero() {
  const { t } = useApp();

  return (
    <section className="min-h-screen flex items-center pt-[100px] pb-16 relative overflow-hidden bg-white" id="p-hero">
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[15%] -right-[5%] w-[700px] h-[700px] rounded-full bg-[rgba(94,72,232,0.06)] blur-[80px] animate-[p-float_8s_ease-in-out_infinite]" />
        <div className="absolute -bottom-[10%] -left-[8%] w-[500px] h-[500px] rounded-full bg-[rgba(124,58,237,0.04)] blur-[80px] animate-[p-float_10s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-[rgba(94,72,232,0.03)] blur-[80px] animate-[p-float_12s_ease-in-out_infinite_2s]" />
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-2">
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

          <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start animate-[fadeInUp_0.8s_ease-out_0.65s_both]">
            <a href="#" className="inline-flex transition-all ease-spring duration-500 hover:scale-105 active-squish">
              <img src="/icons/App Store.svg" alt="App Store" className="w-[180px] h-auto drop-shadow-md" />
            </a>
            <a href="#" className="inline-flex transition-all ease-spring duration-500 hover:scale-105 active-squish">
              <img src="/icons/Google Play.svg" alt="Google Play" className="w-[180px] h-auto drop-shadow-md" />
            </a>
          </div>

          <div className="flex gap-12 mt-12 pt-8 border-t border-black/6 justify-center lg:justify-start flex-col sm:flex-row animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
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
          <div className="relative w-[260px] lg:w-[300px] perspective-[1000px]">
            <div className="bg-[#1A1A2E] rounded-[40px] p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_20px_60px_rgba(0,0,0,0.15),0_0_40px_rgba(94,72,232,0.15)] relative rotate-y-[5deg] rotate-x-[2deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-600">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-7 bg-[#1A1A2E] rounded-b-2xl z-10" />
              <div className="bg-white rounded-[30px] overflow-hidden aspect-[9/19] relative">
                <div className="h-full flex flex-col p-[48px_16px_16px] bg-gradient-to-b from-white to-[#F8F9FA]">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm font-bold text-[#1A1A2E]">Clix Taxi</div>
                    <div className="flex items-center gap-1.5 text-[0.625rem] text-[#5E48E8] font-semibold">
                      <span className="w-1.5 h-1.5 bg-[#5E48E8] rounded-full animate-[pulse-dot_2s_ease-in-out_infinite]" />
                      {t('p_app_status')}
                    </div>
                  </div>
                  {/* Map area */}
                  <div className="flex-1 bg-[#F0F0F5] rounded-2xl overflow-hidden relative mb-3">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_60%_50%,rgba(94,72,232,0.08)_0%,transparent_50%),linear-gradient(135deg,#F0F0F5_0%,#E8E8F0_100%)] flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(94,72,232,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(94,72,232,0.04)_1px,transparent_1px)] bg-[length:20px_20px]" />
                      <div className="w-7 h-7 bg-[#5E48E8] rounded-[50%_50%_50%_0] -rotate-45 relative z-2 shadow-[0_0_16px_rgba(94,72,232,0.35)] animate-[bounce-pin_2s_ease-in-out_infinite]" />
                      <div className="absolute w-0.5 h-[60px] bg-gradient-to-b from-[#5E48E8] to-[#10B981] top-1/2 left-[calc(50%+30px)] rotate-[30deg] opacity-50 rounded-sm" />
                      <div className="absolute bottom-[30%] right-[25%] text-xl animate-[car-move_4s_ease-in-out_infinite]">🚕</div>
                    </div>
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
              </div>
            </div>

            {/* Floating price badge */}
            <div className="absolute -left-10 top-[38%] bg-white border border-[#5E48E8]/12 rounded-xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_0_20px_rgba(94,72,232,0.08)] z-5 flex items-center gap-2.5 animate-[float-in_0.8s_ease-out_2s_both] max-lg:hidden">
              <span className="text-xl">💰</span>
              <div>
                <div className="text-[0.625rem] font-semibold text-[#9CA3AF] uppercase tracking-wide">{t('p_price_label')}</div>
                <div className="text-base font-extrabold text-[#5E48E8]">890 ₴</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
