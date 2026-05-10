import Navigation from '@/components/Navigation';
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
      <div className="relative">
        <Navigation />

        {/* Sections */}
        <main>
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
