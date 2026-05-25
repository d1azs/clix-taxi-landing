import { useApp } from '../../context/AppContext';
import * as Icons from '../shared/Icons';

export default function DriverDownload() {
  const { t } = useApp();

  return (
    <section className="relative overflow-hidden py-32 bg-[#0F0A2A]" id="download">
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_30%_50%,rgba(94,72,232,0.2),transparent_50%),radial-gradient(600px_circle_at_70%_50%,rgba(124,58,237,0.15),transparent_50%),linear-gradient(180deg,#0F0A2A_0%,#1A1145_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(94,72,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(94,72,232,0.03)_1px,transparent_1px)] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none" />
      <div className="relative z-2 text-center max-w-[700px] mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5E48E8]/10 border border-[#5E48E8]/20 rounded-full text-[0.8125rem] font-semibold text-[#8B7CF6] mb-6">
          <span className="w-3.5 h-3.5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"><Icons.Phone /></span> {t('download_label')}
        </div>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-white mb-6">
          {t('download_title_text')} <span className="gradient-text">{t('download_title_gradient')}</span>?
        </h2>
        <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-white/70 leading-[1.7] mb-12">{t('download_subtitle')}</p>
        <div className="flex justify-center gap-6 flex-wrap mb-12">
          {/* Для завантаження IPA (iOS) напряму з сайту, ви можете вказати "/clix_app.ipa" (або посилання на релізи) */}
          <a href="https://github.com/d1azs/Clix_Taxi/releases" target="_blank" rel="noopener noreferrer" className="inline-flex transition-transform duration-350 hover:scale-105">
            <img src="/icons/App Store.svg" alt="App Store" className="w-[180px] h-auto" />
          </a>
          {/* Для скачування APK напряму з сайту, ви можете замінити посилання нижче на "/app-release.apk" */}
          <a href="https://github.com/d1azs/Clix_Taxi/releases" target="_blank" rel="noopener noreferrer" className="inline-flex transition-transform duration-350 hover:scale-105">
            <img src="/icons/Google Play.svg" alt="Google Play" className="w-[180px] h-auto" />
          </a>
        </div>
        <div className="hidden md:flex items-center justify-center gap-4 p-6 bg-white/4 border border-white/8 rounded-2xl max-w-[360px] mx-auto">
          <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center text-[1.75rem] text-[#0F0A2A] shrink-0">⊞</div>
          <div className="text-left">
            <p className="text-sm text-white/50"><strong className="text-white">{t('qr_title')}</strong></p>
            <p className="text-sm text-white/50 leading-[1.5]">{t('qr_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
