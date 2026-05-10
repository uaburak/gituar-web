export default function HeroSection() {
  return (
    <section
      id="section-hero"
      className="relative h-[100vh] w-full flex flex-col items-center justify-start pt-[160px]"
      style={{ zIndex: 1 }}
    >
      {/* Metin — üst orta */}
      <div className="flex flex-col items-center text-center px-6">
        <h1 className="text-[42px] leading-[1.1] font-medium tracking-[-0.03em] text-[var(--text-primary)] max-w-[600px] text-balance">
          Müziğini
          <br />
          Sahneni Genişlet
        </h1>

        <p className="mt-4 text-[16px] leading-[24px] font-normal text-[var(--text-secondary)] max-w-[600px]">
          Gituar ile akorlarını düzenle, dijital repertuarını oluştur ve Popüler şarkıları saniyeler içinde keşfet. Müzik yolculuğunda ihtiyacın olan her şey tek bir platformda.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a href="#download" tabIndex={0}>
            <img 
              className="bn46 h-[44px] w-auto" 
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
              alt="Download on the App Store" 
            />
          </a>
        </div>
      </div>
    </section>
  );
}
