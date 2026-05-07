import { useApp } from '../../context/AppContext';
import { useReveal } from '../../hooks/useReveal';
import * as Icons from '../shared/Icons';

export default function DriverProblem() {
  const { t } = useApp();
  const headerRef = useReveal();

  const problems = [
    { icon: <Icons.Chat />, title: t('problem_1_title'), desc: t('problem_1_desc') },
    { icon: <Icons.Handshake />, title: t('problem_2_title'), desc: t('problem_2_desc') },
    { icon: <Icons.Money />, title: t('problem_3_title'), desc: t('problem_3_desc') },
    { icon: <Icons.Car />, title: t('problem_4_title'), desc: t('problem_4_desc') },
  ];

  const messages = [
    { sender: 'Диспетчер Олег', text: t('tg_msg_1'), time: '14:23' },
    { sender: 'Виктор', text: t('tg_msg_2'), time: '14:23' },
    { sender: 'Андрій', text: t('tg_msg_3'), time: '14:23' },
    { sender: 'Диспетчер Олег', text: t('tg_msg_4'), time: '14:24', taken: true },
    { sender: 'Андрій', text: t('tg_msg_5'), time: '14:24' },
  ];

  return (
    <section className="py-20 bg-[linear-gradient(180deg,#0F0A2A_0%,#0A0720_50%,#0F0A2A_100%)] relative" id="problem">
      <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(94,72,232,0.2),transparent)]" />
      <div className="container">
        <div ref={headerRef} className="reveal text-center max-w-[700px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5E48E8]/10 border border-[#5E48E8]/20 rounded-full text-[0.8125rem] font-semibold text-[#8B7CF6] mb-6">
            <span className="w-3.5 h-3.5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"><Icons.Warning /></span> {t('problem_label')}
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-white">{t('problem_title')}</h2>
          <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-white/70 leading-[1.7] mt-4">{t('problem_subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="reveal visible bg-white/2 border border-white/6 rounded-2xl p-8 relative overflow-hidden group transition-all duration-350 hover:border-[#EF4444]/20 hover:bg-[#EF4444]/3 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#EF4444] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
              <div className="w-12 h-12 flex items-center justify-center bg-[#EF4444]/10 rounded-xl text-[1.375rem] mb-4">{p.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-[0.9375rem] text-white/50 leading-[1.6]">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Telegram mockup */}
        <div className="reveal visible mt-16 bg-white/2 border border-white/6 rounded-3xl p-8 max-w-[600px] mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F0A2A] pointer-events-none z-10" />
          <div className="flex items-center gap-2.5 pb-3.5 border-b border-white/6 mb-3.5">
            <div className="w-9 h-9 bg-gradient-to-br from-[#229ED9] to-[#0088CC] rounded-full flex items-center justify-center text-sm">✈️</div>
            <div>
              <div className="text-sm font-semibold text-white">{t('tg_chat_name')}</div>
              <div className="text-[0.6875rem] text-white/35">{t('tg_chat_count')}</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {messages.map((m, i) => (
              <div key={i} className={`bg-white/4 rounded-[12px_12px_12px_4px] px-3.5 py-2.5 max-w-[85%] ${m.taken ? 'opacity-40 line-through' : ''}`}>
                <div className="text-[0.6875rem] font-semibold text-[#8B7CF6] mb-0.5">{m.sender}</div>
                <div className="text-[0.8125rem] text-white/60 leading-[1.5]">{m.text}</div>
                <div className="text-[0.625rem] text-white/25 text-right mt-1">{m.time}</div>
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] text-[#EF4444] z-[5] drop-shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-[fadeInUp_0.6s_ease-out_1s_both]">✕</div>
        </div>
      </div>
    </section>
  );
}
