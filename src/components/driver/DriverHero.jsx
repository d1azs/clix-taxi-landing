import { useApp } from '../../context/AppContext';
import { useReveal } from '../../hooks/useReveal';
import { useCountUp } from '../../hooks/useCountUp';
import { useGyroscope } from '../../hooks/useGyroscope';

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

/* ─── iPhone 15 Pro Max mockup (Dark / Driver mode) ─── */
function DriverPhoneMockup({ t, tilt }) {
  const tiltStyle = {
    transform: `perspective(1000px) rotateY(${-tilt.x * 12}deg) rotateX(${-tilt.y * 8}deg)`,
    transition: 'transform 0.15s ease-out',
  };

  return (
    <div className="relative w-[260px] lg:w-[300px]" style={tiltStyle}>
      {/* Titanium frame */}
      <div
        className="rounded-[48px] p-[3px] relative"
        style={{
          background: 'linear-gradient(145deg, #1A1A1E 0%, #0F0F12 40%, #2A2A2E 60%, #0F0F12 100%)',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 25px 60px rgba(15,10,42,0.3), 0 0 60px rgba(94,72,232,0.25), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        <div className="bg-[#000000] rounded-[46px] p-[10px] relative">
          <div className="bg-[#0F0A2A] rounded-[38px] overflow-hidden aspect-[9/19.5] relative">
            {/* Dynamic Island */}
            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
              <div
                className="h-[28px] w-[90px] bg-[#000000] rounded-full relative flex items-center justify-center"
                style={{ boxShadow: '0 0 4px rgba(0,0,0,0.5)' }}
              >
                <div className="absolute left-[16px] w-[10px] h-[10px] rounded-full bg-[#0a0a15] border border-[#222] flex items-center justify-center">
                  <div className="w-[4px] h-[4px] rounded-full bg-[#050510]" />
                </div>
              </div>
            </div>

            {/* Screen content */}
            <div className="h-full flex flex-col p-[50px_14px_14px] bg-gradient-to-b from-[#0F0A2A] to-[#0D0825]">
              {/* Status bar */}
              <div className="flex justify-between items-center mb-3 px-1">
                <div className="text-[10px] font-semibold text-white/80">9:41</div>
                <div className="flex items-center gap-1">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><rect x="0.5" y="3" width="2.5" height="6.5" rx="0.5" fill="white" fillOpacity="0.8"/><rect x="3.8" y="2" width="2.5" height="7.5" rx="0.5" fill="white" fillOpacity="0.8"/><rect x="7.1" y="1" width="2.5" height="8.5" rx="0.5" fill="white" fillOpacity="0.8"/><rect x="10.4" y="0" width="2.5" height="9.5" rx="0.5" fill="white" fillOpacity="0.8"/></svg>
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M6.5 2C8.4 2 10.1 2.8 11.3 4.1L12.5 2.9C11 1.3 8.9 0.3 6.5 0.3C4.1 0.3 2 1.3 0.5 2.9L1.7 4.1C2.9 2.8 4.6 2 6.5 2Z" fill="white" fillOpacity="0.8"/><path d="M6.5 5C7.8 5 8.9 5.5 9.7 6.3L10.9 5.1C9.8 4 8.2 3.3 6.5 3.3C4.8 3.3 3.2 4 2.1 5.1L3.3 6.3C4.1 5.5 5.2 5 6.5 5Z" fill="white" fillOpacity="0.8"/><circle cx="6.5" cy="8.5" r="1.5" fill="white" fillOpacity="0.8"/></svg>
                  <div className="flex items-center">
                    <div className="w-[18px] h-[9px] border border-white/60 rounded-[2px] relative">
                      <div className="absolute inset-[1px] right-[3px] bg-[#10B981] rounded-[1px]" />
                    </div>
                    <div className="w-[1.5px] h-[4px] bg-white/60 rounded-r-sm ml-[0.5px]" />
                  </div>
                </div>
              </div>

              {/* App header */}
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

            {/* Home indicator */}
            <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white rounded-full opacity-15" />
          </div>
        </div>
      </div>

      {/* Side buttons */}
      <div className="absolute left-[-2.5px] top-[85px] w-[3px] h-[22px] bg-[#1A1A1E] rounded-l-sm" />
      <div className="absolute left-[-2.5px] top-[115px] w-[3px] h-[36px] bg-[#1A1A1E] rounded-l-sm" />
      <div className="absolute left-[-2.5px] top-[157px] w-[3px] h-[36px] bg-[#1A1A1E] rounded-l-sm" />
      <div className="absolute right-[-2.5px] top-[110px] w-[3px] h-[52px] bg-[#1A1A1E] rounded-r-sm" />

      {/* Floating notification */}
      <div className="absolute -right-[30px] top-[35%] bg-[#1A1145] border border-[#5E48E8]/20 rounded-xl px-4 py-3 shadow-[0_12px_40px_rgba(15,10,42,0.15),0_0_40px_rgba(94,72,232,0.3)] z-5 min-w-[180px] animate-[float-in_0.8s_ease-out_2s_both] max-lg:hidden">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#10B981] mb-1">✓ {t('notif_title')}</div>
        <div className="text-[0.6875rem] text-white/60">{t('notif_text')}</div>
      </div>
    </div>
  );
}

export default function DriverHero() {
  const { t } = useApp();
  const badgeRef = useReveal();
  const tilt = useGyroscope(0.6);

  return (
    <section className="lg:min-h-screen flex items-center pt-[100px] pb-10 lg:pb-16 relative overflow-hidden bg-[#0F0A2A]" id="hero">
      {/* Ambient glows */}
      <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(94,72,232,0.15)_0%,rgba(124,58,237,0.05)_40%,transparent_70%)] pointer-events-none animate-[pulse-glow_6s_ease-in-out_infinite]" />
      <div className="absolute -bottom-[10%] -left-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(124,58,237,0.1)_0%,transparent_60%)] pointer-events-none animate-[pulse-glow_8s_ease-in-out_infinite_reverse]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(94,72,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(94,72,232,0.03)_1px,transparent_1px)] bg-[length:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] pointer-events-none" />

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-2">
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

          <div className="mt-8 lg:mt-12 flex flex-wrap gap-4 lg:gap-6 justify-center lg:justify-start animate-[fadeInUp_0.8s_ease-out_0.65s_both]">
            <a href="#" className="inline-flex transition-all ease-spring duration-500 hover:scale-105 active-squish">
              <img src="/icons/App Store.svg" alt="App Store" className="w-[160px] lg:w-[180px] h-auto drop-shadow-lg" />
            </a>
            <a href="#" className="inline-flex transition-all ease-spring duration-500 hover:scale-105 active-squish">
              <img src="/icons/Google Play.svg" alt="Google Play" className="w-[160px] lg:w-[180px] h-auto drop-shadow-lg" />
            </a>
          </div>

          <div className="flex gap-8 lg:gap-12 mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-white/8 justify-center lg:justify-start flex-col sm:flex-row animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
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
          <DriverPhoneMockup t={t} tilt={tilt} />
        </div>
      </div>
    </section>
  );
}
