export default function CTASection() {
  return (
    <section
      id="section-cta"
      className="relative min-h-screen flex items-center justify-center"
      style={{ zIndex: 1 }}
    >
      <div className="w-full max-w-[800px] mx-auto px-6 py-24 flex flex-col items-center text-center">
        <h2 className="text-[42px] leading-[1.1] font-medium tracking-[-0.03em] text-black mb-6 max-w-[800px] text-balance">
          Müziğini
          <br />
          Sahneni Genişlet
        </h2>

        <p className="text-[16px] leading-[24px] font-normal text-zinc-500 max-w-[540px] mb-10">
          Gituar ile akorlarını düzenle, dijital repertuarını oluştur ve Popüler şarkıları saniyeler içinde keşfet. Müzik yolculuğunda ihtiyacın olan her şey tek bir platformda.
        </p>

        <a
          href="#download"
          className="bg-[#0088FF] hover:bg-[#0077EE] transition-all duration-200 flex h-[40px] items-center justify-center px-8 rounded-full shadow-sm"
        >
          <span className="text-[13px] font-medium text-white">Uygulamayı indir</span>
        </a>

        {/* Güven sembolleri */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16">
          {[
            { icon: '🔒', text: 'Gizlilik öncelikli' },
            { icon: '⚡', text: 'Anında kurulum' },
            { icon: '🎸', text: 'Müzisyen dostu' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span className="text-zinc-400 text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
