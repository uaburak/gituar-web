import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CommunitySection from '@/components/sections/CommunitySection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/Footer';
import IPhoneSceneLoader from '@/components/IPhoneSceneLoader';

export default function Home() {
  return (
    <>
      {/* Fixed Three.js Canvas — tüm scroll boyunca görünür kalır */}
      <IPhoneSceneLoader />

      {/* Scroll container — içerik katmanı */}
      <div className="relative" style={{ zIndex: 1 }}>
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-4 bg-white border-b border-zinc-100">
          <div className="flex items-center justify-between max-w-[800px] w-full">
            <div className="flex gap-3 items-center">
              <div className="relative size-[36px] rounded-[9px] overflow-hidden bg-black flex items-center justify-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="Gituar Logo"
                  fill
                  className="object-cover scale-[1.3]"
                />
              </div>
              <div className="flex flex-col leading-[1.2]">
                <span className="text-[16px] font-semibold text-black tracking-tight">Gituar</span>
                <span className="text-[11px] text-zinc-500">Gitar Repertuarın</span>
              </div>
            </div>

            <a
              href="#download"
              id="header-download-btn"
              className="bg-[#0088FF] hover:bg-[#0077EE] transition-all duration-200 flex h-[40px] items-center justify-center px-[10px] rounded-full shadow-sm"
            >
              <span className="text-[12px] px-4 font-medium text-white">Uygulamayı indir</span>
            </a>
          </div>
        </header>

        {/* Sections */}
        <main className="pt-[60px]">
          <HeroSection />
          <FeaturesSection />
          <CommunitySection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
}
