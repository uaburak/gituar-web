export default function HeroSection() {
  return (
    <section
      id="section-hero"
      className="relative min-h-screen flex flex-col"
      style={{ zIndex: 1 }}
    >
      {/* Metin — üst orta, pt-[120px] header'ın altında başlasın */}
      <div className="flex flex-col items-center text-center pt-[60px] px-6 pb-12">
        <h1 className="text-[42px] sm:text-[58px] leading-[1.08] font-bold tracking-[-0.03em] text-black max-w-[600px] text-balance">
          Tüm Akorlar Cebinde,
          <br />
          Ellerin Sadece{' '}
          <span className="text-[#0088FF]">Gitarda!</span>
        </h1>

        <p className="mt-5 text-[16px] sm:text-[18px] leading-[1.65] text-zinc-500 max-w-[480px] text-balance">
          Gituar ile binlerce şarkının akoruna ulaş, otomatik kaydırma
          özelliğiyle ritmi hiç kaçırma.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#download"
            id="hero-appstore-btn"
            className="inline-flex items-center gap-3 bg-black hover:bg-zinc-800 transition-all duration-200 h-[52px] rounded-2xl px-5 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg viewBox="0 0 384 512" className="w-[18px] h-[22px] fill-white shrink-0">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <div className="flex flex-col items-start text-white">
              <span className="text-[10px] leading-[1] opacity-75">Download on the</span>
              <span className="text-[17px] leading-[1.1] font-semibold tracking-[-0.02em]">App Store</span>
            </div>
          </a>
        </div>
      </div>

      {/* Boşluk — Three.js telefon bu alanda görünecek */}
      <div className="flex-1" style={{ minHeight: '55vh' }} />
    </section>
  );
}
