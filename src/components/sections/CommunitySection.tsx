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
          <h2 className="text-[36px] leading-[1.1] font-medium tracking-[-0.025em] text-black">
            Müziğini
            <br />
            Sahneni Genişlet
          </h2>

          <p className="text-[15px] leading-[1.6] text-zinc-500">
            Gituar ile akorlarını düzenle, dijital repertuarını oluştur ve Popüler şarkıları saniyeler içinde keşfet. Müzik yolculuğunda ihtiyacın olan her şey tek bir platformda.
          </p>

          {/* Stats */}
          <div className="flex gap-6 pt-2">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className="text-[24px] font-bold text-black tracking-tight">{s.value}</span>
                <span className="text-[12px] text-zinc-500">{s.label}</span>
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
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center shrink-0">
                  <span className="text-[11px] font-bold text-white">{item.step}</span>
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
