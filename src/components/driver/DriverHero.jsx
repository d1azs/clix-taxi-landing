import { useApp } from '../../context/AppContext';
import { useReveal } from '../../hooks/useReveal';
import { useCountUp } from '../../hooks/useCountUp';

function AnimatedHeroStat({ stat }) {
  const [ref, count] = useCountUp(stat.val, 2000);
  return (
    <div className="flex flex-col">
      <div ref={ref} className="text-[1.75rem] font-extrabold text-white tracking-tight">
        <span className="text-[#8B7CF6]">{count}</span>{stat.unit}
      </div>
      <div className="text-[0.8125rem] text-white/45 mt-0.5">{stat.label}</div>
    </div>
  );
}

export default function DriverHero() {
  const { t } = useApp();
  const badgeRef = useReveal();

  return (
    <section className="min-h-screen flex items-center pt-[100px] pb-16 relative overflow-hidden bg-[#0F0A2A]" id="hero">
      {/* Ambient glows */}
      <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(94,72,232,0.15)_0%,rgba(124,58,237,0.05)_40%,transparent_70%)] pointer-events-none animate-[pulse-glow_6s_ease-in-out_infinite]" />
      <div className="absolute -bottom-[10%] -left-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(124,58,237,0.1)_0%,transparent_60%)] pointer-events-none animate-[pulse-glow_8s_ease-in-out_infinite_reverse]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(94,72,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(94,72,232,0.03)_1px,transparent_1px)] bg-[length:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] pointer-events-none" />

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-2">
        {/* Content */}
        <div className="max-w-[580px] lg:max-w-none text-center lg:text-left">
          <div ref={badgeRef} className="reveal inline-flex items-center gap-2 px-[18px] py-2 bg-[#5E48E8]/12 border border-[#5E48E8]/25 rounded-full text-[0.8125rem] font-semibold text-[#8B7CF6] mb-8 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            <div className="w-2 h-2 bg-[#10B981] rounded-full animate-[pulse-dot_2s_ease-in-out_infinite]" />
            {t('hero_badge')}
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white animate-[fadeInUp_0.8s_ease-out_0.35s_both]">
            {t('hero_title_1')}<br />
            <span className="text-[#8B7CF6]">{t('hero_title_2')}</span>
          </h1>

          <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-white/70 leading-[1.7] mt-6 max-w-[480px] lg:max-w-[480px] mx-auto lg:mx-0 animate-[fadeInUp_0.8s_ease-out_0.5s_both]">
            {t('hero_subtitle')}
          </p>

          <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start animate-[fadeInUp_0.8s_ease-out_0.65s_both]">
            <a href="#" className="inline-flex transition-all ease-spring duration-500 hover:scale-105 active-squish">
              <img src="/icons/App Store.svg" alt="App Store" className="w-[180px] h-auto drop-shadow-lg" />
            </a>
            <a href="#" className="inline-flex transition-all ease-spring duration-500 hover:scale-105 active-squish">
              <img src="/icons/Google Play.svg" alt="Google Play" className="w-[180px] h-auto drop-shadow-lg" />
            </a>
          </div>

          <div className="flex gap-12 mt-12 pt-8 border-t border-white/8 justify-center lg:justify-start flex-col sm:flex-row animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
            {[
              { val: '3', unit: 'x', label: t('hero_stat_1') },
              { val: '0', unit: '%', label: t('hero_stat_2') },
              { val: '1', unit: ' тап', label: t('hero_stat_3') },
            ].map((s, i) => (
              <AnimatedHeroStat key={i} stat={s} />
            ))}
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="flex justify-center items-center relative order-first lg:order-last animate-[fadeInUp_1s_ease-out_0.5s_both]">
          <div className="relative w-[260px] lg:w-[300px] perspective-[1000px]">
            <div className="bg-black rounded-[40px] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_20px_60px_rgba(15,10,42,0.2),0_0_40px_rgba(94,72,232,0.3)] relative -rotate-y-[5deg] rotate-x-[2deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-600">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-7 bg-black rounded-b-2xl z-10" />
              <div className="bg-[#0F0A2A] rounded-[30px] overflow-hidden aspect-[9/19] relative">
                <div className="h-full flex flex-col p-[48px_16px_16px] bg-gradient-to-b from-[#0F0A2A] to-[#0D0825]">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm font-bold text-white">Clix Taxi</div>
                    <div className="flex items-center gap-1.5 text-[0.625rem] text-[#10B981] font-semibold">
                      <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full" />
                      {t('app_status')}
                    </div>
                  </div>
                  {/* Map area */}
                  <div className="flex-1 bg-[#1A1145] rounded-2xl overflow-hidden relative mb-3">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(94,72,232,0.15)_0%,transparent_50%),linear-gradient(135deg,#1A1145_0%,#241B5E_100%)] flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(94,72,232,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(94,72,232,0.06)_1px,transparent_1px)] bg-[length:20px_20px]" />
                      <div className="w-8 h-8 bg-[#5E48E8] rounded-[50%_50%_50%_0] -rotate-45 relative z-2 shadow-[0_0_20px_rgba(94,72,232,0.5)] animate-[bounce-pin_2s_ease-in-out_infinite]" />
                    </div>
                  </div>
                  {/* Order card */}
                  <div className="bg-[#1A1145] border border-[#5E48E8]/20 rounded-2xl p-3.5 animate-[slide-up_0.6s_ease-out_1.5s_both]">
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="text-[0.5625rem] font-semibold text-[#8B7CF6] uppercase tracking-wide">{t('order_label')}</span>
                      <span className="text-base font-extrabold text-[#10B981]">890 ₴</span>
                    </div>
                    <div className="flex flex-col gap-1.5 mb-3">
                      <div className="flex items-center gap-2 text-[0.625rem] text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B7CF6] shadow-[0_0_6px_rgba(139,124,246,0.5)]" />
                        {t('order_pickup')}
                      </div>
                      <div className="flex items-center gap-2 text-[0.625rem] text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                        {t('order_dropoff')}
                      </div>
                    </div>
                    <button className="w-full py-2.5 bg-[#5E48E8] text-white rounded-[10px] text-[0.6875rem] font-bold text-center shadow-[0_4px_12px_rgba(94,72,232,0.4)] hover:bg-[#8B7CF6] transition-all duration-200 border-none cursor-pointer">
                      {t('order_accept')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating notification */}
            <div className="absolute -right-[30px] top-[35%] bg-[#1A1145] border border-[#5E48E8]/20 rounded-xl px-4 py-3 shadow-[0_12px_40px_rgba(15,10,42,0.15),0_0_40px_rgba(94,72,232,0.3)] z-5 min-w-[180px] animate-[float-in_0.8s_ease-out_2s_both] max-lg:hidden">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#10B981] mb-1">✓ {t('notif_title')}</div>
              <div className="text-[0.6875rem] text-white/60">{t('notif_text')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
