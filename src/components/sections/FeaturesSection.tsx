const FEATURES = [
  {
    id: 'auto-scroll',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M12 5v14M8 15l4 4 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Otomatik Kaydırma',
    description:
      'Çalarken ekranı kaydırma derdine son. Hızını ayarla, sözler kendi aksın.',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
  },
  {
    id: 'repertoire',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Kendi Repertuvarın',
    description:
      'Favori şarkılarını grupla, sahne veya kamp setlist\'lerini saniyeler içinde oluştur.',
    gradient: 'from-violet-500/10 to-purple-500/10',
    border: 'border-violet-500/20',
    iconColor: 'text-violet-500',
    iconBg: 'bg-violet-500/10',
  },
  {
    id: 'cloud-sync',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M17 16a4 4 0 000-8 4.5 4.5 0 00-8.9.9A3.5 3.5 0 105 16h12z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Bulut Senkronizasyonu',
    description:
      'Tüm verilerin bulutta güvende. Telefonunu değiştirsen de repertuvarın hep seninle.',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    border: 'border-emerald-500/20',
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-500/10',
  },
  {
    id: 'design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Göz Yormayan Tasarım',
    description:
      'Sahnede ve loş ortamlarda bile rahat okunabilen, müzisyen dostu arayüz.',
    gradient: 'from-orange-500/10 to-amber-500/10',
    border: 'border-orange-500/20',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-500/10',
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="section-features"
      className="relative min-h-screen flex items-center"
      style={{ zIndex: 1 }}
    >
      <div className="w-full max-w-[800px] mx-auto px-6 py-24">
        {/* Sağ tarafta grid - telefon solda duracak */}
        <div className="ml-auto max-w-[460px]">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 w-fit mb-4">
              <span className="text-[12px] font-medium text-violet-500 tracking-wide uppercase">
                Özellikler
              </span>
            </div>
            <h2 className="text-[36px] leading-[1.1] font-medium tracking-[-0.025em] text-black">
              Müziğini
              <br />
              Sahneni Genişlet
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <div
                key={f.id}
                id={`feature-${f.id}`}
                className="relative p-5 rounded-2xl bg-zinc-50 border border-zinc-100 transition-colors duration-200 hover:bg-zinc-100/50"
              >
                <div className="inline-flex p-2 rounded-xl bg-black text-white mb-4">
                  {f.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-black mb-1.5">{f.title}</h3>
                <p className="text-[13px] leading-[1.6] text-zinc-500">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
