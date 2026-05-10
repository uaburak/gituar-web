import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gizlilik Politikası | Gituar",
  description: "Gituar uygulaması gizlilik politikası ve kişisel verilerin korunması hakkında bilgilendirme.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6 max-w-[800px] mx-auto">
        <h1 className="text-4xl font-semibold tracking-tight text-black mb-8">Gizlilik Politikası</h1>
        
        <div className="prose prose-zinc max-w-none text-zinc-600">
          <p className="text-sm mb-8">Son güncellenme tarihi: {new Date().toLocaleDateString('tr-TR')}</p>
          
          <h2 className="text-xl font-medium text-black mt-8 mb-4">1. Giriş</h2>
          <p className="mb-4">
            Gituar ("biz", "bize" veya "bizim") olarak gizliliğinize saygı duyuyoruz. Bu Gizlilik Politikası, mobil uygulamamızı ve hizmetlerimizi kullanırken kişisel bilgilerinizin nasıl toplandığını, kullanıldığını ve paylaşıldığını açıklar. Apple'ın App Store gizlilik standartlarına tam uyum sağlamayı taahhüt ediyoruz.
          </p>

          <h2 className="text-xl font-medium text-black mt-8 mb-4">2. Toplanan Veriler</h2>
          <p className="mb-4">
            Uygulamamızı kullandığınızda aşağıdaki türde bilgileri toplayabiliriz:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Kullanıcı Tarafından Sağlanan Veriler:</strong> Hesap oluştururken verdiğiniz e-posta adresi ve profil bilgileri.</li>
            <li><strong>Uygulama İçi Veriler:</strong> Favori şarkılarınız, repertuvarlarınız ve uygulama içi etkileşimleriniz.</li>
            <li><strong>Cihaz ve Teşhis Verileri:</strong> Cihaz modeli, işletim sistemi sürümü, çökme günlükleri (crash logs) ve performans verileri.</li>
          </ul>

          <h2 className="text-xl font-medium text-black mt-8 mb-4">3. Verilerin Kullanımı</h2>
          <p className="mb-4">
            Topladığımız bilgileri şu amaçlarla kullanırız:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Size kişiselleştirilmiş bir deneyim sunmak ve repertuvarlarınızı cihazlar arası senkronize etmek.</li>
            <li>Uygulama performansını izlemek, hataları gidermek ve hizmetlerimizi geliştirmek.</li>
            <li>Güvenliği sağlamak ve kötüye kullanımı önlemek.</li>
          </ul>

          <h2 className="text-xl font-medium text-black mt-8 mb-4">4. Veri Paylaşımı ve Üçüncü Taraflar</h2>
          <p className="mb-4">
            Kişisel verilerinizi asla üçüncü taraflara satmayız. Ancak hizmetlerimizi sunabilmek için aşağıdaki gibi güvenilir servis sağlayıcılarla çalışabiliriz:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Google AdMob:</strong> Uygulama içinde reklam göstermek için kullanılır. AdMob, size uygun reklamlar sunabilmek için cihaz tanımlayıcılarını kullanabilir. Cihaz ayarlarınızdan reklam kişiselleştirmeyi sınırlandırabilirsiniz.</li>
            <li><strong>Firebase:</strong> Veritabanı yönetimi, kimlik doğrulama, çökme analizleri ve analitik için kullanılır.</li>
          </ul>

          <h2 className="text-xl font-medium text-black mt-8 mb-4">5. Veri Silme ve Kullanıcı Hakları</h2>
          <p className="mb-4">
            Apple yönergeleri gereğince verileriniz üzerinde tam kontrol sahibisiniz:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Uygulama içindeki hesap ayarları bölümünden hesabınızı ve tüm verilerinizi kalıcı olarak silebilirsiniz.</li>
            <li>Hangi verilerinizi sakladığımızı öğrenmek veya dışa aktarmak için bizimle iletişime geçebilirsiniz.</li>
          </ul>

          <h2 className="text-xl font-medium text-black mt-8 mb-4">6. Veri Güvenliği</h2>
          <p className="mb-4">
            Verilerinizi korumak için endüstri standardı şifreleme ve güvenlik önlemleri kullanıyoruz. Verileriniz güvenli sunucularda saklanır ve yalnızca gerekli durumlarda erişilir.
          </p>

          <h2 className="text-xl font-medium text-black mt-8 mb-4">7. Çocukların Gizliliği</h2>
          <p className="mb-4">
            Hizmetlerimiz 13 yaşın altındaki çocuklara yönelik değildir. 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamıyoruz.
          </p>

          <h2 className="text-xl font-medium text-black mt-8 mb-4">8. İletişim</h2>
          <p className="mb-4">
            Bu Gizlilik Politikası hakkında sorularınız varsa, lütfen bizimle iletişime geçin: <strong>iletisim@gituar.com</strong>
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
