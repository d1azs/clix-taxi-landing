import { useApp } from '../../context/AppContext';
import * as Icons from '../shared/Icons';

export default function DriverSolution() {
  const { t } = useApp();
  const oldSteps = [t('comp_old_1'), t('comp_old_2'), t('comp_old_3'), t('comp_old_4')];
  const newSteps = [t('comp_new_1'), t('comp_new_2'), t('comp_new_3')];
  const items = [
    { title: t('sol_item_1_title'), desc: t('sol_item_1_desc') },
    { title: t('sol_item_2_title'), desc: t('sol_item_2_desc') },
    { title: t('sol_item_3_title'), desc: t('sol_item_3_desc') },
  ];

  return (
    <section className="py-20 bg-[linear-gradient(180deg,#0F0A2A_0%,#0D0830_50%,#0F0A2A_100%)] relative overflow-hidden" id="solution">
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse,rgba(94,72,232,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="container">
        
        {/* Centered Header block (just like Features) */}
        <div className="text-center max-w-[800px] mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center justify-center gap-1.5 px-6 py-2 bg-[#5E48E8]/10 border border-[#5E48E8]/20 rounded-full text-[0.8125rem] font-semibold text-[#8B7CF6] mb-6 shadow-sm">
            <span className="w-3.5 h-3.5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"><Icons.Lightbulb /></span>
            <span className="leading-none">{t('solution_label')}</span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-white mb-6">
            {t('solution_title_text')} <span className="gradient-text">{t('solution_title_gradient')}</span>
          </h2>
          <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-white/70 leading-[1.7]">{t('solution_subtitle')}</p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1000px] mx-auto">
          {/* Comparison Visual */}
          <div className="flex justify-center relative">
            <div className="flex flex-col gap-6 w-full max-w-[400px]">
              <div className="p-8 rounded-3xl bg-[#EF4444]/5 border border-[#EF4444]/15">
                <div className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#EF4444] mb-4">{t('comp_old_label')}</div>
                <div className="flex flex-col gap-2.5">
                  {oldSteps.map((s, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-[0.8125rem] text-white/60">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full text-[0.6875rem] font-bold bg-[#EF4444]/15 text-[#EF4444] shrink-0">{i+1}</span>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center text-2xl text-white/20">↓</div>
              <div className="p-8 rounded-3xl bg-[#5E48E8]/8 border border-[#5E48E8]/25 shadow-[0_0_40px_rgba(94,72,232,0.3)]">
                <div className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#8B7CF6] mb-4">{t('comp_new_label')}</div>
                <div className="flex flex-col gap-2.5">
                  {newSteps.map((s, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-[0.8125rem] text-white/60">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full text-[0.6875rem] font-bold bg-[#5E48E8]/20 text-[#8B7CF6] shrink-0">{i+1}</span>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Solution Checkmarks */}
          <div className="flex flex-col gap-4">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-5 p-6 bg-[#5E48E8]/5 border border-[#5E48E8]/10 rounded-2xl transition-all duration-350 hover:bg-[#5E48E8]/10 hover:border-[#5E48E8]/25 hover:-translate-y-1">
                <div className="w-8 h-8 flex items-center justify-center bg-[#10B981]/15 rounded-full text-sm font-bold text-[#10B981] shrink-0 mt-0.5">✓</div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1.5">{item.title}</h4>
                  <p className="text-[0.9375rem] text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
