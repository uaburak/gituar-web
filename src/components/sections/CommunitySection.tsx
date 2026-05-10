const STATS = [
  { value: '10.000+', label: 'Şarkı' },
  { value: '2.000+', label: 'Aktif Kullanıcı' },
  { value: '500+', label: 'Eklenmiş Akor' },
];

export default function CommunitySection() {
  return (
    <section
      id="section-community"
      className="relative min-h-screen flex items-center"
      style={{ zIndex: 1 }}
    >
      <div className="w-full max-w-[800px] mx-auto px-6 py-24">
        {/* Sol tarafta metin - telefon sağda duracak */}
        <div className="max-w-[400px] flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 w-fit">
            <span className="text-[12px] font-medium text-emerald-500 tracking-wide uppercase">
              Topluluk
            </span>
          </div>

          <h2 className="text-[36px] sm:text-[44px] leading-[1.1] font-bold tracking-[-0.025em] text-black">
            Müziği Birlikte
            <br />
            <span className="text-emerald-500">Büyütüyoruz!</span>
          </h2>

          <p className="text-[16px] leading-[1.7] text-zinc-500">
            Aradığın şarkı yok mu?{' '}
            <span className="text-black font-medium">Kendi çıkardığın akorları uygulamaya ekle</span>,
            yönetici onayından geçsin ve binlerce müzisyenle paylaş.
          </p>

          {/* Stats */}
          <div className="flex gap-6 pt-2">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className="text-[28px] font-bold text-black tracking-tight">{s.value}</span>
                <span className="text-[13px] text-zinc-500">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Process Steps */}
          <div className="flex flex-col gap-3 mt-2">
            {[
              { step: '1', text: 'Akorları çıkar ve kaydet' },
              { step: '2', text: 'Uygulamaya gönder' },
              { step: '3', text: 'Onaylandıktan sonra herkesle paylaşıldı!' },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                  <span className="text-[12px] font-bold text-white">{item.step}</span>
                </div>
                <span className="text-[14px] text-zinc-600">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
