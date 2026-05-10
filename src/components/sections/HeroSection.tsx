export default function HeroSection() {
  return (
    <section
      id="section-hero"
      className="relative min-h-screen flex flex-col"
      style={{ zIndex: 1 }}
    >
      {/* Metin — üst orta, pt-[120px] header'ın altında başlasın */}
      <div className="flex flex-col items-center text-center pt-[60px] px-6 pb-12">
        <h1 className="text-[42px] leading-[1.1] font-medium tracking-[-0.03em] text-black max-w-[600px] text-balance">
          Müziğini
          <br />
          Sahneni Genişlet
        </h1>

        <p className="mt-4 text-[16px] leading-[24px] font-normal text-zinc-500 max-w-[540px] text-balance">
          Gituar ile akorlarını düzenle, dijital repertuarını oluştur ve Popüler şarkıları saniyeler içinde keşfet. Müzik yolculuğunda ihtiyacın olan her şey tek bir platformda.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#download"
            className="bg-[#0088FF] hover:bg-[#0077EE] transition-all duration-200 flex h-[40px] items-center justify-center px-6 rounded-full shadow-sm"
          >
            <span className="text-[13px] font-medium text-white">Uygulamayı indir</span>
          </a>
        </div>
      </div>

      {/* Boşluk — Three.js telefon bu alanda görünecek */}
      <div className="flex-1" style={{ minHeight: '55vh' }} />
    </section>
  );
}
