export default function CTASection() {
  return (
    <section
      id="section-cta"
      className="relative min-h-screen flex items-center justify-center"
      style={{ zIndex: 1 }}
    >
      <div className="w-full max-w-[800px] mx-auto px-6 py-24 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 bg-[#0088FF]/10 border border-[#0088FF]/20 rounded-full px-4 py-2 w-fit mb-6">
          <span className="w-2 h-2 rounded-full bg-[#0088FF] animate-pulse" />
          <span className="text-[12px] font-medium text-[#0088FF] tracking-wide uppercase">
            Ücretsiz İndir
          </span>
        </div>

        <h2 className="text-[40px] sm:text-[56px] leading-[1.1] font-bold tracking-[-0.03em] text-black mb-5 max-w-[560px] text-balance">
          İlk Şarkını Çalmaya
          <br />
          <span className="text-[#0088FF]">Hazır Mısın?</span>
        </h2>

        <p className="text-[17px] leading-[1.65] text-zinc-500 max-w-[420px] mb-10">
          Gituar&apos;ı ücretsiz indir, akıllı müzik asistanın her an yanında olsun.
        </p>

        <a
          href="#download"
          id="cta-appstore-btn"
          className="inline-flex items-center gap-3 bg-black hover:bg-zinc-800 transition-all duration-200 h-[56px] rounded-2xl px-7 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
        >
          <svg viewBox="0 0 384 512" className="w-[20px] h-[24px] fill-white shrink-0">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
          </svg>
          <div className="flex flex-col items-start text-white">
            <span className="text-[11px] leading-[1] opacity-75">Download on the</span>
            <span className="text-[19px] leading-[1.1] font-semibold tracking-[-0.02em]">App Store</span>
          </div>
        </a>

        {/* Güven sembolleri */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          {[
            { icon: '🔒', text: 'Gizlilik öncelikli' },
            { icon: '⚡', text: 'Anında kurulum' },
            { icon: '🎸', text: 'Müzisyen tarafından yapıldı' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span className="text-lg">{item.icon}</span>
              <span className="text-[13px] text-zinc-500">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
