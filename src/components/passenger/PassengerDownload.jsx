import { useApp } from '../../context/AppContext';
import * as Icons from '../shared/Icons';

export default function PassengerDownload() {
  const { t } = useApp();

  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-b from-[#F8F9FA] via-[#EEECF9] to-[#F8F9FA]" id="p-download">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_30%_50%,rgba(94,72,232,0.06),transparent_50%),radial-gradient(400px_circle_at_70%_50%,rgba(124,58,237,0.04),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(94,72,232,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(94,72,232,0.02)_1px,transparent_1px)] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none" />
      <div className="relative z-2 text-center max-w-[700px] mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5E48E8]/6 border border-[#5E48E8]/12 rounded-full text-[0.8125rem] font-semibold text-[#5E48E8] mb-6">
          <span className="w-3.5 h-3.5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"><Icons.Phone /></span> {t('p_download_label')}
        </div>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-[#1A1A2E] mb-6">
          {t('p_download_title')}
        </h2>
        <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-[#6B7280] leading-[1.7] mb-12">{t('p_download_subtitle')}</p>
        <div className="flex justify-center gap-6 flex-wrap mb-12">
          <a href="https://github.com/d1azs/Clix_Taxi" target="_blank" rel="noopener noreferrer" className="inline-flex transition-transform duration-350 hover:scale-105">
            <img src="/icons/App Store.svg" alt="App Store" className="w-[180px] h-auto" />
          </a>
          {/* Для скачування APK напряму з сайту, ви можете замінити посилання нижче на "/app-release.apk" */}
          <a href="https://github.com/d1azs/Clix_Taxi/releases" target="_blank" rel="noopener noreferrer" className="inline-flex transition-transform duration-350 hover:scale-105">
            <img src="/icons/Google Play.svg" alt="Google Play" className="w-[180px] h-auto" />
          </a>
        </div>
        <div className="hidden md:flex items-center justify-center gap-4 p-6 bg-white border border-black/6 rounded-2xl max-w-[360px] mx-auto shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
          <div className="w-20 h-20 bg-[#5E48E8] rounded-lg flex items-center justify-center text-[1.75rem] text-white shrink-0">📱</div>
          <div className="text-left">
            <p className="text-sm text-[#6B7280]"><strong className="text-[#1A1A2E]">{t('p_qr_title')}</strong></p>
            <p className="text-sm text-[#6B7280] leading-[1.5]">{t('p_qr_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
